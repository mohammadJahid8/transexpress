'use client';
/* eslint-disable @next/next/no-img-element */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselButton,
  CarouselDots,
} from '@/components/ui/carousel';
import { useMediaQuery } from '@/lib/useMediaQuery';
import AutoPlay from 'embla-carousel-autoplay';

const Banner = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const images = [
    '/slider-image1.jpg',
    '/slider-image2.png',
    '/slider-image3.jpg',
    '/slider-image4.jpg',
  ];

  const mobileImages = ['/hero_mob.jpg'];

  return (
    <div className='w-full'>
      <Carousel
        className='w-full relative '
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[AutoPlay({ delay: 2000 })]}
      >
        {/* {!isMobile && (
          <div className='flex gap-2 absolute top-[20%] sm:top-14 -translate-y-1/2 left-2 sm:left-4 z-30'>
            <CarouselButton
              direction='prev'
              className='bg-accent/50 border-none rounded-sm h-6 w-6 sm:h-10 sm:w-10 text-primary-foreground transition-colors hover:bg-accent/75 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
            />
            <CarouselButton
              direction='next'
              className='bg-accent/50 border-none rounded-sm h-6 w-6 sm:h-10 sm:w-10 text-primary-foreground transition-colors hover:bg-accent/75 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
            />
          </div>
        )} */}
        <CarouselContent className=''>
          {isMobile
            ? mobileImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className='relative'>
                    <img
                      src={image}
                      alt={`Slider Image ${index + 1}`}
                      className='h-full w-full object-contain'
                    />
                  </div>
                </CarouselItem>
              ))
            : images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className='relative'>
                    <img
                      src={image}
                      alt={`Slider Image ${index + 1}`}
                      className='h-full w-full object-contain'
                    />
                  </div>
                </CarouselItem>
              ))}
        </CarouselContent>

        {!isMobile && <CarouselDots />}
      </Carousel>
    </div>
  );
};

export default Banner;
