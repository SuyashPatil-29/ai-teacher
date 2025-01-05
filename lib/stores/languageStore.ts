import { create } from 'zustand';
import { LANGUAGES } from '@/rtvi.config';
import { VoiceClient } from 'realtime-ai';

interface LanguageState {
  selectedLanguage: string;
  ttsVoice: string;
  setLanguage: (language: string, voiceClient: VoiceClient) => Promise<void>;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  selectedLanguage: LANGUAGES[0].value,
  ttsVoice: LANGUAGES[0].ttsVoice,
  setLanguage: async (language: string, voiceClient: VoiceClient) => {
    const selectedLang = LANGUAGES.find(lang => lang.value === language);
    if (selectedLang) {
      // Update store state
      set({
        selectedLanguage: selectedLang.value,
        ttsVoice: selectedLang.ttsVoice,
      });

      // Update voice client config
      await voiceClient.updateConfig([
        {
          service: "stt",
          options: [
            { name: "model", value: "nova-2-general" },
            { name: "language", value: selectedLang.value },
          ],
        },
        {
          service: "tts",
          options: [
            { name: "voice", value: selectedLang.ttsVoice }
          ],
        }
      ]);
    }
  },
}));