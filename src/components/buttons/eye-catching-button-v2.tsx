import { cn } from '@/lib/utils';
import { Button, type ButtonProps } from '@/components/ui/button';

//======================================Shiny Background
export const EyeCatchingButton_v2 = ({ ...props }: ButtonProps) => {
  return (
    <Button
      {...props}
      className={cn(
        'animate-bg-shine border-[1px] rounded-lg shadow bg-[length:200%_100%] tracking-wide duration-[2200ms]',
        'dark:bg-[linear-gradient(110deg,#09090B,45%,#27272A,55%,#09090B)] dark:text-zinc-200 dark:border-zinc-800',
        'bg-[linear-gradient(110deg,#FFF,45%,#E4E4E7,55%,#FFF)] text-zinc-800 border-zinc-300',
        props.className,
      )}
    />
  );
};

/**
 *  tailwind.config.js
 * 
 * {
  // ...rest of the config
  theme:{
    extends:{
      "animation": {
        "bg-shine": "bg-shine 2.1s linear infinite"
      },
      "keyframes": {
        "bg-shine": {
          "from": {
            "backgroundPosition": "0 0"
          },
          "to": {
            "backgroundPosition": "-200% 0"
          }
        }
      }
    }
  }
}
 */
