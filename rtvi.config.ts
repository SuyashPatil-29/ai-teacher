export const BOT_READY_TIMEOUT = 30 * 1000; // 30 seconds

export const defaultBotProfile = "vision_2024_08";
export const defaultMaxDuration = 60 * 6;

export const defaultServices = {
  llm: "anthropic",
  tts: "cartesia",
};

export interface Language {
  name: string;
  value: string;
  ttsVoice: string;
}

export const LANGUAGES: Language[] = [
  {
    name: "English",
    value: "en",
    ttsVoice: "79a125e8-cd45-4c13-8a67-188112f4dd22" // British voice
  },
  {
    name: "Hindi",
    value: "hi",
    ttsVoice: "79a125e8-cd45-4c13-8a67-188112f4dd22" // Hindi voice
  },
  {
    name: "Tamil",
    value: "ta",
    ttsVoice: "79a125e8-cd45-4c13-8a67-188112f4dd22" // Tamil voice
  },
  {
    name: "Telugu",
    value: "te",
    ttsVoice: "79a125e8-cd45-4c13-8a67-188112f4dd22" // Telugu voice
  }
];

export const defaultConfig = [
  {
    service: "tts",
    options: [
      {
        "name": "model",
        "value": "sonic"
      },
      {
        "name": "voice",
        "value": "bdab08ad-4137-4548-b9db-6142854c7525"
      }
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
  { name: "Britsh Lady", value: "bdab08ad-4137-4548-b9db-6142854c7525" },
];
