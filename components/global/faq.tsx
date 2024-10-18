/* eslint-disable react/no-unescaped-entities */
'use client';

import FaqAccordion from './faq-accordion';

const Faqs = () => {
  return (
    <div
      id='faqs'
      className='relative z-10 px-4 xl:px-0 py-[60px] md:py-[80px] bg-gray-100'
    >
      <div className='max-w-[1200px] mx-auto'>
        <div className='flex flex-col gap-2 justify-center items-center text-center pb-12'>
          <h2 className='text-xl font-bold text-secondary'>FAQ</h2>
          <p className='text-2xl font-bold mt-2'>
            Your Queries Answered, All in One Place
          </p>
        </div>

        <div className='flex lg:flex-row flex-col items-start gap-10 max-w-xl lg:max-w-none mx-auto'>
          <FaqAccordion />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
