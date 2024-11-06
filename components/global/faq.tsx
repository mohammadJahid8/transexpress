/* eslint-disable react/no-unescaped-entities */
'use client';

import { cn } from '@/lib/utils';
import FaqAccordion from './faq-accordion';

const Faqs = () => {
  return (
    <div
      id='faqs'
      className='relative z-10 px-4 xl:px-0 py-[60px] md:py-[80px] bg-gray-100'
    >
      <div className='max-w-[1200px] mx-auto'>
        <div className='flex flex-col gap-2 justify-center items-center text-center pb-12'>
          {/* <h4
            className={cn(
              'text-sm text-primary inline-flex gap-2 items-center uppercase font-semibold relative z-10'
            )}
          >
            <img src='/subtitle.svg' alt='Fast Forward' />
            FAQs
          </h4> */}
          <h1 className='text-[32px] font-medium text-[#15161c] relative z-10 max-w-[900px] mx-auto'>
            Preguntas Frecuentes.
          </h1>
        </div>

        <div className='flex lg:flex-row flex-col items-start gap-10 max-w-xl lg:max-w-none mx-auto'>
          <FaqAccordion />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
