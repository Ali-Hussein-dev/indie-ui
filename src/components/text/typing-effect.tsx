'use client';

import * as React from 'react';

export function TypingEffect({ text = 'Typing Effect' }: { text: string }) {
  const [displayedText, setDisplayedText] = React.useState('');
  const [i, setI] = React.useState(0);

  React.useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prevState) => prevState + text.charAt(i));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, 150);

    return () => {
      clearInterval(typingEffect);
    };
  }, [i]);

  return (
    <h1 className="text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]">
      {displayedText ? displayedText : text}
    </h1>
  );
}
