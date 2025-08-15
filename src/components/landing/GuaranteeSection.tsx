import Image from 'next/image';

export function GuaranteeSection() {
  return (
    <section id="guarantee" className="w-full py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <Image
              src="https://i.imgur.com/LDf1OCI.png"
              alt="Sello de Garantía de 7 días"
              width={600}
              height={600}
              className="rounded-full"
              data-ai-hint="guarantee seal badge"
            />
          </div>
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">
              ¡Tu compra es 100% segura!
            </h2>
            <p className="text-2xl font-semibold text-primary">
              Garantía Incondicional de 7 Días
            </p>
            <p className="text-muted-foreground md:text-lg">
              Tienes 7 días completos para explorar la guía. Si por cualquier motivo sientes que no es para ti, solo envíanos un correo y te devolveremos el 100% de tu dinero. Sin preguntas, sin complicaciones. ¡Riesgo cero!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
