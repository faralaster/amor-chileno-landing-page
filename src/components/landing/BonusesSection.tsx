import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const bonuses = [
  {
    title: 'Bônus 1: Checklist da Primeira Venda',
    description: 'Un paso a paso para que tu primer día de ventas sea un éxito total.',
    value: '15.000 CLP',
    image: {
      src: 'https://placehold.co/400x300.png',
      hint: 'checklist document',
    },
  },
  {
    title: 'Bônus 2: Sugestões de Embalagens',
    description: 'Ideas creativas para presentar tus productos de forma bonita y económica.',
    value: '10.000 CLP',
    image: {
      src: 'https://placehold.co/400x300.png',
      hint: 'gift packaging',
    },
  },
  {
    title: 'Bônus 3: Estratégia para Vender na Rua',
    description: 'Los secretos para elegir el mejor punto y atraer clientes en cualquier lugar.',
    value: '20.000 CLP',
    image: {
      src: 'https://placehold.co/400x300.png',
      hint: 'street market',
    },
  },
];

export function BonusesSection() {
  return (
    <section id="bonuses" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">
              Y eso no es todo, ¡recibe 3 bonos exclusivos!
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Al comprar la guía hoy, también obtienes acceso inmediato a estos materiales extra sin costo alguno.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {bonuses.map((bonus) => (
            <Card key={bonus.title} className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="font-headline text-xl">{bonus.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <div className="aspect-video overflow-hidden rounded-md">
                   <Image
                      src={bonus.image.src}
                      alt={bonus.title}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                      data-ai-hint={bonus.image.hint}
                    />
                </div>
                <p className="text-muted-foreground">{bonus.description}</p>
              </CardContent>
              <CardFooter className="flex items-center justify-between bg-muted/50 p-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-semibold text-destructive line-through decoration-2">
                    {bonus.value}
                  </span>
                </div>
                <Badge variant="destructive" className="text-lg font-bold">GRATIS</Badge>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
