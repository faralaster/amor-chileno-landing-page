'use client';

import { useState, useEffect } from 'react';

export function Countdown() {
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
    <div className="bg-[#FFD600] text-black py-4 px-6 rounded-full shadow-2xl w-full max-w-2xl mx-auto animate-pulse">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="font-bold text-xl md:text-2xl">
          <span>Oferta especial termina en: </span>
          <span className="tabular-nums text-2xl md:text-3xl tracking-widest ml-2">{formatTime(timeLeft.hours)}:</span>
          <span className="tabular-nums text-2xl md:text-3xl tracking-widest">{formatTime(timeLeft.minutes)}:</span>
          <span className="tabular-nums text-2xl md:text-3xl tracking-widest">{formatTime(timeLeft.seconds)}</span>
        </div>
      </div>
    </div>
  );
}
