import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section id="hero" className="w-full bg-gradient-to-br from-red-500 via-pink-500 to-rose-400">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-center min-h-[90vh] text-center py-12">
        <div className="flex flex-col items-center space-y-6">
          <div className="space-y-3 text-center">
            <h1 className="text-xl font-headline tracking-tighter text-white sm:text-2xl md:text-3xl lg:text-4xl uppercase max-w-7xl" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              O Doce Que <span className="font-extrabold text-yellow-300">Viralizou no Brasil</span> Recentemente e Pode Fazer Você Estar Ganhando <span className="font-extrabold text-yellow-300">um Salário Mínimo Por Semana</span> <span className="font-extrabold text-yellow-300">No Chile</span>
            </h1>
            <p className="max-w-4xl mx-auto text-xs text-white/95 md:text-sm">
              Descubra a receita secreta do <i className="font-semibold">'Morango do Amor'</i> que está fazendo brasileiras ganharem milhares por semana + o método exato para ser a primeira a vender no Chile e dominar este mercado inexplorado antes que todos descubram
            </p>
          </div>
          <div className="py-4">
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
