import { cn } from '@/lib/utils';
import {
  Button,
  type ButtonProps as BaseButtonProps,
} from '@/components/ui/button';

type ButtonProps = {
  children: React.ReactNode;
} & BaseButtonProps;

//======================================Neubrutalism
export const Button_v1 = ({ children, ...rest }: ButtonProps) => {
  return (
    <Button
      {...rest}
      className={cn(
        'border-[0.5px] duration-200 rounded-sm bg-transparent',
        // light mode
        'shadow-[4px_4px_0px_0px_rgba(0,0,0)] active:shadow-none border-zinc-800 hover:bg-zinc-50 text-zinc-800',
        // dark mode
        'dark:border-zinc-600 dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.7)] active:dark:shadow-none dark:text-zinc-50 dark:bg-zinc-950',
        rest.className,
      )}
    >
      {children}
    </Button>
  );
};
