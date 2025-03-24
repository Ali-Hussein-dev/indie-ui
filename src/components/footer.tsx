import { configs } from '@/configs';
import { FaDiscord, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { LogoLink } from '@/components/logo';
import { Button } from '@/components/ui/button';

const links = {
  social: [
    {
      label: 'Twitter',
      href: configs.urls.x,
      icon: <FaXTwitter />,
    },
    {
      label: 'Discord',
      href: configs.urls.discord,
      icon: <FaDiscord />,
    },
    {
      label: 'Github',
      href: configs.urls.github,
      icon: <FaGithub />,
    },
  ],
  otherProjects: [
    { label: 'Nextradar.dev', href: configs.urls.nextradar },
    { label: 'Chatgpt Alternatives', href: configs.urls.chatgptAlternatives },
  ],
};
//======================================
export const Footer = () => {
  return (
    <footer className="pt-1 pb-6 border-dashed border-t">
      <div className="max-w-container w-full mx-auto flex justify-between flex-wrap pt-4 px-2 gap-3">
        <div className="flex flex-col gap-1 items-start">
          <LogoLink />
          <Button asChild variant="ghost" size="sm" className="pl-0">
            <a
              href={configs.urls.newsletter}
              target="_blank"
              rel="noopener noreferrer"
            >
              Subscribe
            </a>
          </Button>
        </div>
        <div className="flex flex-col items-start justify-start gap-1">
          <h3 className="text-sm font-semibold dark:text-zinc-400 text-zinc-700 mb-1 pl-2.5">
            Other Projects
          </h3>
          {links.otherProjects.map((link) => (
            <Button key={link.label} asChild variant="link" size="sm">
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </Button>
          ))}
        </div>
        <div className="flex flex-row items-start gap-2 md:gap-3 justify-end">
          {links.social.map((link) => (
            <Button
              key={link.label}
              asChild
              size="icon"
              variant={'ghost'}
              className="rounded-full size-9"
            >
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
};
