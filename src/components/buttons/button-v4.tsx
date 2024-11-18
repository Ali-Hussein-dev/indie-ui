import { cn } from '@/lib/utils';
import {
  Button,
  type ButtonProps as BaseButtonProps,
} from '@/components/ui/button';

type ButtonProps = {
  children: React.ReactNode;
} & BaseButtonProps;

//======================================
export const Button_v4 = ({ children, ...rest }: ButtonProps) => {
  return (
    <Button
      {...rest}
      className={cn(
        'group relative overflow-hidden rounded-lg bg-gradient-to-tr duration-300 ease-in-out active:translate-y-0.5 active:scale-100',
        // light mode
        'active:shadow-none from-zinc-800 to-zinc-700 text-white shadow-[0px_3px_0px_rgba(82,82,91,0.9)]',
        // dark mode
        'dark:active:shadow-none dark:from-zinc-50 dark:to-zinc-100 dark:text-zinc-800 dark:shadow-[0px_3px_0px_rgba(161,161,170,0.9)]',
        rest.className,
      )}
    >
      <span className="absolute size-0 rounded-lg bg-white dark:bg-black opacity-10 transition-all duration-300 ease-out group-hover:size-full"></span>
      <span className="relative">{children}</span>
    </Button>
  );
};
