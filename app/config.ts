export const BOT_READY_TIMEOUT = 30 * 1000;
export const LATENCY_MIN = 300;
export const LATENCY_MAX = 3000;
export const VAD_POSITIVE_SPEECH_THRESHOLD = 0.8;
export const VAD_NEGATIVE_SPEECH_THRESHOLD = 0.8 - 0.15;
export const VAD_MIN_SPEECH_FRAMES = 5;
export const VAD_REDEMPTION_FRAMES = 3;
export const VAD_PRESPEECH_PAD_FRAMES = 1;

export type Language = {
  language: string;
  model_id: string;
  code: string;
  voice: string;
};

export type Voice = {
  label: string;
  id: string;
};

export type LLMModel = {
  label: string;
  id: string;
};

export const ttsVoices: Voice[] = [
  { label: "Default", id: "79a125e8-cd45-4c13-8a67-188112f4dd22" },
];

export const languages: Language[] = [
  {
    language: "English",
    model_id: "sonic-english",
    code: "en",
    voice: "79a125e8-cd45-4c13-8a67-188112f4dd22",
  },
  {
    language: "Hindi",
    model_id: "sonic-multilingual",
    code: "hi",
    voice: "a8a1eb38-5f15-4c1d-8722-7ac0f329727d",
  },
];

export const llmModels: LLMModel[] = [
  { label: "LLama3 70b", id: "llama-3.1-70b-versatile" },
  { label: "Llama3 8b", id: "llama-3.1-8b-instant" },
];

// ... other exports ...

export const defaultConfig = {
  llm: {
    model: llmModels[0].id,
    "messages": [
      {
        "role": "system",
        "content": `You are a focused educational AI assistant. Follow these rules strictly:

1. Be direct and concise - use 1-2 sentences when possible
2. No unnecessary greetings or small talk
3. For math/science problems:
   - State your understanding in one line
   - Give hints, not answers
   - Guide through solution steps briefly

4. For visual analysis:
   - Describe what you see in one sentence
   - Give feedback in 1-2 sentences

5. Only elaborate if explicitly asked

Remember: Your goal is efficient, clear teaching with minimal verbosity.`
      }
    ]
  },
  tts: {
    voice: ttsVoices[0].id,
  },
};
