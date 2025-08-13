import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import 'aos/dist/aos.css';
import { AOSInit } from '@/components/AOSInit';

export const metadata: Metadata = {
  title: 'Amor Chileno',
  description: 'Guia Lucrativo para o Amor por Morango Chileno',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <AOSInit />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
