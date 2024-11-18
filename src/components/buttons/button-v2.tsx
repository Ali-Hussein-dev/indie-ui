import { cn } from '@/lib/utils';
import {
  Button,
  type ButtonProps as BaseButtonProps,
} from '@/components/ui/button';

type ButtonProps = {
  children: React.ReactNode;
} & BaseButtonProps;

//======================================Shine
export const Button_v2 = ({ children, ...rest }: ButtonProps) => {
  return (
    <Button
      {...rest}
      className={cn(
        'group relative overflow-hidden ease-in-out hover:scale-105 hover:shadow-lg',
        // light mode
        'text-zinc-50 bg-gradient-to-tr from-zinc-900 to-zinc-700 hover:shadow-zinc-500/30',
        // dark mode
        'dark:text-zinc-900 dark:bg-gradient-to-tr dark:from-zinc-50 dark:to-zinc-100 dark:hover:shadow-zinc-700/30',
        rest.className
      )}
    >
      <span>{children}</span>
      <span className="absolute inset-0 flex size-full justify-center [transform:skew(-14deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-14deg)_translateX(100%)]">
        <span className="relative h-full w-8 bg-white/20 dark:bg-black/10" />
      </span>
    </Button>
  );
};