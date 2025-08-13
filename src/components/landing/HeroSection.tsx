import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section id="hero" className="w-full bg-gradient-to-br from-red-500 via-pink-500 to-rose-400">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center min-h-[90vh] text-center py-12">
          <div className="flex flex-col items-center space-y-6" data-aos="fade-up">
            <div className="space-y-3 text-center w-full">
              <h1 className="text-3xl font-headline tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl uppercase" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                O Doce Que <span className="font-extrabold text-yellow-300">Viralizou no Brasil</span> Recentemente e Pode Fazer Você Estar Ganhando <span className="font-extrabold text-yellow-300">um Salário Mínimo Por Semana</span> <span className="font-extrabold text-yellow-300">No Chile</span>
              </h1>
              <p className="max-w-4xl mx-auto text-lg text-white/95 md:text-xl">
                Descubra a receita secreta do <i className="font-semibold">'Morango do Amor'</i> que está fazendo brasileiras ganharem milhares por semana + o método exato para ser a primeira a vender no Chile e dominar este mercado inexplorado antes que todos descubram
              </p>
            </div>
            <div className="py-4">
                  <Image
                  src="https://placehold.co/700x430.png"
                  alt="eBook Guia Lucrativo para o Amor por Morango"
                  width={700}
                  height={430}
                  className="shadow-2xl aspect-[700/430] object-cover border-8 border-white/50 rounded-xl"
                  priority
                  data-ai-hint="strawberry chocolate dessert"
                  />
            </div>
            <div className="w-full flex justify-center pt-4">
              <a href="#offer">
                <Button size="lg" className="h-16 text-xl px-12 font-bold bg-green-500 text-white hover:bg-green-600 shadow-lg transform hover:scale-105 transition-transform duration-300 border-b-4 border-green-700 active:translate-y-1 active:border-b-0 rounded-full">
                  EU QUERO O GUIA
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
