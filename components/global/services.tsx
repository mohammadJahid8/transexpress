import { cn } from '@/lib/utils';
import { BellIcon, BoxIcon, CalculatorIcon } from 'lucide-react';
import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'New Calculator',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      link: '#',
      icon: <CalculatorIcon className='w-8 h-8' />,
    },
    {
      title: 'Pro Box Locker',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      link: '#',
      icon: <BoxIcon className='w-8 h-8' />,
    },
    {
      title: 'Pre Alert Your Packages',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      link: '#',
      icon: <BellIcon className='w-8 h-8' />,
    },
  ];

  return (
    <div className='text-center px-4 lg:px-0 py-20 my-0 lg:my-20 bg-gray-100'>
      <h4
        className={cn(
          'text-sm text-primary inline-flex gap-2 items-center uppercase font-semibold relative z-10'
        )}
      >
        <img src='/subtitle.svg' alt='Fast Forward' />
        Services
      </h4>
      <h1 className='text-[32px] font-medium text-[#15161c] relative z-10 max-w-[900px] mx-auto'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum amet
        at molestie mattis.
      </h1>

      <div className='flex flex-col md:flex-row justify-center mt-8 gap-8'>
        {services.map((service, index) => (
          <div
            key={index}
            className='w-full md:w-72 bg-[#f9fafc] p-6 rounded-lg text-start '
          >
            <div className='h-16 w-16 bg-primary rounded-full mb-4 flex items-center justify-center text-white'>
              {service.icon}
            </div>
            <h3 className='text-lg font-bold text-blue-900'>{service.title}</h3>
            <p className='text-sm text-gray-600 mt-2'>{service.description}</p>
            <a
              href={service.link}
              className='text-sm text-white bg-primary mt-4 inline-block px-4 py-2 rounded'
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
