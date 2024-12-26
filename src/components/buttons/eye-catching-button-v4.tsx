import { cn } from '@/lib/utils';
import { Button, type ButtonProps } from '@/components/ui/button';

//======================================Animated Gradient border
export const EyeCatchingButton_v4 = ({ ...props }: ButtonProps) => {
  return (
    <div className="relative group rounded-xl inline-block p-[1.3px] overflow-hidden">
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#FAFAFA_0%,#52525B_50%,#E4E4E7_100%)] bg-[conic-gradient(from_90deg_at_50%_50%,#52525B_0%,#D4D4D8_50%,#52525B_100%)] group-hover:animate-none" />
      <Button
        {...props}
        className={cn(
          'backdrop-blur-2xl rounded-xl dark:text-zinc-400 dark:bg-zinc-950 bg-white text-zinc-800 font-medium text-lg group-hover:scale-100',
          props.className,
        )}
      />
    </div>
  );
};
