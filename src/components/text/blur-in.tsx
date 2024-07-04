'use client';
import { motion } from 'framer-motion';

export const BlurIn = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.h1
      initial={{ filter: 'blur(20px)', opacity: 0 }}
      animate={{ filter: 'blur(0px)', opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]"
    >
      {children}
    </motion.h1>
  );
};
