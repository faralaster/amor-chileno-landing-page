import { DessertIcon, DollarSign, Paintbrush, TrendingUp } from 'lucide-react';
import type { SVGProps } from 'react';

const benefits = [
  {
    icon: (props: SVGProps<SVGSVGElement>) => <DessertIcon {...props} />,
    title: 'Recetas irresistibles que encantan',
    description: 'Aprende a preparar frutillas de amor que conquistan al primer mordisco.',
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <TrendingUp {...props} />,
    title: 'Técnicas para aumentar tus ventas',
    description: 'Domina estrategias de marketing para vender más y construir una base de clientes leales.',
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <Paintbrush {...props} />,
    title: 'Decoraciones fáciles y atractivas',
    description: 'Transforma tus frutillas en verdaderas obras de arte con decoraciones simples e impactantes.',
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => <DollarSign {...props} />,
    title: 'Bajo costo de producción, alta ganancia',
    description: 'Descubre cómo maximizar tus ganancias con un negocio de baja inversión inicial.',
  },
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="w-full py-12 md:py-16 lg:py-20 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
              Beneficios Clave
            </div>
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">
              Todo lo que necesitas para tener éxito
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nuestra guía está llena de información práctica para que comiences a ganar dinero rápidamente.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-12 py-12 lg:grid-cols-2 lg:gap-16">
          {benefits.map((benefit, index) => (
            <div key={benefit.title} className="flex items-start gap-4">
              <div className="bg-primary text-primary-foreground rounded-full p-3">
                <benefit.icon className="h-6 w-6" />
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold font-headline">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
