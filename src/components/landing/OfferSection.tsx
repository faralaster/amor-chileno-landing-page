import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const offerIncludes = [
  'Guia "Amor por Morango" (PDF)',
  'Bônus 1: Checklist da Primeira Venda',
  'Bônus 2: Sugestões de Embalagens',
  'Bônus 3: Estratégia para Vender na Rua',
  'Acesso imediato e vitalício',
  'Suporte exclusivo por WhatsApp',
];

export function OfferSection() {
  return (
    <section id="offer" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-secondary to-accent">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
            <h2 className="text-4xl font-bold font-headline tracking-tighter text-white sm:text-5xl md:text-6xl">
            Oferta especial por tempo limitado!
            </h2>
            <p className="mx-auto max-w-[600px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Não perca a oportunidade de iniciar seu próprio negócio de sucesso.
            </p>
        </div>
        <div className="mx-auto w-full max-w-md pt-8">
            <Card className="shadow-2xl">
                <CardHeader className="pb-4">
                    <CardTitle className="font-headline text-2xl">Acesso Completo</CardTitle>
                    <CardDescription>Tudo o que você recebe hoje:</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <ul className="grid gap-2 text-left text-muted-foreground">
                        {offerIncludes.map((item) => (
                            <li key={item} className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-primary"/>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="text-center bg-muted p-4 rounded-lg">
                        <p className="text-muted-foreground">Preço Normal: <span className="line-through">R$97,00</span></p>
                        <p className="text-sm">Apenas hoje, pague somente:</p>
                        <p className="text-5xl font-bold text-primary font-headline mt-2">
                            R$19,90
                        </p>
                    </div>

                    <Button size="lg" className="w-full h-14 text-lg font-bold transform hover:scale-105 transition-transform duration-300">
                        Quero Meu Guia e Bônus Grátis!
                    </Button>
                    <p className="text-xs text-muted-foreground">Compra segura. Acesso imediato.</p>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
