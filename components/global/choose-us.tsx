import Features from './features';
import { cn } from '@/lib/utils';

const ChooseUs = () => {
  return (
    <div id='why-us' className='bg-white py-[60px] px-4 md:px-0 2lg:-mb-16'>
      <div className='max-w-screen-3xl mx-auto'>
        <div className='flex flex-col gap-2 justify-center items-center text-center relative mb-10'>
          <div className='absolute top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[40px] md:text-[80px] 3xl:text-[150px] font-bold text-gray-300 opacity-20 whitespace-nowrap'>
            ¿Por Qué Nosotros?
          </div>
          {/* <h4
            className={cn(
              'text-sm text-primary inline-flex gap-2 items-center uppercase font-semibold relative z-10'
            )}
          >
            <img src='/subtitle.svg' alt='Fast Forward' />
            ¿Por Qué Nosotros?
          </h4> */}
          <h1 className='text-[32px] 3xl:text-[52px] font-medium text-[#15161c] relative z-10'>
            Tu Mejor Opcion
          </h1>
        </div>

        <div className='relative flex items-center md:justify-center 2lg:mb-16'>
          <div className='flex flex-col 2lg:flex-row 2lg:items-center gap-14 2lg:gap-[40px] xl:gap-[100px] max-w-[1200px] xl:max-w-[1300px] mx-auto'>
            <div className='relative z-10 flex flex-col items-start 2lg:items-end gap-14'>
              <Features
                icon={'/why-icon1.svg'}
                label='Tecnología'
                description='Usando la tecnología más avanzada para ayudarte en logística.'
                className='flex-row-reverse 2lg:flex-row text-start 2lg:text-end'
              />
              <Features
                icon={'/why-icon2.svg'}
                label='Planificación'
                description='Coordinación precisa para optimizar el movimiento de mercancías.'
                className='flex-row-reverse 2lg:flex-row text-start 2lg:text-end'
              />
              <Features
                icon={'/why-icon3.svg'}
                label='Magnitud'
                description='Logrando resultados efectivos en cada fase de la cadena logística.'
                className='flex-row-reverse 2lg:flex-row text-start 2lg:text-end'
              />
            </div>

            <div className='relative hidden 2lg:block z-[1] order-last 2lg:order-none'>
              {/* <div className='2lg:w-[350px] pt-[80px] mx-auto'>
                <img src='/why.png' alt='Why choose us Image' className='' />
              </div> */}
            </div>

            <div className='relative z-10 flex flex-col gap-14 items-start'>
              <Features
                icon={'/why-icon4.svg'}
                label='Confianza de Clientes'
                description='Nuestro compromiso con la confiabilidad y puntualidad.'
                className='flex-row-reverse text-start'
              />
              <Features
                icon={'/why-icon5.svg'}
                label='Equipo Calificado'
                description='Un equipo experto a cargo de tus necesidades logísticas.'
                className='flex-row-reverse text-start'
              />
              <Features
                icon={'/why-icon6.svg'}
                label='Ahorro'
                description='Soluciones inteligentes para reducir costos en transporte.'
                className='flex-row-reverse text-start'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
