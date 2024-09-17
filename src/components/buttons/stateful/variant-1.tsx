'use client';
import * as React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCircleCheck, FaCircleXmark } from 'react-icons/fa6';
import { cn } from '@/lib/utils';
import { ImSpinner2 } from 'react-icons/im';
import { LuSend } from 'react-icons/lu';

// mock async code
const useStatus = ({ resloveTo }: { resloveTo: 'success' | 'error' }) => {
  const [status, setStatus] = React.useState('idle');
  // mock async request
  const onSubmit = () => {
    setStatus('loading');
    setTimeout(() => {
      setStatus(resloveTo);
    }, 3500);
  };

  return {
    onSubmit,
    status,
  };
};

//======================================
export function StatefulButton_1({ ...rest }: ButtonProps) {
  const { status, onSubmit } = useStatus({ resloveTo: 'success' });
  return (
    <Button
      disabled={status == 'loading'}
      onClick={onSubmit}
      {...rest}
      variant={status === 'error' ? 'destructive' : rest.variant}
      className={cn('w-36 rounded-lg overflow-hidden', rest.className)}
    >
      <AnimatePresence mode="wait">
        {/* //------------------------------IDLE */}
        {status === 'idle' && (
          <motion.span
            key={status}
            exit={{
              opacity: 0,
              y: -15,
              transition: { duration: 0.3, type: 'spring' },
            }}
          >
            Click me
          </motion.span>
        )}
        {/* //------------------------------LOADING */}
        {status === 'loading' && (
          <motion.span
            key={status}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 100, y: 0, transition: { delay: 0 } }}
            exit={{ opacity: 0, y: -15, transition: { duration: 0.3 } }}
          >
            <ImSpinner2 className="animate-spin" size="19" />
          </motion.span>
        )}

        {/* //------------------------------RESOLVED */}
        {['success', 'error'].includes(status) && (
          <motion.span
            key={status}
            initial={{ opacity: 0, y: 15, scale: 0 }}
            animate={{
              opacity: 100,
              y: 0,
              scale: 1,
              transition: { delay: 0.1, duration: 0.4 },
            }}
            exit={{ opacity: 0, y: -15, transition: { duration: 0.3 } }}
          >
            {status === 'success' && <FaCircleCheck size="20" />}
            {status === 'error' && <FaCircleXmark size="20" />}
          </motion.span>
        )}
      </AnimatePresence>
    </Button>
  );
}
