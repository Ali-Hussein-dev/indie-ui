'use client';
import * as React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCircleCheck, FaCircleXmark } from 'react-icons/fa6';
import { cn } from '@/lib/utils';
import { ImSpinner2 } from 'react-icons/im';
import { LuSendHorizonal } from 'react-icons/lu';

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
export function StatefulButton_2({ ...rest }: ButtonProps) {
  const { status, onSubmit } = useStatus({ resloveTo: 'success' });
  const variants = {
    initial: { opacity: 0, y: 15 },
    show: { opacity: 100, y: 0, transition: { delay: 0.1, duration: 0.4 } },
    hidden: { opacity: 0, y: -15, transition: { duration: 0.3 } },
  };
  return (
    <Button
      disabled={status == 'loading'}
      onClick={onSubmit}
      {...rest}
      variant={status === 'error' ? 'destructive' : rest.variant}
      className={cn('w-40 rounded-lg overflow-hidden gap-2', rest.className)}
    >
      <span key="label">
        {status == 'idle'
          ? 'Click me'
          : status == 'loading'
            ? 'Pending...'
            : 'Completed'}
      </span>
      <AnimatePresence mode="wait">
        {status === 'idle' ? (
          <motion.span
            key={status}
            variants={variants}
            initial={'initial'}
            animate={'show'}
            exit={'hidden'}
          >
            <LuSendHorizonal className="size-4" />
          </motion.span>
        ) : status === 'loading' ? (
          <motion.span
            key={status}
            variants={variants}
            initial={'initial'}
            animate={'show'}
            exit={'hidden'}
          >
            <ImSpinner2 className="animate-spin size-4" />
          </motion.span>
        ) : (
          <motion.span
            key={status}
            variants={variants}
            initial={'initial'}
            animate={'show'}
            exit={'hidden'}
          >
            {status === 'success' && <FaCircleCheck className="size-4" />}
            {status === 'error' && <FaCircleXmark className="size-4" />}
          </motion.span>
        )}
      </AnimatePresence>
    </Button>
  );
}
