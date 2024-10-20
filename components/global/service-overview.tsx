/* eslint-disable react/no-unescaped-entities */
import { Card, CardContent } from '@/components/ui/card';
import { Wrench, HardHat, Building2 } from 'lucide-react';

export default function ServiceOverview() {
  return (
    <div className='py-8'>
      <h1 className='text-3xl font-bold mb-4'>Service Overview</h1>
      <p className='text-sm text-gray-600 mb-8'>
        Industry's standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type specimen
        book. It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing.
        Richard Clintock a Latin professor at Hampden-Sydney College in
        Virginia, looked up one of the more obscure Latin words, consectetur,
        from a Lorem Ipsum passage.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
        {[
          { icon: Wrench, title: 'Full Principal Contractor service' },
          { icon: HardHat, title: 'Full-time Onsite Supervision' },
          { icon: Building2, title: 'Timber and steel frame construction' },
        ].map((item, index) => (
          <Card key={index}>
            <CardContent className='flex flex-col items-center p-6'>
              <item.icon className='w-12 h-12 text-secondary mb-4' />
              <h2 className='text-lg font-semibold text-center mb-2'>
                {item.title}
              </h2>
              <p className='text-sm text-center text-gray-600'>
                There are many passages of lorem ipsum available
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className='border-t border-gray-200 pt-8'>
        <blockquote className='italic text-lg text-gray-700 mb-4'>
          "Tortor posuere ac ut consequat tellusi elem isis etum sag ittis vitae
          atleo duis ut diam odio ut sem nulla phar. Purus sit ame nus mas
          highly efficient solution whereas open-source application."
        </blockquote>
        <div className='flex items-center'>
          <div>
            <p className='font-semibold'>Aleesha brown</p>
            <p className='text-sm text-gray-600'>Company CEO</p>
          </div>
        </div>
      </div>
    </div>
  );
}
