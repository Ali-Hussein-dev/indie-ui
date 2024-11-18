import { cn } from '@/lib/utils';
import {
  Button,
  type ButtonProps as BaseButtonProps,
} from '@/components/ui/button';

type ButtonProps = {
  children: React.ReactNode;
} & BaseButtonProps;

//======================================
export const Button_v8 = ({ children, ...rest }: ButtonProps) => {
  return (
    <Button
      {...rest}
      className={cn(
        'shadow-embossed hover:shadow-none ease-out hover:scale-100 dark:bg-[#121212] dark:text-[#999999] bg-zinc-50 text-zinc-900',
        rest.className,
      )}
    >
      {children}
    </Button>
  );
};
