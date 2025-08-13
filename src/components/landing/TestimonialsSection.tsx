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
    name: 'Júlia Martins',
    location: 'São Paulo, Brasil',
    image: {
      src: 'https://placehold.co/100x100.png',
      hint: 'happy woman',
    },
    comment: 'O guia é incrível! Comecei a vender no meu condomínio e já recuperei o investimento na primeira semana. As receitas são um sucesso!',
  },
  {
    name: 'Marcos Oliveira',
    location: 'Rio de Janeiro, Brasil',
    image: {
      src: 'https://placehold.co/100x100.png',
      hint: 'smiling man',
    },
    comment: 'Eu não tinha ideia de como começar. O checklist e as estratégias para vender na rua foram exatamente o que eu precisava. Recomendado!',
  },
  {
    name: 'Carla Souza',
    location: 'Belo Horizonte, Brasil',
    image: {
      src: 'https://placehold.co/100x100.png',
      hint: 'happy person',
    },
    comment: 'Pensei que seria difícil, mas o passo a passo é muito claro. Meus morangos agora parecem profissionais e vendem super rápido.',
  },
  {
    name: 'Bruno Lima',
    location: 'Salvador, Brasil',
    image: {
      src: 'https://placehold.co/100x100.png',
      hint: 'smiling person',
    },
    comment: 'O melhor bônus é o das embalagens. Meus clientes sempre comentam como minhas apresentações são lindas. Obrigado!',
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center" data-aos="fade-up">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
                Prova Social
            </div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">
            O que dizem nossos empreendedores
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Pessoas como você já estão tendo sucesso com nosso método.
            </p>
        </div>
        <div className="py-12" data-aos="fade-up" data-aos-delay="200">
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
