'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Nome deve ter pelo menos 2 caracteres' })
    .max(50, { message: 'Nome deve ter no máximo 50 caracteres' }),
  email: z
    .string()
    .email({ message: 'Email inválido' }),
  phone: z
    .string()
    .min(8, { message: 'Telefone deve ter pelo menos 8 dígitos' })
    .max(15, { message: 'Telefone deve ter no máximo 15 dígitos' })
    .optional(),
  message: z
    .string()
    .min(10, { message: 'Mensagem deve ter pelo menos 10 caracteres' })
    .max(500, { message: 'Mensagem deve ter no máximo 500 caracteres' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });
  
  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    
    // Simular envio (em produção, substituir por chamada API real)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    
    // Resetar mensagem de sucesso após 5 segundos
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  }
  
  return (
    <section id="contato" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Entre em <span className="text-gradient">Contato</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para transformar suas ideias em realidade.
            Entre em contato e vamos começar a trabalhar juntos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-background rounded-xl p-6 md:p-8 border border-border"
          >
            <h3 className="text-xl font-bold mb-6">Envie-nos uma mensagem</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Nome completo
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name')}
                  className={`w-full px-4 py-3 bg-muted text-white rounded-lg focus:ring-2 focus:ring-primary focus:outline-none ${
                    errors.name ? 'border border-red-500' : 'border border-border'
                  }`}
                  placeholder="Seu nome"
                />
                {errors.name && (
                  <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className={`w-full px-4 py-3 bg-muted text-white rounded-lg focus:ring-2 focus:ring-primary focus:outline-none ${
                    errors.email ? 'border border-red-500' : 'border border-border'
                  }`}
                  placeholder="Seu email"
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Telefone (opcional)
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register('phone')}
                  className={`w-full px-4 py-3 bg-muted text-white rounded-lg focus:ring-2 focus:ring-primary focus:outline-none ${
                    errors.phone ? 'border border-red-500' : 'border border-border'
                  }`}
                  placeholder="Seu telefone"
                />
                {errors.phone && (
                  <p className="mt-1 text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  {...register('message')}
                  rows={5}
                  className={`w-full px-4 py-3 bg-muted text-white rounded-lg focus:ring-2 focus:ring-primary focus:outline-none ${
                    errors.message ? 'border border-red-500' : 'border border-border'
                  }`}
                  placeholder="Descreva seu projeto ou necessidade"
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-primary hover:opacity-90 transition-opacity text-white font-medium rounded-lg py-3 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <div className="h-5 w-5 rounded-full border-2 border-white border-t-transparent animate-spin mr-2"></div>
                ) : (
                  <Send className="h-4 w-4 mr-2" />
                )}
                {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
              </button>
              
              {isSuccess && (
                <div className="text-center py-2 px-4 bg-green-500/20 text-green-400 rounded-lg mt-4">
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </div>
              )}
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-xl font-bold mb-6">Informações de contato</h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a href="mailto:contato@majestixdigital.com" className="text-muted-foreground hover:text-primary transition-colors">
                    contato@majestixdigital.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Telefone</h4>
                  <a href="tel:+5511970241496" className="text-muted-foreground hover:text-primary transition-colors">
                    +55 (11) 97024-1496
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Localização</h4>
                  <p className="text-muted-foreground">
                    São Paulo, SP - Brasil
                  </p>
                </div>
              </div>
              
              <div className="bg-background rounded-xl p-6 border border-border mt-8">
                <h4 className="font-medium mb-4">Horário de atendimento</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Segunda - Sexta:</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sábado:</span>
                    <span>10:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Domingo:</span>
                    <span>Fechado</span>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-6">
                <a 
                  href="#" 
                  className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-white hover:bg-primary transition-colors"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                </a>
                <a 
                  href="#" 
                  className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-white hover:bg-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a 
                  href="https://wa.me/5511970241496" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-white hover:bg-[#25D366] transition-colors"
                  aria-label="WhatsApp"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path><path d="M9 10a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0z"></path><path d="M14 10a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0z"></path></svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;