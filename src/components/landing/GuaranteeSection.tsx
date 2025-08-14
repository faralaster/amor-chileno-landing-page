import Image from 'next/image';

export function GuaranteeSection() {
  return (
    <section id="guarantee" className="w-full py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center" data-aos="fade-right">
            <Image
              src="https://i.imgur.com/LDf1OCI.png"
              alt="Selo de Garantia de 7 dias"
              width={400}
              height={400}
              className="rounded-full"
              data-ai-hint="guarantee seal badge"
            />
          </div>
          <div className="space-y-4 text-center md:text-left" data-aos="fade-left">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">
              Sua compra é 100% segura!
            </h2>
            <p className="text-2xl font-semibold text-primary">
              Garantia Incondicional de 7 Dias
            </p>
            <p className="text-muted-foreground md:text-lg">
              Você tem 7 dias completos para explorar o guia. Se por qualquer motivo sentir que não é para você, basta nos enviar um e-mail e devolveremos 100% do seu dinheiro. Sem perguntas, sem complicações. Risco zero!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
