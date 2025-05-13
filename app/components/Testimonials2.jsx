"use client"; 


import { useState } from 'react';
import Image from 'next/image';

const testimonialsData = [
  {
    name: 'Barry Allen',
    title: 'Premium member',
    testimonial:
      "I've been a member at Louvre for over a year now, and it's hands down the best sports center I've ever been to. The equipment is state-of-the-art, and the trainers are knowledgeable and always ready to help. I’ve seen real improvements in my performance since joining.",
    imageSrc: '/testimonials1.jpg',
  },
  {
    name: 'Iris West',
    title: 'Regular member',
    testimonial:
      "The facilities at Louvre are top-notch, and the staff is incredibly friendly and helpful. From the cleanliness of the locker rooms to the variety of workout classes, every detail is thoughtfully managed. It truly feels like a community here.",
    imageSrc: '/testimonials2.jpg',
  }
];

export default function TestimonialsFullFlex() {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const { name, title, testimonial, imageSrc } = testimonialsData[current];

  return (
<section className="bg-gray-100 py-12 w-full">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
    {/* Header */}
    <div className="flex flex-col sm:flex-row items-center justify-between mb-8 text-center sm:text-left">
      <div>
        <h2 className="text-3xl sm:text-5xl text-gray-800 font-bold">Testimonials</h2>
        <p className="text-green-600 text-xl sm:text-3xl mt-2">What they say about us.</p>
      </div>
    </div>

    {/* Testimonial Card */}
    <div className="w-full flex justify-center transition-all duration-300">
      <div className="bg-white w-full rounded-xl shadow-md flex flex-col sm:flex-row items-center overflow-hidden">
        {/* Image Section */}
        <div className="w-full sm:w-[30%] p-4 h-[220px] sm:h-[400px]">
         <Image
          src={imageSrc}
          alt={name}
          width={400}
          height={400}
          className="w-full h-full object-cover rounded-lg"
        />

        </div>

        {/* Text Section */}
        <div className="p-4 sm:p-6 sm:w-2/3 w-full relative flex flex-col justify-center">
          {/* Double Quote (hide on small screens) */}
          <div className="absolute top-2 left-6 sm:left-10 hidden md:block">
            <Image
              src="/doublequote.png"
              alt="Double Quote"
              width={40}
              height={40}
            />
          </div>

          {/* Testimonial Text */}
          <p className="text-gray-700 text-base sm:text-2xl italic mb-4 mt-6 sm:mt-0 pl-0 sm:pl-14 pr-2">
            "{testimonial}"
          </p>

          {/* Name & Title */}
          <p className="text-green-600 font-semibold text-sm sm:text-lg pl-0 sm:pl-14">{name}</p>
          <p className="text-gray-500 text-xs sm:text-sm pl-0 sm:pl-14">{title}</p>

          {/* Index in the middle */}
          <div className="mt-4 sm:mt-6 text-center text-gray-500 text-sm">
            {current + 1} / {testimonialsData.length}
          </div>
        </div>
      </div>
    </div>

    {/* Prev/Next Buttons */}
    <div className="flex justify-center items-center space-x-4 mt-6">
      <button
        onClick={handlePrev}
        className="bg-white text-gray-500 rounded-full w-10 h-10 flex items-center justify-center focus:outline-none shadow"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={handleNext}
        className="bg-white text-gray-500 rounded-full w-10 h-10 flex items-center justify-center focus:outline-none shadow"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</section>


  );
}
