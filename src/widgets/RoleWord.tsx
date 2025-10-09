import { useEffect, useMemo, useRef, useState } from "react";

type RoleWordProps = {
  roles?: string[];
  typingSpeed?: number;
  hold?: number;
  className?: string;
};

export default function RoleWord({
  roles = ["백엔드", "웹", "소프트웨어"],
  typingSpeed = 36,
  hold = 900,
  className = "",
}: RoleWordProps) {
  const reduced = useMemo(
    () => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false,
    []
  );

  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const timerRef = useRef<number | null>(null);
  const word = roles[idx] ?? "";

  useEffect(() => {
    if (reduced || typingSpeed <= 0) {
      setText(word);
      timerRef.current = window.setTimeout(
        () => setIdx((p) => (p + 1) % roles.length),
        hold
      );
      return () => {
        if (timerRef.current) window.clearTimeout(timerRef.current);
      };
    }

    setText("");
    let i = 0;
    const typeId = window.setInterval(() => {
      i++;
      setText(word.slice(0, i));
      if (i >= word.length) {
        window.clearInterval(typeId);
        timerRef.current = window.setTimeout(
          () => setIdx((p) => (p + 1) % roles.length),
          hold
        );
      }
    }, typingSpeed);

    return () => {
      window.clearInterval(typeId);
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [word, roles.length, typingSpeed, hold, reduced]);

  return (
    <span className={className} aria-live="polite" aria-atomic="true">
      {text}
    </span>
  );
}
