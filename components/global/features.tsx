import { cn } from '@/lib/utils';

interface FeaturesProps {
  className?: string;
  label: string;
  description: string;
  icon: string;
}

const Features = ({ className, label, description, icon }: FeaturesProps) => {
  return (
    <div className={cn('flex items-start text-end gap-6', className)}>
      <div className='flex flex-col gap-2'>
        <h3 className='text-xl text-[#15161c] font-medium leading-[30px]'>
          {label}
        </h3>
        <p className='text-base text-[#737373] leading-6'>{description}</p>
      </div>
      <img
        src={icon as string}
        alt={label}
        className='w-[45px] h-[45px] md:w-[55px] md:h-[55px]'
      />
    </div>
  );
};

export default Features;
