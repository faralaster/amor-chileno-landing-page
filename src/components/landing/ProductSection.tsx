import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ProductCountdown } from '@/components/landing/ProductCountdown';

export function ProductSection() {
  return (
    <section id="product" className="w-full py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-center">
          <div className="space-y-4" data-aos="fade-up">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium">
              O Guia Definitivo
            </div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
              O que é o "Guia Lucrativo para o Amor por Morango Chilena"?
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              É um Conteudo completo que ensina, passo a passo, tudo o que você precisa saber para criar e vender morangos do amor irresistíveis. Das receitas secretas às estratégias de venda mais eficazes, este guia é seu atalho para o sucesso.
            </p>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Você descobrirá como escolher os melhores ingredientes, decorar de forma profissional, calcular seus custos e preços, e promover seu negócio para atrair uma multidão de clientes.
            </p>
            <div className="flex gap-4 pt-4">
               <a href="#bonuses">
                <Button size="lg" className="h-16 text-xl px-12 font-bold bg-green-500 text-white hover:bg-green-600 shadow-lg transform hover:scale-105 transition-transform duration-300 border-b-4 border-green-700 active:translate-y-1 active:border-b-0 rounded-full">Comprar Agora</Button>
               </a>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4" data-aos="fade-up" data-aos-delay="200">
            <Image
              src="https://i.imgur.com/SfyaDLN.png"
              width="600"
              height="700"
              alt="Mockup do eBook e dos bônus"
              className="mx-auto aspect-[6/7] overflow-hidden rounded-xl object-cover object-center sm:w-full"
              data-ai-hint="ebook mockup spread"
            />
            <div className="text-center p-6 bg-muted rounded-xl w-full relative">
                <ProductCountdown />
                <p className="text-lg font-medium text-muted-foreground">Oferta por tempo Limitado</p>
                <p className="text-4xl font-bold font-headline text-primary">
                    <span className="text-2xl text-destructive line-through decoration-2 mr-2">$ 37000</span>
                    $ 6500
                </p>
                <p className="font-semibold text-green-600">Você economiza $30500!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
