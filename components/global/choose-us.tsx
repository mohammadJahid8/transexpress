import Features from './features';
import { cn } from '@/lib/utils';

const ChooseUs = () => {
  return (
    <div id='why-us' className='bg-white py-[60px] px-4 md:px-0'>
      <div className='max-w-screen-3xl mx-auto'>
        <div className='flex flex-col gap-2 justify-center items-center text-center relative mb-10'>
          <div className='absolute top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[40px] md:text-[80px] 3xl:text-[150px] font-bold text-gray-300 opacity-20 whitespace-nowrap'>
            Why Choose Us
          </div>
          <h1
            className={cn(
              'text-sm text-primary inline-flex gap-2 items-center uppercase font-semibold relative z-10'
            )}
          >
            <img src='/subtitle.svg' alt='Fast Forward' />
            Why Choose Us
          </h1>
          <h1 className='text-[32px] 3xl:text-[52px] font-medium text-[#15161c] relative z-10'>
            High Quality Innovate Design
          </h1>
        </div>

        <div className='relative flex items-center md:justify-center'>
          <div className='flex flex-col 2lg:flex-row 2lg:items-center gap-14 2lg:gap-[40px] xl:gap-[100px] max-w-[1200px] xl:max-w-[1300px] mx-auto'>
            <div className='relative z-10 flex flex-col items-start 2lg:items-end gap-14  2lg:mt-[100px]'>
              <Features
                icon={'/why-icon1.svg'}
                label='Technology'
                description='We are expert your all work is very nice waiting for next project.'
                className='flex-row-reverse 2lg:flex-row text-start 2lg:text-end'
              />
              <Features
                icon={'/why-icon2.svg'}
                label='Core Planning'
                description='All the Lorem Ipsum generators on the Internet tend to repeat predefined'
                className='flex-row-reverse 2lg:flex-row text-start 2lg:text-end'
              />
              <Features
                icon={'/why-icon3.svg'}
                label='Project Result'
                description='Making this the first true generator on the Internet uses a dictionary'
                className='flex-row-reverse 2lg:flex-row text-start 2lg:text-end'
              />
            </div>

            <div className='relative hidden 2lg:block z-[1] order-last 2lg:order-none'>
              <div className='2lg:w-[350px] pt-[80px] mx-auto'>
                <img src='/why.png' alt='Why choose us Image' className='' />
              </div>
            </div>

            <div className='relative z-10 flex flex-col gap-14 items-start  2lg:mt-[100px]'>
              <Features
                icon={'/why-icon4.svg'}
                label='Trusted Clients'
                description="Passage of Lorem Ipsum, you need to be sure there isn't anything"
                className='flex-row-reverse text-start'
              />
              <Features
                icon={'/why-icon5.svg'}
                label='Skilled Team'
                description='We are expert your all work is very nice waiting for next project.'
                className='flex-row-reverse text-start'
              />
              <Features
                icon={'/why-icon6.svg'}
                label='Save Money'
                description='We are expert your all work is very nice waiting for next project.'
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
