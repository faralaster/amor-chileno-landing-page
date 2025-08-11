import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    name: 'Javiera Rojas',
    location: 'Santiago, Chile',
    image: {
      src: 'https://placehold.co/100x100.png',
      hint: 'happy woman',
    },
    comment: '¡La guía es increíble! Empecé a vender en mi condominio y ya recuperé la inversión en la primera semana. ¡Las recetas son un éxito!',
  },
  {
    name: 'Matías González',
    location: 'Viña del Mar, Chile',
    image: {
      src: 'https://placehold.co/100x100.png',
      hint: 'smiling man',
    },
    comment: 'No tenía idea de cómo empezar. El checklist y las estrategias para vender en la calle fueron justo lo que necesitaba. ¡Recomendado!',
  },
  {
    name: 'Camila Soto',
    location: 'Concepción, Chile',
    image: {
      src: 'https://placehold.co/100x100.png',
      hint: 'happy person',
    },
    comment: 'Pensé que sería difícil, pero el paso a paso es muy claro. Mis morangos ahora se ven profesionales y se venden súper rápido.',
  },
  {
    name: 'Benjamín Silva',
    location: 'Antofagasta, Chile',
    image: {
      src: 'https://placehold.co/100x100.png',
      hint: 'smiling person',
    },
    comment: 'El mejor bonus es el de las embalagens. Mis clientes siempre comentan lo lindas que son mis presentaciones. ¡Gracias!',
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
                Prueba Social
            </div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">
            Lo que dicen nuestros emprendedores
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Personas como tú ya están teniendo éxito con nuestro método.
            </p>
        </div>
        <div className="py-12">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col justify-between">
                      <CardContent className="flex flex-col items-start gap-4 p-6">
                        <p className="text-lg font-medium leading-relaxed text-muted-foreground">"{testimonial.comment}"</p>
                        <div className="flex items-center gap-4 pt-4">
                          <Avatar>
                            <AvatarImage src={testimonial.image.src} alt={testimonial.name} data-ai-hint={testimonial.image.hint} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
