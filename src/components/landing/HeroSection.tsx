import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Countdown } from '@/components/landing/Countdown';
import { LocationText } from '@/components/landing/LocationText';

export function HeroSection() {
  return (
    <section id="hero" className="w-full bg-gradient-to-br from-red-500 via-pink-500 to-rose-400">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center min-h-[90vh] text-center py-12">
          <div className="flex flex-col items-center space-y-6">
            <Countdown />
            <div className="space-y-3 text-center w-full">
              <h1 className="text-3xl font-headline tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl uppercase" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                El Dulce Que <span className="font-extrabold text-yellow-300">Se Hizo Viral En Brasil</span> Recientemente y Puede Hacerte <span className="font-extrabold text-yellow-300">El Primero en Lucrar</span> Con Él <br /> En <span className="font-extrabold text-yellow-300">Chile</span>
              </h1>
              <p className="max-w-4xl mx-auto text-lg text-white/95 md:text-xl">
                Descubre la receta secreta de la 'Fresa de Amor' que se convirtió en fiebre en Brasil + el método exacto para ser la primera en vender en Chile y dominar este mercado inexplorado antes de que todos lo descubran.
              </p>
            </div>
            <div className="py-4">
                  <Image
                  src="https://imgur.com/JgjDPlu.png"
                  alt="eBook Guía Lucrativa para la Fresa de Amor"
                  width={700}
                  height={400}
                  className="shadow-2xl aspect-[700/400] object-cover border-8 border-white/50 rounded-xl"
                  priority
                  data-ai-hint="strawberry chocolate dessert"
                  />
            </div>
            <LocationText />
            <div className="w-full flex justify-center pt-4">
              <a href="#product">
                <Button size="lg" className="h-16 text-xl px-12 font-bold bg-green-500 text-white hover:bg-green-600 shadow-lg transform hover:scale-105 transition-transform duration-300 border-b-4 border-green-700 active:translate-y-1 active:border-b-0 rounded-full">
                  ¡QUIERO LA GUÍA!
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
