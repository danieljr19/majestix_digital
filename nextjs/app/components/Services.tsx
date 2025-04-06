'use client';

import { serviceData } from "../lib/data";
import { motion } from "framer-motion";
import { 
  Globe, 
  Briefcase, 
  TrendingUp, 
  ShoppingCart, 
  Palette, 
  Search 
} from "lucide-react";

const iconComponents = {
  Globe,
  Briefcase,
  TrendingUp,
  ShoppingCart,
  Palette,
  Search,
};

const Services = () => {
  return (
    <section id="servicos" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Soluções digitais completas para destacar seu negócio no mercado.
            Do design à implementação, cuidamos de cada detalhe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {serviceData.map((service, index) => {
            const IconComponent = iconComponents[service.icon as keyof typeof iconComponents];
            
            return (
              <motion.div
                key={service.id}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  {IconComponent && <IconComponent className="h-6 w-6 text-primary" />}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;