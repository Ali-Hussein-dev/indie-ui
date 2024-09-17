import { IoSend } from 'react-icons/io5';
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
        rest.className
      )}
    >
      {children}
    </Button>
  );
};

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

//======================================
export const Button_v3 = ({ children, ...rest }: ButtonProps) => {
  return (
    <Button
      {...rest}
      className={cn(
        'relative overflow-hidden group hover:ring-2 hover:ring-offset-2 ease-out hover:bg-gradient-to-r',
        // light mode
        'bg-zinc-900 hover:from-zinc-800 hover:to-zinc-700 text-zinc-50 hover:ring-zinc-900',
        // dark mode
        'dark:bg-zinc-50 dark:hover:from-zinc-50 dark:hover:to-zinc-100 dark:text-zinc-800 dark:hover:ring-white dark:ring-offset-black',
        rest.className
      )}
    >
      <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white dark:bg-zinc-900 opacity-10 rotate-12 group-hover:-translate-x-60 ease"></span>
      <span className="relative">{children}</span>
    </Button>
  );
};

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
        rest.className
      )}
    >
      <span className="absolute size-0 rounded-lg bg-white dark:bg-black opacity-10 transition-all duration-300 ease-out group-hover:size-full"></span>
      <span className="relative">{children}</span>
    </Button>
  );
};

//======================================
export const Button_v5 = ({
  children,
  Icon = <IoSend size="20" />,
  ...rest
}: ButtonProps & { Icon: React.ReactNode }) => {
  return (
    <Button
      {...rest}
      className={cn(
        'relative overflow-hidden border shadow group',
        // light mode
        'border-zinc-300 text-zinc-800 bg-zinc-50',
        // dark mode
        'dark:border-zinc-700 dark:text-zinc-100 dark:bg-zinc-950',
        rest.className
      )}
    >
      <span className="absolute inset-0 rounded-sm flex items-center justify-center size-full duration-[600ms] ease-[cubic-bezier(0.50,0.20,0,1)]  -translate-x-full group-hover:translate-x-0 bg-zinc-800 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-800">
        {Icon}
      </span>
      <span className="absolute flex items-center justify-center w-full h-full transition-all duration-500 ease transform group-hover:translate-x-full ">
        {children}
      </span>
      <span className="relative invisible">{children}</span>
    </Button>
  );
};

//======================================
export const Button_v6 = ({ children, ...rest }: ButtonProps) => {
  return (
    <div className="rounded-sm border dark:border-zinc-200 border-zinc-600 group">
      <Button
        {...rest}
        className={cn(
          'scale-y-[.88] scale-x-[0.97] group-hover:scale-100 group-hover:m-0 duration-300 font-semibold rounded-sm transition dark:bg-zinc-50 bg-zinc-950 text-zinc-100 dark:text-zinc-800 w-full',
          rest.className
        )}
      >
        {children}
      </Button>
    </div>
  );
};

//======================================
export const Button_v7 = ({ children, ...rest }: ButtonProps) => {
  return (
    <Button
      variant="link"
      {...rest}
      className={cn(
        'hover:no-underline',
        "relative ease-in after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:translate-y-[3px] after:rounded-full after:dark:bg-zinc-50 after:bg-zinc-800 after:opacity-0 after:duration-300 after:content-[''] hover:after:-translate-y-1 hover:after:opacity-100 px-[1px] pb-0",
        rest.className
      )}
    >
      {children}
    </Button>
  );
};

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
