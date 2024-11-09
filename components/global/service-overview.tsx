/* eslint-disable react/no-unescaped-entities */
import { Card, CardContent } from '@/components/ui/card';
import { Wrench, HardHat, Building2 } from 'lucide-react';

export default function ServiceOverview({ overview }: { overview: any }) {
  console.log({ overview });
  return (
    <div className='py-8'>
      <h1 className='text-3xl font-bold mb-4'>Service Overview</h1>
      <p className='text-sm text-gray-600 mb-8'>{overview.description}</p>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
        {overview.card.map((item: any, index: number) => (
          <Card key={index}>
            <CardContent className='flex flex-col items-center p-6'>
              {item.icon}
              <h2 className='text-lg font-semibold text-center mb-2'>
                {item.title}
              </h2>
              <p className='text-sm text-center text-gray-600'>
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className='border-t border-gray-200 pt-8'>
        <blockquote className='italic text-lg text-gray-700 mb-4'>
          "{overview.message.description}"
        </blockquote>
        <div className='flex items-center'>
          <div>
            <p className='font-semibold'>{overview.message.name}</p>
            <p className='text-sm text-gray-600'>{overview.message.position}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
