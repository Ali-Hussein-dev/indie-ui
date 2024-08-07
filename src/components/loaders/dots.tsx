'use client';
import { motion } from 'framer-motion';

//======================================
export const Dots_v1 = () => (
  <div className="w-fit">
    <div className="relative size-full flex items-center justify-start">
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.7, repeat: Infinity }}
        className="absolute top-0 size-3.5 rounded-full bg-current left-2"
      ></motion.span>
      <motion.span
        initial={{ x: 0 }}
        animate={{ x: 24 }}
        transition={{ duration: 0.7, repeat: Infinity }}
        className="absolute top-0 size-3.5 rounded-full bg-current left-2"
      ></motion.span>
      <motion.span
        initial={{ x: 0 }}
        animate={{ x: 24 }}
        transition={{ duration: 0.7, repeat: Infinity }}
        className="absolute top-0 size-3.5 rounded-full bg-current left-8"
      ></motion.span>
      <motion.span
        initial={{ scale: 1 }}
        animate={{ scale: 0 }}
        transition={{ duration: 0.7, repeat: Infinity }}
        className="absolute top-0 size-3.5 rounded-full bg-current left-14"
      ></motion.span>
    </div>
  </div>
);

export const Dots_v2 = () => (
  <div className="flex items-center justify-center ">
    <div className="flex space-x-2">
      <motion.div
        className="size-3.5 rounded-full bg-current"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 1.1,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />
      <motion.div
        className="size-3.5 rounded-full bg-current"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 1.1,
          ease: 'easeInOut',
          repeat: Infinity,
          delay: 0.3,
        }}
      />
      <motion.div
        className="size-3.5 rounded-full bg-current"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 1.1,
          ease: 'easeInOut',
          repeat: Infinity,
          delay: 0.6,
        }}
      />
    </div>
  </div>
);

export const Dots_v3 = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="size-3.5 animate-bounce rounded-full bg-current [animation-delay:-0.3s]"></div>
      <div className="size-3.5 animate-bounce rounded-full bg-current [animation-delay:-0.13s]"></div>
      <div className="size-3.5 animate-bounce rounded-full bg-current"></div>
    </div>
  );
};

//======================================
export const Dots_v4 = () => (
  <div className="flex items-center justify-center space-x-2">
    {[...Array(3)].map((_, index) => (
      <motion.span
        key={index}
        className="size-3.5 rounded-full bg-current"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: index * 0.2,
          duration: 1.2,
          repeat: Infinity,
        }}
      ></motion.span>
    ))}
  </div>
);

export const Dots_v5 = () => {
  const dots = 8;
  const radius = 24;

  return (
    <div className="relative size-20 border">
      {[...Array(dots)].map((_, i) => {
        const angle = (i / dots) * (2 * Math.PI);
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        return (
          <motion.div
            key={i}
            className="absolute size-2.5 rounded-full bg-current"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              delay: (i / dots) * 1.7,
              ease: 'easeInOut',
            }}
          />
        );
      })}
    </div>
  );
};
