'use client';
import * as React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
//======================================
export const Banner = () => {
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
      initial={{ opacity: 0, y: -80 }}
      animate={
        isVisible
          ? {
              opacity: 1,
              y: 0,
            }
          : {}
      }
    >
      <div className="fixed left-0 right-0 top-0 z-30">
        <div className="flex-row-center w-full gap-x-6 dark:bg-zinc-800/40 backdrop-blur-lg px-6 py-2.5 sm:px-3.5 bg-zinc-50/40">
          <div className="flex items-center justify-center font-semibold leading-6 tracking-wide dark:text-green-300 text-green-600 text-lg gap-4">
            <span>Check Pro Templates</span>
            <Button asChild variant="outline" size="sm" className="rounded-xl">
              <div className="flex-row-start gap-2">
                <a
                  href={'https://indie-starter.dev/templates'}
                  className="inline-block"
                >
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
