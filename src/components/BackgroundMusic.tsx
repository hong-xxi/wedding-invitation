import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const start = () => {
      if (!started && audioRef.current) {
        audioRef.current.volume = 0.4;
        audioRef.current.play().catch(() => {});
        setStarted(true);
      }
    };

    window.addEventListener("touchstart", start, { once: true });
    window.addEventListener("click", start, { once: true });

    return () => {
      window.removeEventListener("touchstart", start);
      window.removeEventListener("click", start);
    };
  }, [started]);

  return (
    <audio ref={audioRef} loop>
      <source src="/music/wedding.mp3" type="audio/mpeg" />
    </audio>
  );
}
