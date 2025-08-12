import { Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold font-headline text-white">Amor Chileno</h3>
            <p className="text-sm text-slate-400">Transformando morangos em sorrisos e lucros.</p>
        </div>
        <div className="flex flex-col items-center md:items-start space-y-2 mb-4 md:mb-0">
            <h4 className="font-semibold text-white">Contato</h4>
            <a href="mailto:contato@amorchileno.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-4 w-4" />
                <span>contato@amorchileno.com</span>
            </a>
            <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-4 w-4" />
                <span>WhatsApp de Suporte</span>
            </a>
        </div>
        <div className="text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Amor Chileno. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
