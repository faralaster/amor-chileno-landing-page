import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function ProductSection() {
  return (
    <section id="product" className="w-full py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium">
              La Guía Definitiva
            </div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
              ¿Qué es la "Guía Lucrativa para la Fresa de Amor Chilena"?
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Es un contenido completo que enseña, paso a paso, todo lo que necesitas saber para crear y vender fresas de amor irresistibles. Desde las recetas secretas hasta las estrategias de venta más eficaces, esta guía es tu atajo hacia el éxito.
            </p>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Descubrirás cómo elegir los mejores ingredientes, decorar de forma profesional, calcular tus costos y precios, y promover tu negocio para atraer a una multitud de clientes.
            </p>
            <div className="flex gap-4 pt-4">
               <a href="#bonuses">
                <Button size="lg" className="h-16 text-xl px-12 font-bold bg-green-500 text-white hover:bg-green-600 shadow-lg transform hover:scale-105 transition-transform duration-300 border-b-4 border-green-700 active:translate-y-1 active:border-b-0 rounded-full">Comprar Ahora</Button>
               </a>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Image
              src="https://imgur.com/sJPq3QO.png"
              width="600"
              height="600"
              alt="Mockup del eBook y los bonos"
              className="mx-auto aspect-[1/1] overflow-hidden rounded-xl object-contain object-center sm:w-full"
              data-ai-hint="ebook mockup spread"
              priority
            />
            <div className="text-center p-6 bg-muted rounded-xl w-full relative">
                <p className="text-lg font-medium text-muted-foreground">Oferta por Tiempo Limitado</p>
                <p className="text-4xl font-bold font-headline text-primary">
                    <span className="text-2xl text-destructive line-through decoration-2 mr-2">$ 37000</span>
                    $ 6500
                </p>
                <p className="font-semibold text-green-600">¡Ahorras $30500!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
