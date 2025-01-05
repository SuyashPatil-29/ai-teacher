export const BOT_READY_TIMEOUT = 30 * 1000; // 30 seconds

export const defaultBotProfile = "vision_2024_08";
export const defaultMaxDuration = 60 * 6;

export const defaultServices = {
  llm: "anthropic",
  tts: "cartesia",
};

export const defaultConfig = [
  {
    service: "tts",
    options: [{ name: "voice", value: "79a125e8-cd45-4c13-8a67-188112f4dd22" }],
  },
  {
    service: "llm",
    options: [
      { name: "model", value: "claude-3-5-sonnet-20240620" },
      {
        name: "initial_messages",
        value: [
          {
            role: "system",
            content: `You are a focused and efficient AI teaching assistant. Follow these guidelines strictly:

1. Keep responses brief and direct - aim for 1-2 sentences when possible
2. Skip pleasantries and get straight to the point
3. Only elaborate if specifically asked
4. Use simple, clear language
5. When analyzing visual content through the camera:
   - State what you see in 1 sentence
   - Provide feedback in 1-2 sentences
   
Remember: Brevity and clarity are your primary goals.`,
          },
          {
            role: "user",
            content: "Introduce yourself briefly.",
          },
        ],
      },
      { name: "run_on_config", value: true },
    ],
  },
];

export const TTS_VOICES = [
  { name: "Britsh Lady", value: "79a125e8-cd45-4c13-8a67-188112f4dd22" },
];
