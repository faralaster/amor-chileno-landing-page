import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const bonuses = [
  {
    title: 'Bono 1: Checklist de la Primera Venta',
    description: 'Un paso a paso para que tu primer día de ventas sea un éxito total.',
    value: '$8000',
    image: {
      src: 'https://i.imgur.com/o20bhpy.png',
      hint: 'checklist document',
    },
  },
  {
    title: 'Bono 2: Sugerencia de Empaque',
    description: 'Ideas creativas para presentar tus productos de forma bonita y económica.',
    value: '$5000',
    image: {
      src: 'https://i.imgur.com/aX84vXM.png',
      hint: 'gift packaging',
    },
  },
  {
    title: 'Bono 3: Estrategia para Vender en la Calle',
    description: 'Los secretos para elegir el mejor punto y atraer clientes en cualquier lugar.',
    value: '$8000',
    image: {
      src: 'https://i.imgur.com/TbVd03I.png',
      hint: 'street market',
    },
  },
  {
    title: 'Bono 4: Checklist de Errores Comunes',
    description: 'Aprende a evitar los errores más comunes que cometen los principiantes y adelántate a la competencia.',
    value: '$6500',
    image: {
      src: 'https://i.imgur.com/BBhWmk5.png',
      hint: 'warning sign',
    },
  },
  {
    title: 'Bono 5: Ideas de Promociones',
    description: 'Estrategias de promociones como "compra X, lleva Y" para aumentar el valor de tu ticket promedio.',
    value: '$3000',
    image: {
      src: 'https://i.imgur.com/1fDF9hg.png',
      hint: 'promotional sale tag',
    },
  },
  {
    title: 'Bono 6: Conservación y Transporte',
    description: 'Consejos esenciales para mantener tus fresas de amor frescas y transportarlas con seguridad.',
    value: '$4500',
    image: {
      src: 'https://i.imgur.com/31Wyidp.png',
      hint: 'delivery box',
    },
  },
];

export function BonusesSection() {
  const getBonusCard = (bonus: typeof bonuses[0], index: number) => {
    return (
      <Card key={bonus.title} className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 w-[280px] h-[400px]">
        <CardHeader>
          <CardTitle className="font-headline text-xl h-12">{bonus.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow space-y-4">
          <div className={`aspect-video overflow-hidden rounded-md`}>
             <Image
                src={bonus.image.src}
                alt={bonus.title}
                width={400}
                height={300}
                className="object-contain w-full h-full"
                data-ai-hint={bonus.image.hint}
              />
          </div>
          <p className="text-muted-foreground h-20">{bonus.description}</p>
        </CardContent>
        <CardFooter className="flex items-center justify-between bg-muted/50 p-4">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-semibold text-destructive line-through decoration-2">
              {bonus.value}
            </span>
          </div>
          <Badge variant="default" className="text-lg font-bold bg-green-500 hover:bg-green-600">GRATIS</Badge>
        </CardFooter>
      </Card>
    );
  }

  return (
    <section id="bonuses" className="w-full py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">
              ¡Y eso no es todo, recibe 6 bonos exclusivos!
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Al comprar la guía hoy, también obtienes acceso inmediato a estos materiales extra sin costo alguno.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-2 py-12 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          {bonuses.map((bonus, index) => getBonusCard(bonus, index))}
        </div>
      </div>
    </section>
  );
}
