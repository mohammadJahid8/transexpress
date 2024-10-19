import { BoxIcon, Building2, HelpingHand, HousePlus } from 'lucide-react';
import React from 'react';

const Vision = () => {
  const services = [
    {
      id: 1,
      title: 'We approach the possibility of having a new home',
      description:
        'We accompany people to make one of the most important decisions of their lives: Buying a new home.',
      icon: <HousePlus className='w-6 h-6' />,
    },
    {
      id: 2,
      title: 'We revolutionize the real estate industry',
      description:
        'We accompany people to make one of the most important decisions of their lives: Buying a new home.',
      icon: <Building2 className='w-6 h-6' />,
    },
    {
      id: 3,
      title: 'We make home buying an experience',
      description:
        'We accompany people to make one of the most important decisions of their lives: Buying a new home.',
      icon: <HelpingHand className='w-6 h-6' />,
    },
  ];

  return (
    <div className='text-center px-4 lg:px-24 3xl:px-0 py-20 my-0 lg:my-20 bg-[#f5f7ff]'>
      <div className='max-w-[1320px] mx-auto'>
        <h4 className='text-4xl md:text-5xl font-semibold text-[#15161c]'>
          Our <span className='text-secondary'>Vision</span>
        </h4>

        <div className='flex flex-col lg:flex-row justify-center mt-12 gap-8'>
          {services.map((service, index) => (
            <div
              key={index}
              className='w-full bg-white p-10 rounded-lg text-start'
            >
              <div className='h-12 w-12 bg-secondary rounded-md mb-4 flex items-center justify-center text-white'>
                {service.icon}
              </div>
              <h3 className='text-2xl md:text-[32px] font-medium leading-9 text-[#15161c]'>
                {service.title}
              </h3>
              <p className='text-sm md:text-lg leading-6 text-[#666669] mt-4'>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vision;
