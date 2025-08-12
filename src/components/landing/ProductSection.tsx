import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function ProductSection() {
  return (
    <section id="product" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium">
              O Guia Definitivo
            </div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
              O que é o "Guia Lucrativo para o Amor por Morango"?
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              É um eBook completo em formato PDF que ensina, passo a passo, tudo o que você precisa saber para criar e vender morangos do amor irresistíveis. Das receitas secretas às estratégias de venda mais eficazes, este guia é seu atalho para o sucesso.
            </p>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Você descobrirá como escolher os melhores ingredientes, decorar de forma profissional, calcular seus custos e preços, e promover seu negócio para atrair uma multidão de clientes.
            </p>
            <div className="flex gap-4 pt-4">
               <a href="#offer">
                <Button size="lg" className="h-14 text-lg px-10">Comprar Agora</Button>
               </a>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Image
              src="https://placehold.co/600x450.png"
              width="600"
              height="450"
              alt="Mockup do eBook e dos bônus"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              data-ai-hint="ebook mockup spread"
            />
            <div className="text-center p-6 bg-muted rounded-xl w-full">
                <p className="text-lg font-medium text-muted-foreground">Oferta de Lançamento</p>
                <p className="text-4xl font-bold font-headline text-primary">
                    <span className="text-2xl text-destructive line-through decoration-2 mr-2">R$97,00</span>
                    R$19,90
                </p>
                <p className="font-semibold text-green-600">Você economiza R$77,10!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
