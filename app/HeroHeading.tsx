'use client';
import {useEffect, useState} from 'react';

export default function HeroHeading() {
  const [position, setPosition] = useState(40);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches) return;
    setPosition(0);
    const timers: ReturnType<typeof setTimeout>[] = [];
    for (let i = 1; i <= 37; i++) timers.push(setTimeout(() => setPosition(i), 320 + i * 70));
    timers.push(setTimeout(() => setPosition(40), 5500));
    const finish = () => {if(preference.matches){timers.forEach(clearTimeout);setPosition(40);}};
    preference.addEventListener('change', finish);
    return () => {timers.forEach(clearTimeout);preference.removeEventListener('change', finish);};
  }, []);
  function letters(text: string, offset: number) {
    return Array.from(text).map((letter, index) => {
      const cursor = offset + index + 1;
      return <span key={index} className={'hero-letter' + (position < cursor ? ' is-untyped' : '') + (position === cursor ? ' is-typing' : '')}>{letter}</span>;
    });
  }
  return <h1 className="hero-heading" aria-label="Good systems. Better possibilities.">
    <span aria-hidden="true" className="hero-heading-line">{letters('Good systems.', 0)}</span><br/>
    <span aria-hidden="true" className="hero-heading-line">{letters('Better ', 16)}<span className={'serif hero-keyword' + (position < 37 ? ' is-untyped-word' : '')}>{letters('possibilities.', 23)}</span></span>
  </h1>;
}
