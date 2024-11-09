/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Subscribe = () => {
  return (
    <div className='relative bg-[#4438ca] h-auto flex flex-col md:flex-row items-center justify-between p-8 max-w-[1280px] mx-auto xl:rounded-lg my-10 py-16'>
      <div className='flex-1 flex flex-col mb-4 md:mb-0'>
        <h2
          className={cn(
            inter.className,
            'text-2xl sm:text-3xl font-bold text-white'
          )}
        >
          Want product news and updates?
        </h2>
        <p className='text-white mt-2'>Sign up for our newsletter.</p>
      </div>
      <form className='flex-1 flex flex-col md:flex-row justify-end items-center w-full md:w-full'>
        <input
          id='email-address'
          name='email'
          type='email'
          autoComplete='email'
          required
          className={cn(
            'w-full md:max-w-md h-12 px-4 py-2 focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white focus:border-white rounded-md',
            'border-white bg-[#564ccf] text-white mb-4 md:mb-0 border'
          )}
          placeholder='Enter your email'
        />
        <button
          type='submit'
          className={cn(
            'md:ml-4 bg-white text-blue-800 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-sm font-medium h-12'
          )}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
