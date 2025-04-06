'use client';

import { useState } from "react";
import { portfolioData } from "../lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const categories = Array.from(
    new Set(portfolioData.map((item) => item.category))
  );

  const filteredProjects = activeCategory
    ? portfolioData.filter((project) => project.category === activeCategory)
    : portfolioData;

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Nosso <span className="text-gradient">Portfólio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes.
            Cada trabalho é único e personalizado para atender às necessidades específicas.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === null
                ? "bg-primary text-white"
                : "bg-muted text-muted-foreground hover:bg-muted/70"
            }`}
            onClick={() => setActiveCategory(null)}
          >
            Todos
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-muted text-muted-foreground hover:bg-muted/70"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-background rounded-xl overflow-hidden border border-border group glow-effect"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <Link
                      href={project.link}
                      className="bg-primary/90 hover:bg-primary text-white px-3 py-2 rounded-full text-sm flex items-center justify-center w-max transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="mr-1">Ver projeto</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-0.5 bg-primary/10 text-primary rounded-full text-xs">
                    {project.category}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {project.year}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {project.description}
                </p>
                <div className="flex items-center text-sm text-accent">
                  Cliente: {project.client}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;