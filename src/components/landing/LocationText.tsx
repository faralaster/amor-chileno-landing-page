'use client';

import { useEffect, useState } from 'react';

export function LocationText() {
  const [city, setCity] = useState('tu ciudad');

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
    <p className="text-white text-lg font-semibold" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }} data-aos="fade-up" data-aos-delay="100">
      Aprende a vender Fresa de Amor hoy mismo en la Región cercanas a la ciudad de {city}
    </p>
  );
}
