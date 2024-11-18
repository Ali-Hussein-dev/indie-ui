import { cn } from '@/lib/utils';
import {
  Button,
  type ButtonProps as BaseButtonProps,
} from '@/components/ui/button';

type ButtonProps = {
  children: React.ReactNode;
} & BaseButtonProps;

//======================================
export const Button_v6 = ({ children, ...rest }: ButtonProps) => {
  return (
    <div className="rounded-sm border dark:border-zinc-200 border-zinc-600 group">
      <Button
        {...rest}
        className={cn(
          'scale-y-[.88] scale-x-[0.97] group-hover:scale-100 group-hover:m-0 duration-300 font-semibold rounded-sm transition dark:bg-zinc-50 bg-zinc-950 text-zinc-100 dark:text-zinc-800 w-full',
          rest.className,
        )}
      >
        {children}
      </Button>
    </div>
  );
};
