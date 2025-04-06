'use client';

import Logo from "./Logo";
import Link from "next/link";
import { ChevronUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 border-b border-border pb-8">
          <Logo size="lg" />
          <button
            onClick={scrollToTop}
            className="mt-6 md:mt-0 flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="mr-2">Voltar ao topo</span>
            <ChevronUp className="h-4 w-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-lg mb-4">Majestix Digital</h4>
            <p className="text-muted-foreground mb-4">
              Transformando ideias em experiências digitais impactantes desde 2020.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#inicio" className="text-muted-foreground hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="text-muted-foreground hover:text-primary transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#contato" className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Criação de Sites
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Portfólios Profissionais
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Páginas de Vendas
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  E-commerce
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Identidade Visual
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                São Paulo, SP - Brasil
              </li>
              <li>
                <a href="mailto:contato@majestixdigital.com" className="text-muted-foreground hover:text-primary transition-colors">
                  contato@majestixdigital.com
                </a>
              </li>
              <li>
                <a href="tel:+5511970241496" className="text-muted-foreground hover:text-primary transition-colors">
                  +55 (11) 97024-1496
                </a>
              </li>
            </ul>
            
            <div className="flex space-x-4 mt-4">
              <a 
                href="#" 
                className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-white hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a 
                href="#" 
                className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-white hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a 
                href="#" 
                className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-white hover:bg-primary transition-colors"
                aria-label="WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 4h.5a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3v-.5"></path><path d="M4 15V4h11"></path><path d="m10 10-4-4"></path><path d="M15 5 5 15"></path></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center text-sm text-muted-foreground border-t border-border pt-8">
          <p>© {year} Majestix Digital. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;