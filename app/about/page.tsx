/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Vision from '@/components/global/vision';
import HistorySection from '@/components/global/history';
import Faqs from '@/components/global/faq';
import Subscribe from '@/components/global/subscribe';

const inter = Inter({ subsets: ['latin'] });

const AboutUs = () => {
  return (
    <>
      <section
        className='relative h-64 lg:h-96 bg-cover bg-center'
        style={{ backgroundImage: 'url(/about.svg)' }}
      >
        <div className='absolute inset-0 bg-black opacity-50'></div>{' '}
        <div className='relative z-10 flex items-center justify-center h-full'>
          <h1
            className={cn(
              inter.className,
              'text-4xl lg:text-6xl font-bold text-white'
            )}
          >
            About Us
          </h1>
        </div>
      </section>

      <section className='py-16 px-4 lg:px-24 3xl:px-0 max-w-[1320px] mx-auto'>
        <div className='flex flex-col lg:flex-row lg:gap-16 xl:gap-32 items-center'>
          <div className='relative mb-12 lg:mb-0'>
            <div className='relative h-64 w-64 lg:w-96 lg:h-96'>
              <div className='absolute -top-4 -left-4 w-[192px] h-[202px] border-4 border-secondary bg-secondary rounded-[12px]'></div>
              <Image
                src='/mission.svg'
                alt='About Us Image'
                className='rounded-lg'
                layout='fill'
                objectFit='cover'
              />
            </div>
          </div>

          <div className='w-full'>
            <h2 className='text-3xl lg:text-5xl font-bold mb-6'>
              We're on a Mission to Change View of Real Estate Field.
            </h2>
            <p className='text-gray-600 mb-6'>
              It doesn't matter how organized you are — a surplus of toys will
              always ensure your house is a mess waiting to happen. Fortunately,
              getting kids on board with the idea of ditching their stuff is a
              lot easier than it sounds. Maecenas quis viverra metus, et
              efficitur ligula. Nam congue augue et ex congue, sed luctus lectus
              congue.
            </p>
            <Button
              variant='outline'
              className='font-semibold px-6 py-3 text-secondary transition'
            >
              View more
            </Button>
          </div>
        </div>
      </section>
      <Vision />
      <HistorySection />
      <Faqs />
      <Subscribe />
    </>
  );
};

export default AboutUs;
