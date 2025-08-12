import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle } from 'lucide-react';

const completePackageIncludes = [
  'Guia Lucrativo do morango do Amor Chilena',
  'Vídeo Aula Exclusiva (preparo, segredos, diferenciais)',
  '🎁 Bônus inclusos:',
  'BÔNUS 1 – Checklist da Primeira Venda',
  'BÔNUS 2 – Sugestão de Embalagem Bonita e Barata',
  'BÔNUS 3 – Estratégia para Vender na Rua',
  'BÔNUS 4 – Como Calcular o meu Lucro',
  'BÔNUS 5 – Checklist de Erros Comuns e Como Evitar',
  'BÔNUS 6 – Ideias de Promoções',
  'BÔNUS 7 – Guia Rápido de Conservação e Transporte',
  'Garantia de 30 dias',
  'Acesso vitalício',
];

const simplePackageIncludes = [
    "'Sabores Coreanos Adaptados'",
    'Acesso por 6 meses',
    'Garantia de 7 dias',
]


export function OfferSection() {
  return (
    <section id="offer" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-secondary to-accent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-3 text-center mb-12">
            <h2 className="text-4xl font-bold font-headline tracking-tighter text-white sm:text-5xl md:text-6xl">
            Oferta especial por tempo limitado!
            </h2>
            <p className="mx-auto max-w-[600px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Não perca a oportunidade de iniciar seu próprio negócio de sucesso.
            </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
          {/* Pacote Completo */}
          <Card className="shadow-2xl border-4 border-pink-500 relative overflow-visible">
            <div className="absolute -top-4 right-6 bg-pink-500 text-white px-4 py-1 rounded-md text-sm font-bold">
              MAIS POPULAR
            </div>
            <CardHeader className="text-center pt-8">
              <CardTitle className="font-headline text-3xl">Pacote Completo: Super OFERTA</CardTitle>
              <p className="text-destructive line-through text-xl">R$177,80</p>
              <p className="text-5xl font-bold text-primary font-headline">R$19,90</p>
              <CardDescription>Experiência completa</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="grid gap-3 text-left text-muted-foreground">
                {completePackageIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-pink-500 mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="w-full h-12 text-lg font-bold bg-red-600 hover:bg-red-700 text-white">
                ÚLTIMAS VAGAS COM DESCONTO!
              </Button>
              <div className="space-y-2 text-center">
                <p className="text-sm font-medium">Vagas Preenchidas: <span className="float-right">95%</span></p>
                <Progress value={95} className="h-4 bg-green-200" />
                <p className="text-sm text-muted-foreground">11 vagas restantes</p>
              </div>
              <Button size="lg" className="w-full h-14 text-xl font-bold bg-green-600 hover:bg-green-700 text-white transform hover:scale-105 transition-transform duration-300">
                Sim! Quero essa SUPER OFERTA!
              </Button>
            </CardContent>
          </Card>

          {/* Pacote Simples */}
          <Card className="shadow-lg bg-white/90">
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-3xl">Pacote Simples</CardTitle>
               <p className="text-5xl font-bold text-primary font-headline">R$9,90</p>
              <CardDescription>Para começar</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="grid gap-3 text-left text-muted-foreground">
                {simplePackageIncludes.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-pink-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" variant="secondary" className="w-full h-12 text-lg font-bold bg-gray-400 hover:bg-gray-500 text-white cursor-not-allowed">
                Quero essa Opção!
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
