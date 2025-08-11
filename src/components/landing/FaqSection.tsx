import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: '¿Cómo recibo el eBook?',
    answer: 'El acceso al eBook y a todos los bonos es 100% digital. Recibirás un correo electrónico con un enlace para descargar todo el material inmediatamente después de la confirmación del pago.',
  },
  {
    question: '¿Necesito tener experiencia para empezar?',
    answer: '¡Absolutamente no! Nuestra guía está diseñada tanto para principiantes como para aquellos que ya tienen alguna experiencia. Te llevamos de la mano desde lo más básico hasta las técnicas más avanzadas.',
  },
  {
    question: '¿Cuánto tiempo lleva hacer el morango do amor?',
    answer: 'El tiempo de preparación puede variar, pero en promedio, puedes tener una tanda lista en menos de 1 hora. La guía incluye consejos para optimizar tu tiempo de producción.',
  },
  {
    question: '¿Necesito equipos caros?',
    answer: 'No, para nada. Puedes comenzar con utensilios básicos de cocina que probablemente ya tienes en casa. La guía incluye una lista de todo lo que necesitas, con opciones económicas.',
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
            Preguntas Frecuentes
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            ¿Aún tienes dudas? Aquí respondemos las preguntas más comunes.
            </p>
        </div>
        <div className="mx-auto max-w-3xl pt-10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold font-headline text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
