export const BOT_READY_TIMEOUT = 30 * 1000; // 30 seconds

export const defaultBotProfile = "vision_2024_08";
export const defaultMaxDuration = 60 * 6;

export const defaultServices = {
  llm: "anthropic",
  tts: "openai_tts",
};

export interface Language {
  name: string;
  value: string;
  ttsVoice: string;
}

export const serviceOptions = {
  daily: {
    "enable_noise_cancellation": false
  },
  anthropic: {
    "model": "claude-3-5-sonnet-20241022"
  },
  deepgram: {
    "model": "nova-2-general",
    "language": "en"
  },
  openai_tts: {
    "sample_rate": 24000
  }
}

export const defaultConfig = [
  {
    service: "tts",
    options: [
      {
        "name": "voice",
        "value": "alloy"
      },
      {
        "name": "language",
        "value": "en"
      },
      {
        "name": "model",
        "value": "tts-1"
      },
    ],
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
            content: ``,
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
  { name: "Britsh Lady", value: "bdab08ad-4137-4548-b9db-6142854c7525" },
];
