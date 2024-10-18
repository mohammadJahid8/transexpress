import { BookOpen } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';

const Steps = () => {
  const steps = [
    {
      number: 1,
      title: 'Escoge tu producto',
      description: 'Entra a la tienda favorita y escoge todos tus productos.',
      icon: '/step1.svg',
    },
    {
      number: 2,
      title: 'Completa tu dirección',
      description: 'Ingresa tu casillero de Trans-Express en el checkout.',
      icon: '/step2.svg',
    },
    {
      number: 3,
      title: 'Recibe tus paquetes',
      description: 'Recibe en tu casa en El Salvador. Fácil y seguro.',
      icon: '/step3.svg',
    },
  ];

  return (
    <div className='text-center px-4 lg:px-0 py-28 bg-white relative overflow-hidden'>
      <img
        src='/dash.svg'
        alt='dashed line'
        className='absolute inset-0 w-full h-full object-cover hidden md:block '
      />
      <div className='relative z-10 flex flex-col items-center gap-4 max-w-screen-3xl mx-auto'>
        <h2 className='text-2xl md:text-3xl font-bold text-primary'>
          Utilizar tu casillero es bien fácil
        </h2>
        <p className='text-gray-600 mb-12 max-w-xl mx-auto'>
          En Trans-Express El Salvador, nos esforzamos para que comprar en
          Estados Unidos te resulte fácil, sencillo y seguro.
        </p>
        <div className='flex flex-col md:flex-row justify-center items-center gap-4 gap-y-20 lg:gap-40'>
          {steps.map((step) => (
            <div
              key={step.number}
              className='w-full lg:w-64 rounded-lg bg-[#f9fafc] flex-col items-center justify-center pt-10 pb-8 px-5 relative'
            >
              <div className='flex justify-center absolute inset-x-0 -top-7'>
                <div className='flex items-center justify-center bg-orange-400 bg-opacity-20 h-14 w-14 rounded-full'>
                  <div className='h-10 w-10 bg-orange-400 rounded-full flex items-center justify-center text-white font-semibold mx-auto text-2xl border-4 border-orange-400 border-opacity-20'>
                    {step.number}
                  </div>
                </div>
              </div>
              <div>
                <img alt='' className='h-20 mx-auto' src={step.icon} />
              </div>
              <p className='text-lg font-bold text-center mt-4'>{step.title}</p>
              <p className='text-center text-gray-600 text-sm mt-3'>
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <Button className='mt-8 px-6 py-2 bg-primary text-white'>
          Obtener casillero gratis
        </Button>
      </div>
    </div>
  );
};

export default Steps;
