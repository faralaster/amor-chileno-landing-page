import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Como recebo o Guia da Receita?',
    answer: 'O acesso ao Guia da Receita e a todos os bônus é 100% digital. Você receberá um e-mail com um link para baixar todo o material imediatamente após a confirmação do pagamento.',
  },
  {
    question: 'Preciso ter experiência para começar?',
    answer: 'Absolutamente não! Nosso guia foi projetado tanto para iniciantes quanto para aqueles que já têm alguma experiência. Nós o guiamos passo a passo, do básico às técnicas mais avançadas.',
  },
  {
    question: 'Quanto tempo leva para fazer o morango do amor?',
    answer: 'O tempo de preparo pode variar, mas, em média, você pode ter uma remessa pronta em menos de 1 hora. O guia inclui dicas para otimizar seu tempo de produção.',
  },
  {
    question: 'Preciso de equipamentos caros?',
    answer: 'Não, de forma alguma. Você pode começar com utensílios de cozinha básicos que provavelmente já tem em casa. O guia inclui uma lista de tudo que você precisa, com opções econômicas.',
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="w-full py-12 md:py-16 lg:py-20 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
            Perguntas Frequentes
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            Ainda tem dúvidas? Aqui respondemos às perguntas mais comuns.
            </p>
        </div>
        <div className="mx-auto max-w-3xl pt-10" data-aos="fade-up" data-aos-delay="200">
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
