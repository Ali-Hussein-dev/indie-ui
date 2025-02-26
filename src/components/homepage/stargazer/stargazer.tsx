"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export function Stargazer({ login, name }: { login: string; name: string }) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0} key={login}>
        <TooltipContent className="text-center">
          <p>{name}</p>
          {/* <p className="text-xs text-muted">@{login}</p> */}
        </TooltipContent>
        <TooltipTrigger asChild>
          <a
            target="_blank"
            href={`https://github.com/${login}`}
            className={cn(
              "transition-all relative -mx-0.5 hover:scale-125 hover:z-10"
            )}
            rel="noreferrer nofollow"
          >
            <Avatar className="ring-2 size-9 ring-muted-foreground/70 duration-200 transition-opacity">
              <AvatarImage
                src={`https://avatars.githubusercontent.com/${login}`}
              />
            </Avatar>
          </a>
        </TooltipTrigger>
      </Tooltip>
    </TooltipProvider>
  );
}

export function StargazerMore() {
  return (
    <div
      className={cn(
        "transition-all relative -mx-0.5 hover:scale-125 hover:z-10"
      )}
    >
      <Avatar className="ring-2 flex items-center justify-center size-9 ring-muted-foreground/70 bg-secondary">
        <p className="text-xs font-semibold text-muted-foreground">99+</p>
      </Avatar>
    </div>
  );
}

export function StargazerLoading() {
  return (
    <div className={cn("transition-all relative -mx-0.5")}>
      <Avatar className="ring-4 size-10 ring-secondary">
        <div className="w-full h-full bg-secondary rounded-full">
          <div className="w-full h-full bg-secondary rounded-full animate-pulse" />
        </div>
      </Avatar>
    </div>
  );
}
