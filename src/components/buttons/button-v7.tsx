import { cn } from '@/lib/utils';
import {
  Button,
  type ButtonProps as BaseButtonProps,
} from '@/components/ui/button';

type ButtonProps = {
  children: React.ReactNode;
} & BaseButtonProps;

//======================================
export const Button_v7 = ({ children, ...rest }: ButtonProps) => {
  return (
    <Button
      variant="link"
      {...rest}
      className={cn(
        'hover:no-underline',
        "relative ease-in after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:translate-y-[3px] after:rounded-full after:dark:bg-zinc-50 after:bg-zinc-800 after:opacity-0 after:duration-300 after:content-[''] hover:after:-translate-y-1 hover:after:opacity-100 px-[1px] pb-0",
        rest.className,
      )}
    >
      {children}
    </Button>
  );
};
