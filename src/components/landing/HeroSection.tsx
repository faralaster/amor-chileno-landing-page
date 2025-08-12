import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section id="hero" className="w-full pt-8 pb-12 md:pt-12 md:pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-br from-red-500 via-pink-500 to-rose-400">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold font-headline tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              O Doce Que Viralizou No Brasil Recentemente e Pode Fazer Você Estar Ganhando um Salário Mínimo Por Semana No Chile
            </h1>
            <p className="max-w-3xl text-lg text-white/95 md:text-xl">
              Descubra a receita secreta do 'Morango do Amor' que está fazendo brasileiras ganharem milhares por semana + o método exato para ser a primeira a vender no Chile e dominar este mercado inexplorado antes que todos descubram
            </p>
          </div>
          <div className="flex justify-center items-center py-4">
                <Image
                src="https://placehold.co/550x550.png"
                alt="eBook Guia Lucrativo para o Amor por Morango"
                width={550}
                height={550}
                className="rounded-full shadow-2xl aspect-square object-cover border-8 border-white/50"
                priority
                data-ai-hint="strawberry chocolate dessert"
                />
          </div>
          <div className="w-full flex justify-center pt-4">
            <a href="#offer">
              <Button size="lg" className="h-16 text-xl px-12 font-bold bg-white text-rose-600 hover:bg-white/90 shadow-lg transform hover:scale-105 transition-transform duration-300">
                EU QUERO O GUIA
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
