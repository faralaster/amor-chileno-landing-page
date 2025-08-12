import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const bonuses = [
  {
    title: 'Bônus 1: Checklist da Primeira Venda',
    description: 'Um passo a passo para que seu primeiro dia de vendas seja um sucesso total.',
    value: 'R$47',
    image: {
      src: 'https://placehold.co/400x300.png',
      hint: 'checklist document',
    },
  },
  {
    title: 'Bônus 2: Sugestão de Embalagem Bonita e Barata',
    description: 'Ideias criativas para apresentar seus produtos de forma bonita e econômica.',
    value: 'R$27',
    image: {
      src: 'https://placehold.co/400x300.png',
      hint: 'gift packaging',
    },
  },
  {
    title: 'Bônus 3: Estratégia para Vender na Rua',
    description: 'Os segredos para escolher o melhor ponto e atrair clientes em qualquer lugar.',
    value: 'R$67',
    image: {
      src: 'https://placehold.co/400x300.png',
      hint: 'street market',
    },
  },
  {
    title: 'Bônus 4: Mini Calculadora de Lucro',
    description: 'Uma ferramenta simples para você calcular rapidamente o lucro de cada venda e otimizar seus preços.',
    value: 'R$37',
    image: {
      src: 'https://placehold.co/400x300.png',
      hint: 'calculator money',
    },
  },
  {
    title: 'Bônus 5: Checklist de Erros Comuns',
    description: 'Aprenda a evitar os erros mais comuns que iniciantes cometem e saia na frente da concorrência.',
    value: 'R$27',
    image: {
      src: 'https://placehold.co/400x300.png',
      hint: 'warning sign',
    },
  },
  {
    title: 'Bônus 6: Ideias de Promoções',
    description: 'Estratégias de promoções como "compre X, leve Y" para aumentar o valor do seu ticket médio.',
    value: 'R$47',
    image: {
      src: 'https://placehold.co/400x300.png',
      hint: 'promotional sale tag',
    },
  },
  {
    title: 'Bônus 7: Guia de Conservação e Transporte',
    description: 'Dicas essenciais para manter seus morangos do amor frescos e transportá-los com segurança.',
    value: 'R$17',
    image: {
      src: 'https://placehold.co/400x300.png',
      hint: 'delivery box',
    },
  },
];

export function BonusesSection() {
  return (
    <section id="bonuses" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">
            E não é só isso, receba 7 bônus exclusivos!
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Ao comprar o guia hoje, você também obtém acesso imediato a estes materiais extras sem custo algum.
          </p>
        </div>
      </div>
      <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {bonuses.slice(0, 4).map((bonus) => (
          <Card key={bonus.title} className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="font-headline text-xl h-12">{bonus.title}</CardTitle>
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
              <p className="text-muted-foreground h-20">{bonus.description}</p>
            </CardContent>
            <CardFooter className="flex items-center justify-between bg-muted/50 p-4">
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-semibold text-destructive line-through decoration-2">
                  {bonus.value}
                </span>
              </div>
              <Badge variant="destructive" className="text-lg font-bold">GRÁTIS</Badge>
            </CardFooter>
          </Card>
        ))}
      </div>
       <div className="mx-auto grid grid-cols-1 gap-6 py-2 sm:grid-cols-2 lg:grid-cols-3">
         {bonuses.slice(4).map((bonus) => (
          <Card key={bonus.title} className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="font-headline text-xl h-12">{bonus.title}</CardTitle>
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
              <p className="text-muted-foreground h-20">{bonus.description}</p>
            </CardContent>
            <CardFooter className="flex items-center justify-between bg-muted/50 p-4">
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-semibold text-destructive line-through decoration-2">
                  {bonus.value}
                </span>
              </div>
              <Badge variant="destructive" className="text-lg font-bold">GRÁTIS</Badge>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
