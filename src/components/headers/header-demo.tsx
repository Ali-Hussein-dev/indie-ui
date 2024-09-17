import { FaXTwitter } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';
import { LogoLink } from '@/components/logo';
import { Header } from './header';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ThemeToggle } from '../toggle-theme';

const headerLinks = [
  { name: 'Features', href: '/header-demo/#features' },
  { name: 'Pricing', href: '/header-demo/#pricing' },
  { name: 'FAQs', href: '/header-demo/#faqs' },
];
const icons = [
  {
    name: 'Twitter',
    icon: <FaXTwitter size="14" />,
    href: 'https://x.com',
  },
  {
    name: 'GitHub',
    icon: <FaGithub size="14" />,
    href: 'https://github.com',
  },
];
const HeaderLink = (props: { href: string; name: string }) => {
  return <Link href={props.href}>{props.name}</Link>;
};
export const HeaderDemo = ({
  variant = 'default',
  sticky,
}: {
  variant: 'default' | 'centered';
  sticky: boolean;
}) => (
  <Header
    Logo={<LogoLink />}
    variant={variant}
    sticky={sticky}
    desktopItems={
      <>
        {headerLinks.map((link, i) => (
          <HeaderLink key={i} href={link.href} name={link.name} />
        ))}
        <ThemeToggle />
      </>
    }
    mobileItems={({ setIsOpen }) => (
      <>
        {headerLinks.map((link) => (
          <Button
            key={link.href}
            asChild
            variant={'outline'}
            className="w-full rounded-xl justify-center"
            size="lg"
            onClick={() => setIsOpen(false)}
          >
            <Link href={link.href}>{link.name}</Link>
          </Button>
        ))}
        <div className="flex-row-end w-full gap-3 border-t pt-4 border-dashed">
          {icons && (
            <div className="flex-row-center grow gap-2">
              {icons.map((icon) => (
                <Button
                  key={icon.name}
                  size="icon"
                  className="rounded-full"
                  variant={'outline'}
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={icon.href}>{icon.icon}</Link>
                </Button>
              ))}
            </div>
          )}
        </div>
      </>
    )}
  />
);
