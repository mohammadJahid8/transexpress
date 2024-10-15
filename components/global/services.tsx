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
    <div className='text-center py-14'>
      <h2 className='text-xl font-bold text-secondary'>CAPTION</h2>
      <p className='text-2xl font-bold mt-2'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum amet
        at molestie mattis.
      </p>
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
