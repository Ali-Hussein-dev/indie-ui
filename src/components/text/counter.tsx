'use client';

import {
  KeyframeOptions,
  animate,
  useInView,
  useIsomorphicLayoutEffect,
} from 'framer-motion';
import * as React from 'react';

type AnimatedCounterProps = {
  from: number;
  to: number;
  animationOptions?: KeyframeOptions & { duration?: number };
  className?: string;
};

export const Counter = ({
  from = 0,
  to,
  animationOptions,
  className = 'text-xl font-extrabold sm:text-2xl md:text-3xl',
}: AnimatedCounterProps) => {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;
    if (!inView) return;

    // Set initial value
    element.textContent = String(from);

    // If reduced motion is enabled in system's preferences
    if (window.matchMedia('(prefers-reduced-motion)').matches) {
      element.textContent = String(to);
      return;
    }

    const controls = animate(from, to, {
      duration: 10,
      ease: 'easeOut',
      ...animationOptions,
      onUpdate(value) {
        element.textContent = value.toFixed(0);
      },
    });

    // Cancel on unmount
    return () => {
      controls.stop();
    };
  }, [ref, inView, from, to]);

  return <span ref={ref} className={className} />;
};
