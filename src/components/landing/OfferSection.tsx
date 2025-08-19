import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle } from 'lucide-react';

const completePackageIncludes = [
  'Video Clase de la Receta Fresa de Amor Chilena',
  'Guía Lucrativa de la Fresa de Amor Chilena',
  'BONO 1 – Checklist de la Primera Venta',
  'BONO 2 – Sugerencia de Empaque Bonito y Barato',
  'BONO 3 – Estrategia para Vender en la Calle',
  'BONO 4 – Checklist de Errores Comunes y Cómo Evitarlos',
  'BONO 5 – Ideas de Promociones',
  'BONO 6 – Guía Rápida de Conservación y Transporte',
  'Garantía de 30 días',
  'Acceso vitalicio',
];

const simplePackageIncludes = [
    "Guía Lucrativa de la Fresa de Amor Chilena",
    "BONO 1 – Checklist de la Primera Venta",
    "Garantía de 30 días",
    "Acceso por 6 meses",
]


export function OfferSection() {
  return (
    <section id="offer" className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-br from-secondary to-accent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-3 text-center mb-12">
            <h2 className="text-4xl font-bold font-headline tracking-tighter text-white sm:text-5xl md:text-6xl">
            ¡Oferta especial por tiempo limitado!
            </h2>
            <p className="mx-auto max-w-[600px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            No pierdas la oportunidad de iniciar tu propio negocio de éxito.
            </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
          {/* Pacote Completo */}
          <Card className="shadow-2xl border-4 border-pink-500 relative overflow-visible rounded-3xl">
            <div className="absolute -top-4 right-6 bg-pink-500 text-white px-4 py-1 rounded-md text-sm font-bold">
              MÁS POPULAR
            </div>
            <CardHeader className="text-center pt-8">
              <CardTitle className="font-headline text-3xl">Paquete Completo: Súper OFERTA</CardTitle>
              <p className="text-destructive line-through text-xl">De $ 37000</p>
              <p className="text-5xl font-bold text-primary font-headline">$ 6500</p>
              <CardDescription>Experiencia completa</CardDescription>
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
              <div className="w-full h-12 flex items-center justify-center rounded-md text-lg font-bold bg-red-600 text-white">
                ¡ÚLTIMOS CUPOS CON DESCUENTO!
              </div>
              <div className="space-y-2 text-center">
                <p className="text-sm font-medium">Cupos Llenos: <span className="float-right">95%</span></p>
                <Progress value={95} className="h-4 bg-green-200" />
                <p className="text-sm text-muted-foreground">11 cupos restantes</p>
              </div>
              <Button size="lg" className="w-full h-14 text-xl font-bold bg-green-500 text-white hover:bg-green-600 shadow-lg transform hover:scale-105 transition-transform duration-300 border-b-4 border-green-700 active:translate-y-1 active:border-b-0 rounded-full">
                ¡Sí! ¡Quiero esta SÚPER OFERTA!
              </Button>
            </CardContent>
          </Card>

          {/* Pacote Simples */}
          <Card className="shadow-lg bg-white/90">
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-3xl">Paquete Simple</CardTitle>
               <p className="text-5xl font-bold text-primary font-headline">$ 4500</p>
              <CardDescription>Para empezar</CardDescription>
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
              <a href="https://pay.hotmart.com/L101291353O?off=ug4olks2">
                <Button size="lg" className="w-full h-12 text-lg font-bold rounded-md bg-green-700 hover:bg-green-800 text-white">
                  ¡Quiero esta Opción!
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
