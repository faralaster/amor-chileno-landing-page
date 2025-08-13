'use client';

import { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';

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
    <div className="bg-yellow-400 text-gray-900 py-3 px-6 rounded-full shadow-lg w-full max-w-xl mx-auto mb-6 animate-pulse" data-aos="zoom-in">
      <div className="flex items-center justify-center space-x-6 text-center text-lg md:text-xl">
        <div className="font-bold">
          <span>Oferta especial termina em: </span>
          <span className="tabular-nums">{formatTime(timeLeft.hours)}:</span>
          <span className="tabular-nums">{formatTime(timeLeft.minutes)}:</span>
          <span className="tabular-nums">{formatTime(timeLeft.seconds)}</span>
        </div>
        <div className="hidden sm:flex items-center space-x-2 font-semibold">
          <MapPin className="h-5 w-5" />
          <span>em sua cidade</span>
        </div>
      </div>
    </div>
  );
}
