import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const offerIncludes = [
  'Guía "Amor por la Fresa" (PDF)',
  'Bônus 1: Checklist da Primeira Venda',
  'Bônus 2: Sugestões de Embalagens',
  'Bônus 3: Estratégia para Vender na Rua',
  'Acceso inmediato y de por vida',
  'Soporte exclusivo por WhatsApp',
];

export function OfferSection() {
  return (
    <section id="offer" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-secondary to-accent">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
            <h2 className="text-4xl font-bold font-headline tracking-tighter text-white sm:text-5xl md:text-6xl">
            ¡Oferta especial por tiempo limitado!
            </h2>
            <p className="mx-auto max-w-[600px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            No dejes pasar la oportunidad de iniciar tu propio negocio exitoso.
            </p>
        </div>
        <div className="mx-auto w-full max-w-md pt-8">
            <Card className="shadow-2xl">
                <CardHeader className="pb-4">
                    <CardTitle className="font-headline text-2xl">Acceso Completo</CardTitle>
                    <CardDescription>Todo lo que recibes hoy:</CardDescription>
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
                        <p className="text-muted-foreground">Precio Normal: <span className="line-through">49.990 CLP</span></p>
                        <p className="text-sm">Solo por hoy, paga solo:</p>
                        <p className="text-5xl font-bold text-primary font-headline mt-2">
                            9.990 <span className="text-3xl">CLP</span>
                        </p>
                    </div>

                    <Button size="lg" className="w-full h-14 text-lg font-bold transform hover:scale-105 transition-transform duration-300">
                        ¡Quiero Mi Guía y Bonos Gratis!
                    </Button>
                    <p className="text-xs text-muted-foreground">Compra segura. Acceso inmediato.</p>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
