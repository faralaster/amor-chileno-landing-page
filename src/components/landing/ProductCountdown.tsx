'use client';

import { useState, useEffect } from 'react';

export function ProductCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 13,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          seconds = 59;
          minutes--;
        } else if (hours > 0) {
          seconds = 59;
          minutes = 59;
          hours--;
        } else {
          // Timer ended
          return { hours: 0, minutes: 0, seconds: 0 };
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <div className="absolute top-2 right-2 bg-red-500 text-white rounded-md px-2 py-1 text-sm font-bold tabular-nums">
        <span>{formatTime(timeLeft.hours)}:</span>
        <span>{formatTime(timeLeft.minutes)}:</span>
        <span>{formatTime(timeLeft.seconds)}</span>
    </div>
  );
}
