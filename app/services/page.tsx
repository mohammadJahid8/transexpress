'use client';
import ServiceOverview from '@/components/global/service-overview';
import { cn } from '@/lib/utils';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

const services = [
  {
    title: 'General construction',
    image: '/mission.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum amet at molestie mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum amet at molestie mattis',
  },
  {
    title: 'Property Maintenance',
    image: '/mission.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum amet at molestie mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum amet at molestie mattis',
  },
  {
    title: 'Project Management',
    image: '/mission.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum amet at molestie mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum amet at molestie mattis',
  },
  {
    title: 'Renovation & Remodeling',
    image: '/mission.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum amet at molestie mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum amet at molestie mattis',
  },
  {
    title: 'Preconstruction',
    image: '/mission.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum amet at molestie mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum amet at molestie mattis',
  },
];

const ServicePage = () => {
  const [active, setActive] = useState(0);
  return (
    <div className='py-10 md:py-20 px-4 lg:px-24 3xl:px-0 max-w-[1320px] mx-auto'>
      <h1 className='text-3xl md:text-4xl font-medium text-[#15161c] relative z-10 max-w-[900px] mx-auto text-center'>
        We provide excelent services to our customers
      </h1>

      <div className='flex flex-col lg:flex-row gap-8 my-10'>
        <div className='flex flex-col gap-4'>
          {services.map((item, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              className={cn(
                'flex flex-1 justify-between items-center gap-4 lg:w-[450px] h-max bg-white border border-[#dde6e3] px-5 py-3 sm:py-3.5 rounded-md cursor-pointer transition-all duration-500',
                active === i && 'bg-primary text-white'
              )}
            >
              {item.title}

              <ArrowRightIcon
                className={cn(
                  'w-6 h-6 transition-transform',
                  active === i && 'rotate-45'
                )}
              />
            </div>
          ))}
        </div>

        <div className='flex items-center flex-col lg:flex-row gap-7 flex-1 h-max py-3 sm:py-3.5 rounded-md'>
          <Image
            src={services[active].image}
            alt={services[active].title}
            width={300}
            height={100}
          />
          <div className='flex flex-col gap-3'>
            <h2 className='text-3xl font-medium text-[#15161c]'>
              About this service
            </h2>
            <h3 className='text-2xl font-medium text-[#15161c] mt-4'>
              {services[active].title}
            </h3>
            <p className='text-sm text-muted-foreground'>
              {services[active].description}
            </p>
          </div>
        </div>
      </div>

      <ServiceOverview />
    </div>
  );
};

export default ServicePage;
