// 'use client';

// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const steps = [
//   {
//     icon: '🧾',
//     title: 'Upload License',
//     desc: 'Send us your unused software licenses and we’ll take care of the rest.',
//   },
//   {
//     icon: '💰',
//     title: 'Get Valuation',
//     desc: 'We evaluate your licenses and provide a fair price based on their value.',
//   },
//   {
//     icon: '🚀',
//     title: 'Get Paid',
//     desc: 'Once you accept, we process your payment securely and quickly.',
//   },
// ];

// export default function HowItWorksTimeline() {
//   const timelineRef = useRef(null);
//   const lineRef = useRef(null);
//   const dotRefs = useRef([]);
//   const cardSectionRef = useRef(null);

//   useEffect(() => {
//     // Trigger animation when the card section comes into view
//     ScrollTrigger.create({
//       trigger: cardSectionRef.current,
//       start: 'top 80%',
//       once: true,
//       onEnter: () => {
//         // Grow timeline line
//         gsap.to(lineRef.current, {
//           height: '100%',
//           duration: 1,
//           ease: 'power2.out',
//         });

//         // Pulse dots
//         dotRefs.current.forEach((dot, i) => {
//           if (!dot) return;
//           gsap.fromTo(
//             dot,
//             { scale: 0 },
//             {
//               scale: 1,
//               duration: 0.4,
//               delay: i * 0.2,
//               ease: 'back.out(2)',
//               onComplete: () => {
//                 gsap.to(dot, {
//                   scale: 1.3,
//                   duration: 0.2,
//                   yoyo: true,
//                   repeat: 1,
//                   ease: 'power1.inOut',
//                 });
//               },
//             }
//           );
//         });
//       },
//     });
//   }, []);

//   return (
//     <section ref={timelineRef} className="relative px-6 py-20 bg-white">
//       <h2 className="text-3xl font-bold text-green-700 mb-20">How It Works</h2>

//       <div
//         ref={cardSectionRef}
//         className="relative flex items-start justify-start gap-10"
//       >
//         {/* Timeline Column */}
//         <div className="relative flex flex-col items-center mt-2 ml-2">
//           {/* Line */}
//           <div
//             ref={lineRef}
//             className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[2px] bg-blue-500"
//             style={{ height: '0%' }}
//           />
//           {/* Dots */}
//           {steps.map((_, i) => (
//             <div
//               key={i}
//               ref={(el) => (dotRefs.current[i] = el)}
//               className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-md z-10 my-14"
//             ></div>
//           ))}
//         </div>

//         {/* Cards Column */}
//         <div className="flex flex-col gap-16">
//           {steps.map((step, i) => (
//             <div key={i} className="flex flex-col">
//               <div className="text-2xl mb-2">{step.icon}</div>
//               <h3 className="text-lg font-semibold">{step.title}</h3>
//               <p className="text-gray-600">{step.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }





'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: '🧾',
    title: 'Upload License',
    desc: 'Send us your unused software licenses and we’ll take care of the rest.',
  },
  {
    icon: '💰',
    title: 'Get Valuation',
    desc: 'We evaluate your licenses and provide a fair price based on their value.',
  },
  {
    icon: '🚀',
    title: 'Get Paid',
    desc: 'Once you accept, we process your payment securely and quickly.',
  },
];

export default function HowItWorksTimeline() {
  const timelineRef = useRef(null);
  const lineRef = useRef(null);
  const dotRefs = useRef([]);
  const cardSectionRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: cardSectionRef.current,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to(lineRef.current, {
          height: '100%',
          duration: 1,
          ease: 'power2.out',
        });

        dotRefs.current.forEach((dot, i) => {
          if (!dot) return;
          gsap.fromTo(
            dot,
            { scale: 0 },
            {
              scale: 1,
              duration: 0.4,
              delay: i * 0.2,
              ease: 'back.out(2)',
              onComplete: () => {
                gsap.to(dot, {
                  scale: 1.3,
                  duration: 0.2,
                  yoyo: true,
                  repeat: 1,
                  ease: 'power1.inOut',
                });
              },
            }
          );
        });
      },
    });
  }, []);

  return (
   <section ref={timelineRef} className="relative px-4 sm:px-6 py-20 bg-white">
  <h2 className="text-5xl  text-green-700 mb-10 text-center sm:text-left px-2">
    How It Works.
  </h2>

  <div className="flex flex-col lg:flex-row gap-10">
    {/* Timeline Section */}
    <div className="flex gap-6 w-full lg:w-2/3" ref={cardSectionRef}>
      {/* Line Column */}
      <div className="relative w-6 flex justify-center">
        <div
          ref={lineRef}
          className="absolute top-0 bottom-0 mt-1 lg:ml-1 w-[2px] bg-green-600"
          style={{ height: '0%' }}
        />
      </div>

      {/* Steps */}
      <div className="flex flex-col gap-16 w-full">
        {steps.map((step, i) => (
          <div key={i} className="relative flex items-start gap-6">
            {/* Dot */}
            <div className="w-6 flex justify-center absolute -left-[46px] top-1">
              <div
                ref={(el) => (dotRefs.current[i] = el)}
                className="w-4 h-4 bg-green-600 rounded-full border-2 border-white shadow-md z-10"
              ></div>
            </div>

            {/* Content */}
            <div className="flex flex-col">
              <div className="text-2xl mb-2">{step.icon}</div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Static Image Section */}
    <div className="hidden lg:flex justify-center items-start lg:w-[70%]">
      <Image
  src="/hero2.jpg"
  alt="How it works visual"
  width={800}
  height={450}
  className="rounded-xl shadow-lg w-full max-w-[800px] h-[450px]"
/>
    </div>
  </div>
</section>

  );
}
