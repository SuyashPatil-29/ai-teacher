import React, { useCallback, useRef, useState } from "react";
import clsx from "clsx";
import { Loader2, Mic, MicOff, Pause } from "lucide-react";
import { VoiceEvent } from "realtime-ai";
import { useVoiceClient, useVoiceClientEvent } from "realtime-ai-react";

import styles from "./styles.module.css";

const AudioIndicatorBubble: React.FC = () => {
  const volRef = useRef<HTMLDivElement>(null);

  useVoiceClientEvent(
    VoiceEvent.LocalAudioLevel,
    useCallback((volume: number) => {
      if (volRef.current) {
        const v = Number(volume) * 1.75;
        volRef.current.style.transform = `scale(${Math.max(0.1, v)})`;
      }
    }, [])
  );

  return <div ref={volRef} className={styles.volume} />;
};

interface Props {
  active: boolean;
  muted: boolean;
  handleMute: () => void;
}

export default function UserMicBubble({
  active,
  muted = false,
  handleMute,
}: Props) {

  const canTalk = !muted && active;
  const [botIsSpeaking, setBotIsSpeaking] = useState(false);

  // ---- Voice Client Events
  useVoiceClientEvent(
    VoiceEvent.BotStartedSpeaking,
    useCallback(() => {
      setBotIsSpeaking(true);
    }, [])
  );

  useVoiceClientEvent(
    VoiceEvent.BotStoppedSpeaking,
    useCallback(() => {
      setBotIsSpeaking(false);
    }, [])
  );

  const voiceClient = useVoiceClient()!;
  const handleInterrupt = () => {
    voiceClient.action({
      service: "tts",
      action: "interrupt",
      arguments: [],
    });
  };

  const cx = clsx(
    muted && active && styles.muted,
    !active && styles.blocked,
    canTalk && styles.canTalk
  );

  if (botIsSpeaking) {
    return (
      <div className={`${styles.bubbleContainer}`} onClick={handleInterrupt}>
        <div className={`${styles.bubble} ${cx}`}>
          <div className={styles.icon}>
            <Pause size={42} className="size-8 md:size-10" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`${styles.bubbleContainer}`}>
      <div className={`${styles.bubble} ${cx}`} onClick={() => handleMute()}>
        <div className={styles.icon}>
          {!active ? (
            <Loader2 size={42} className="size-8 md:size-10 animate-spin text-black" />
          ) : canTalk ? (
            <Mic size={42} className="size-8 md:size-10" />
          ) : (
            <MicOff size={42} className="size-8 md:size-10" />
          )}
        </div>
        {canTalk && <AudioIndicatorBubble />}
      </div>
    </div>
  );
}
