import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: '¿Cómo recibo la Guía de Recetas?',
    answer: 'El acceso a la Guía de Recetas y a todos los bonos es 100% digital. Después de confirmar el pago, recibirás un correo electrónico con un enlace para acceder al área de miembros de Hotmart, donde todo el contenido estará disponible para que accedas y descargues.',
  },
  {
    question: '¿Necesito tener experiencia para empezar?',
    answer: '¡Absolutamente no! Nuestra guía fue diseñada tanto para principiantes como para aquellos que ya tienen alguna experiencia. Te guiamos paso a paso, desde lo básico hasta las técnicas más avanzadas.',
  },
  {
    question: '¿Cuánto tiempo se tarda en hacer la fresa de amor?',
    answer: 'El tiempo de preparación puede variar, pero en promedio, puedes tener un lote listo en menos de 1 hora. La guía incluye consejos para optimizar tu tiempo de producción.',
  },
  {
    question: '¿Necesito equipos caros?',
    answer: 'No, en absoluto. Puedes empezar con utensilios de cocina básicos que probablemente ya tienes en casa. La guía incluye una lista de todo lo que necesitas, con opciones económicas.',
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="w-full py-12 md:py-16 lg:py-20 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
            Preguntas Frecuentes
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            ¿Aún tienes dudas? Aquí respondemos a las preguntas más comunes.
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
