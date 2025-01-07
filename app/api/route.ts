// [POST] /api
import { defaultBotProfile, defaultMaxDuration, serviceOptions } from "./../../rtvi.config";

export async function POST(request: Request) {
  const { services, config } = await request.json();

  if (!services || !config || !process.env.DAILY_BOTS_URL) {
    return new Response(`Services or config not found on request body`, {
      status: 400,
    });
  }

  const payload = {
    bot_profile: defaultBotProfile,
    max_duration: defaultMaxDuration,
    service_options: serviceOptions,
    services,
    api_keys: {
      openai: process.env.OPENAI_API_KEY,
      openai_tts: process.env.OPENAI_API_KEY,
    },
    config: [...config],
  };

  const req = await fetch(process.env.DAILY_BOTS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.DAILY_API_KEY}`,
    },
    body: JSON.stringify(payload),
  });

  const res = await req.json();

  if (req.status !== 200) {
    return Response.json(res, { status: req.status });
  }

  return Response.json(res);
}
