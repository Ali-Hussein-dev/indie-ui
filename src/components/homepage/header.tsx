import { ThemeToggle } from '../toggle-theme';
import { Button } from '@/components/ui/button';
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { MobileHeader } from './mobile-header';
import { cn } from '@/lib/utils';
import { configs } from '@/configs';
import { FaDiscord, FaGithub, FaXTwitter } from 'react-icons/fa6';
import { LogoLink } from '@/components/logo';
import { Button_v7 } from '@/components/buttons/button-variants';

const headerVariants = cva('mx-auto', {
  variants: {
    variant: {
      default: 'max-w-container',
      centered:
        'max-w-5xl rounded-full mt-2 border dark:bg-zinc-950/50 backdrop-blur shadow-lg bg-zinc-50 dark:border-zinc-900',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export type LinksList = { label: string; href: string }[];
export type IconsList = { name: string; icon: React.ReactNode; href: string }[];

export interface HeaderProps extends VariantProps<typeof headerVariants> {
  links?: LinksList;
  sticky?: boolean;
  icons?: IconsList;
  Logo?: React.ReactNode;
}

const HeaderLink = (props: { href: string; name: string }) => {
  return (
    <Button_v7 asChild size="sm" variant="link" className="px-0">
      <a href={props.href}>{props.name}</a>
    </Button_v7>
  );
};
const iconsList = [
  {
    name: 'discord',
    href: configs.urls.discord,
    icon: <FaDiscord size="15" />,
  },
  { name: 'github', href: configs.urls.github, icon: <FaGithub size="15" /> },
  { name: 'x', href: configs.urls.x, icon: <FaXTwitter size="15" /> },
];
const linksList = [
  {
    href: configs.urls.indiestarter,
    label: 'Indie Starter',
  },
  { href: '/docs/changelog', label: 'Changelog' },
];

//======================================
export const Header = ({
  Logo = <LogoLink />,
  links = linksList,
  icons = iconsList,
  variant,
}: HeaderProps) => {
  return (
    <header
      className={cn(
        'w-full border-b dark:border-zinc-900 top-0 dark:bg-zinc-950/50 bg-white/70',
      )}
    >
      <div className={cn('hidden md:block', headerVariants({ variant }))}>
        <div className="flex-row-start px-6 py-3 w-full gap-2">
          {Logo}
          <nav className="grow flex-row-end gap-4">
            {links.map((link) => (
              <HeaderLink key={link.label} href={link.href} name={link.label} />
            ))}
            {icons && (
              <div className="flex-row-end gap-2 pl-3">
                {icons.map((link) => (
                  <Button
                    asChild
                    variant="ghost"
                    key={link.href}
                    size="icon"
                    className="rounded-full size-7"
                  >
                    <a href={link.href}>{link.icon}</a>
                  </Button>
                ))}
                <ThemeToggle />
              </div>
            )}
          </nav>
        </div>
      </div>
      <MobileHeader Logo={Logo} links={links} icons={icons} />
    </header>
  );
};
