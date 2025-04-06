'use client';

import { motion } from "framer-motion";

const Partners = () => {
  // Lista de letras para representar parceiros
  const partnerLetters = [
    { letter: "A", color: "bg-blue-500" },
    { letter: "B", color: "bg-indigo-500" },
    { letter: "C", color: "bg-purple-500" },
    { letter: "D", color: "bg-violet-500" },
    { letter: "E", color: "bg-blue-600" },
    { letter: "F", color: "bg-indigo-600" },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Nossos <span className="text-gradient">Parceiros</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trabalhamos com empresas de diferentes segmentos, sempre buscando as melhores soluções para cada projeto.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
          {partnerLetters.map((partner, index) => (
            <motion.div
              key={index}
              className="glow-effect"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className={`${partner.color} rounded-xl h-24 sm:h-28 md:h-32 flex items-center justify-center border border-[rgba(255,255,255,0.1)]`}>
                <motion.span 
                  className="text-3xl sm:text-4xl font-bold text-white"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 + index * 0.5, ease: "easeInOut" }}
                >
                  {partner.letter}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Seja qual for o seu segmento, podemos criar uma presença digital que destaca sua marca e conecta você com seu público-alvo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;