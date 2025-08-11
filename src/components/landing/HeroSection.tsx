import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section id="hero" className="w-full pt-20 pb-12 md:pt-32 md:pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-secondary/80 via-accent/50 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <h1 className="text-4xl font-bold font-headline tracking-tighter text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl text-shadow-lg text-white">
              Descubra como transformar o Morango do Amor em um negócio lucrativo no Chile
            </h1>
            <p className="max-w-xl mx-auto lg:mx-0 text-lg text-white/90 md:text-xl">
              Aprenda técnicas, receitas e segredos para vender mais e ganhar clientes fiéis com o nosso guia completo.
            </p>
            <div className="w-full flex justify-center lg:justify-start pt-4">
              <a href="#offer">
                <Button size="lg" className="h-14 text-lg px-10 shadow-lg transform hover:scale-105 transition-transform duration-300">
                  Quiero Garantizar Mi Guía Ahora
                </Button>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/500x550.png"
              alt="eBook Guía Rentable para el Amor por la Fresa Chilena"
              width={500}
              height={550}
              className="rounded-xl shadow-2xl transform lg:rotate-3 transition-transform duration-500 hover:rotate-0 hover:scale-105"
              priority
              data-ai-hint="ebook cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
