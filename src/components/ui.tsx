import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import React from 'react';

export const FadeIn = ({ children, className, delay = 0, ...props }: { children: React.ReactNode; className?: string; delay?: number; [key: string]: any }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const Section = ({ children, className, ...props }: { children: React.ReactNode; className?: string; [key: string]: any }) => (
  <section className={cn("py-20 md:py-32", className)} {...props}>
    <div className="container mx-auto px-6 md:px-12 max-w-7xl">
      {children}
    </div>
  </section>
);

export const Button = ({
  children,
  to,
  variant = 'primary',
  className,
  icon = false,
}: {
  children: React.ReactNode;
  to: string;
  variant?: 'primary' | 'outline' | 'link';
  className?: string;
  icon?: boolean;
}) => {
  const baseClasses = "inline-flex items-center justify-center transition-all duration-300 font-medium tracking-wide";
  const variants = {
    primary: "bg-stone-900 text-stone-50 px-8 py-4 uppercase text-sm tracking-widest hover:bg-stone-800",
    outline: "border-2 border-stone-900 text-stone-900 px-8 py-4 uppercase text-sm tracking-widest hover:bg-stone-900 hover:text-stone-50",
    link: "text-stone-900 font-serif text-lg hover:text-stone-600 border-b border-stone-900/30 hover:border-stone-900 pb-1"
  };

  return (
    <Link to={to} className={cn(baseClasses, variants[variant], className)}>
      {children}
      {icon && <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />}
    </Link>
  );
};
