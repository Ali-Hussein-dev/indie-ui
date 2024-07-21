'use client';
import * as React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Button } from '@/components/buttons/button';
import { motion } from 'framer-motion';
//======================================
export const Banner = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is more than 25px
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={
        isVisible
          ? {
              opacity: 1,
              y: 0,
            }
          : {}
      }
    >
      <div className="fixed left-0 right-0 top-0 z-10">
        <div className="flex-row-center w-full gap-x-6 bg-zinc-800/40 backdrop-blur-lg px-6 py-2.5 sm:px-3.5">
          <div className="flex items-center justify-center text-sm font-medium leading-6 tracking-wider text-green-300 gap-4">
            <p>Check pro templates</p>
            <Button asChild variant="outline" size="sm" className="rounded-xl">
              <div className="flex-row-start gap-2">
                <a href={'https://indie-starter.dev'} className="inline-block">
                  <FaArrowRight />
                </a>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
