'use client';

import { useEffect, useState } from 'react';

export function LocationText() {
  const [city, setCity] = useState('sua cidade');

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then(response => response.json())
      .then(data => {
        if (data && data.city) {
          setCity(data.city);
        }
      })
      .catch(() => {
        // Fails silently and keeps the default city
      });
  }, []);

  return (
    <p className="text-white/90 text-md" data-aos="fade-up" data-aos-delay="100">
      Aprenda a vender Morango do Amor hoje mesmo em {city}
    </p>
  );
}
