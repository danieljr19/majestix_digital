import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Majestix Digital - Desenvolvimento de Sites e Portfólios Profissionais',
  description: 'Especialistas na criação de sites, portfólios e páginas de vendas de alta conversão. Desenvolvemos projetos digitais que se destacam no mercado.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} ${inter.variable}`}>{children}</body>
    </html>
  );
}