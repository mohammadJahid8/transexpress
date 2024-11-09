import { cn } from '@/lib/utils';
import { BellIcon, BoxIcon, CalculatorIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Casillero (PO Box)',
      description:
        'Maneja tus compras en USA y recibe en tu país sin complicaciones. ¡Tu PO Box ideal para envíos seguros y rápidos!',
      icon: <CalculatorIcon className='w-8 h-8' />,
    },
    {
      id: 2,
      title: 'Carga Marítima Eficiente',
      description:
        'Perfecto para tus envíos grandes o menos urgentes. Despachos semanales de LCL y FCL desde Florida hasta Puerto Cortés.',
      icon: <BoxIcon className='w-8 h-8' />,
    },
    {
      id: 3,
      title: 'Seguro de Mercaderías Completo',
      description:
        'Protege tus envios con nuestra amplia gama de seguros para embarques, asegurando la tranquilidad que necesitas.',
      icon: <BellIcon className='w-8 h-8' />,
    },
  ];

  return (
    <div className='text-center px-4 lg:px-0 py-20 my-0 lg:my-20 bg-gray-100'>
      <h1 className='text-[32px] font-medium text-[#15161c] relative z-10 max-w-[900px] mx-auto'>
        Estos son algunos de los servicios que te brindamos
      </h1>

      <div className='flex flex-col md:flex-row justify-center mt-8 gap-8'>
        {services.map((service, index) => (
          <div
            key={index}
            className='relative w-full md:w-72 bg-[#f9fafc] p-6 rounded-lg text-start '
          >
            <div className='h-16 w-16 bg-primary rounded-full mb-4 flex items-center justify-center text-white'>
              {service.icon}
            </div>
            <h3 className='text-lg font-bold text-blue-900'>{service.title}</h3>
            <p className='text-sm text-gray-600 mt-2 mb-10'>
              {service.description}
            </p>
            <Link
              href={`/services/${service.id}`}
              className='text-sm text-white bg-primary inline-block px-4 py-2 rounded absolute bottom-0 mb-4'
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
