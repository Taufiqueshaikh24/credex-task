'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    const splitText = headingRef.current.innerText.split('');
    headingRef.current.innerHTML = splitText
      .map((char) => `<span class="heading-char">${char}</span>`)
      .join('');

    tl.fromTo(
      '.heading-char',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.05 }
    )
      .fromTo(
        paragraphRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 },
        '-=0.6'
      )
      .fromTo(
        buttonRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: 'bounce.out' },
        '-=0.4'
      );
  }, []);

  return (
   <main
  id="hero"
  className="relative bg-cover bg-center bg-no-repeat text-white py-28 px-6 text-center overflow-hidden rounded-bl-[40px] rounded-br-[40px]"
  style={{
    backgroundImage: `url('/hero1.webp')`,
  }}
>

      {/* Optional dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h1
          ref={headingRef}
          className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg"
        >
          Turn Unused Software into Profit
        </h1>
        <p
          ref={paragraphRef}
          className="mt-4 text-lg md:text-md text-white/90"
        >
          Soft Sell empowers businesses to transform idle software assets into revenue. <br />
          Join hundreds of companies who’ve simplified their license resale.
        </p>
        <a
          ref={buttonRef}
          href="#contact"
          className="mt-6 hover:bg-green-600 hover:text-white inline-block bg-white text-green-700 px-8 py-4 rounded-full shadow-md font-semibold transition-transform transform hover:scale-105"
        >
          Sell My Licenses
        </a>
      </div>
    </main>
  );
}
