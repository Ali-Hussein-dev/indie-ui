import { cn } from '@/lib/utils';
import { Button, type ButtonProps } from '@/components/ui/button';

//======================================Animated Text Gradient
export const EyeCatchingButton_v5 = ({ ...props }: ButtonProps) => {
  return (
    <Button
      {...props}
      variant="outline"
      className={cn(
        'bg-gradient-to-l text-transparent dark:text-transparent bg-clip-text animate-text-gradient font-bold dark:bg-zinc-50 bg-[length:300%] text-lg rounded-xl tracking-wide duration-[4200ms]',
        'from-zinc-500 via-zinc-950 to-zinc-600',
        'dark:from-zinc-600 dark:via-zinc-100 dark:to-zinc-600',
        props.className,
      )}
    />
  );
};

/**
 *  tailwind.config.js
 * {
  // ...rest of the config
    theme:{
      extends:{
        "animation": {
          "text-gradient": "text-gradient 6s ease infinite alternate",
        },
        "keyframes": {
          "text-gradient": {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
          },
        }
      }
    }
  }
 */
