import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function ProductSection() {
  return (
    <section id="product" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium">
              La Guía Definitiva
            </div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
              ¿Qué es la "Guía Rentable para el Amor por la Fresa Chilena"?
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Es un eBook completo en formato PDF que te enseña, paso a paso, todo lo que necesitas saber para crear y vender morangos do amor irresistibles. Desde las recetas secretas hasta las estrategias de venta más efectivas, esta guía es tu atajo hacia el éxito.
            </p>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Descubrirás cómo elegir los mejores ingredientes, decorar de forma profesional, calcular tus costos y precios, y promocionar tu negocio para atraer a una multitud de clientes.
            </p>
            <div className="flex gap-4 pt-4">
               <a href="#offer">
                <Button size="lg">Comprar Ahora</Button>
               </a>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Image
              src="https://placehold.co/600x450.png"
              width="600"
              height="450"
              alt="Mockup del eBook y los bonos"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              data-ai-hint="ebook mockup spread"
            />
            <div className="text-center p-6 bg-muted rounded-xl w-full">
                <p className="text-lg font-medium text-muted-foreground">Oferta de Lanzamiento</p>
                <p className="text-4xl font-bold font-headline text-primary">
                    <span className="text-2xl text-destructive line-through decoration-2 mr-2">49.990</span>
                    9.990 CLP
                </p>
                <p className="font-semibold text-green-600">¡Ahorras 40.000 CLP!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
