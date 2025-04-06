'use client';

import { useRef } from "react";
import { testimonialData } from "../lib/data";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="sobre" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            O que nossos <span className="text-gradient">clientes</span> dizem
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A satisfação dos nossos clientes é a nossa maior recompensa.
            Veja o que eles têm a dizer sobre nossos serviços.
          </p>
        </div>

        <div className="relative">
          <div 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
          >
            <button
              onClick={() => scroll("left")}
              className="bg-card hover:bg-muted border border-border rounded-full p-2 text-muted-foreground hover:text-white transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          </div>

          <div 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
          >
            <button
              onClick={() => scroll("right")}
              className="bg-card hover:bg-muted border border-border rounded-full p-2 text-muted-foreground hover:text-white transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div 
            ref={scrollRef}
            className="flex overflow-x-auto space-x-6 md:space-x-8 py-4 px-10 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonialData.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-card flex-shrink-0 w-full md:w-[450px] border border-border rounded-xl p-6 md:p-8 snap-center"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.author}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                  <Quote className="text-primary h-8 w-8 opacity-30" />
                </div>
                <p className="text-muted-foreground">{testimonial.quote}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;