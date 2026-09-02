"use client";

import { useEffect, useState } from "react";

export default function LiveStatsCycler({
  values,
  recentJoiners,
  interval = 3000,
}: Readonly<{
  values: number[];
  recentJoiners: number;
  interval?: number;
}>) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % values.length);
    }, interval);
    return () => clearInterval(timer);
  }, [values, interval]);

  return (
    <div className="live-stats">
      <div className="live-online">
        <span className="live-dot" />
        <span>{values[index]} pessoas online</span>
      </div>
      <div className="live-recent">
        <span className="live-clock">⏱</span>
        <span>{recentJoiners} pessoas entraram nos últimos minutos</span>
      </div>
    </div>
  );
}
