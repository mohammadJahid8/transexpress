/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Subscribe = () => {
  return (
    <div className='relative bg-secondary h-[330px] sm:h-[424px] flex items-center justify-start my-20 xl:rounded-[12px] p-4 md:p-20 max-w-[1280px] mx-auto'>
      <div className=''>
        <div className='flex flex-col gap-12 w-full'>
          <h2
            className={cn(
              inter.className,
              'text-4xl sm:text-5xl font-bold text-white md:text-[50px] md:leading-[60px] md:w-1/2'
            )}
          >
            "Hunab: Your Path to the Ideal Home"
          </h2>

          <form className='relative z-10 flex flex-1 max-w-[650px] w-full'>
            <input
              id='email-address'
              name='email'
              type='email'
              autoComplete='email'
              required
              className={cn(
                'w-full h-[72px] px-5 py-3 placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:border-white rounded-md',
                'border-white text-gray-900'
              )}
              placeholder='Enter your email'
            />

            <button
              type='submit'
              className={cn(
                'absolute right-3 top-3 bg-secondary text-white border border-transparent rounded-md py-3 sm:px-5 px-3 flex items-center justify-center sm:text-base text-sm font-medium w-auto'
              )}
            >
              Join us now
            </button>
          </form>
        </div>
      </div>
      <div className='hidden md:flex absolute top-16 right-0 overflow-hidden  justify-end'>
        <img
          src='/subscribe.svg'
          alt='Background pattern'
          className='w-[500px] h-full object-cover'
        />
      </div>
    </div>
  );
};

export default Subscribe;
