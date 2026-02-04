import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  alignment?: "left" | "center";
  light?: boolean;
}

export function SectionHeader({ title, subtitle, alignment = "center", light = false }: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${alignment === "center" ? "text-center" : "text-left"}`}>
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`inline-block text-sm font-bold tracking-widest uppercase mb-3 ${light ? "text-secondary" : "text-secondary"}`}
      >
        {subtitle}
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`text-3xl md:text-4xl font-serif font-bold ${light ? "text-white" : "text-primary"}`}
      >
        {title}
      </motion.h2>
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className={`h-1 w-20 bg-secondary mt-6 ${alignment === "center" ? "mx-auto" : ""}`}
      />
    </div>
  );
}
