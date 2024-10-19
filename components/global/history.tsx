import { cn } from '@/lib/utils';
import Image from 'next/image';

const historyData = [
  {
    year: '2021',
    title: 'We are benchmarks in Latam',
    description:
      'At the beginning of the year, we achieved an investment of US $35 million by Greenspring Associates that allows us to expand our coverage to other places in Latin America, as well as expand our products and services.',
    image: '/history1.svg',
  },
  {
    year: '2020',
    title: 'New people believed in us',
    description:
      'We continued to grow until we secured a second international Series A investment from Kaszek Ventures of US $10 million. This helped us to continue expanding our operation and improving the service we offer to our users.',
    image: '/history2.svg',
  },
  {
    year: '2019',
    title: 'We are international',
    description:
      'Due to the success of the first months, we were able to attract international investment and received US $4.5 million from NFX that allowed us to bring our operations to the city of Bogotá, Colombia.',
    image: '/history3.svg',
  },
];

const HistorySection = () => {
  return (
    <section className='py-16 px-4 lg:px-24'>
      <div className='max-w-7xl mx-auto'>
        <h4 className='text-4xl md:text-5xl font-semibold text-[#15161c] text-center mb-12'>
          Our <span className='text-secondary'>History</span>
        </h4>
        <div className='flex flex-col gap-16'>
          {historyData.map((item, index) => (
            <div
              key={index}
              className={cn(
                'flex items-center gap-8',
                index === 1
                  ? 'flex-col lg:flex-row-reverse'
                  : 'flex-col lg:flex-row'
              )}
            >
              <div className={`w-full max-w-[400px] xl:max-w-[531px] `}>
                <Image
                  src={item.image}
                  alt={`History Image ${item.year}`}
                  width={531}
                  height={300}
                  className=''
                />
              </div>
              <div
                className={`w-full lg:w-1/2 bg-[#F6F8FF] p-7 rounded-[12px] ${
                  index % 2 === 1 ? 'order-1 lg:order-2' : ''
                }`}
              >
                <h3 className='text-secondary font-bold text-lg mb-2'>
                  {item.year}
                </h3>
                <h4 className='text-[28px] font-medium mb-2'>{item.title}</h4>
                <p className='text-[#666669] text-lg'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
