'use client';
import { useState } from 'react';
import PersonalTab from '@/components/global/personal-tab';
import BusinessTab from '@/components/global/business-tab';
import { Button } from '@/components/ui/button';
import { ArrowRightCircle, ArrowRightIcon } from 'lucide-react';

export default function Component() {
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <div className='w-full max-w-5xl mx-auto p-4'>
      <div className='flex xs:flex-row flex-col mb-4 w-full'>
        <Button
          className={`py-4 px-4 text-white font-semibold rounded-none h-16 flex-1 !hover:bg-none active:bg-none focus:bg-none ${
            activeTab === 'personal'
              ? '!bg-[#4CAF50] active-button'
              : 'bg-[#3F51B5]'
          }`}
          onClick={() => setActiveTab('personal')}
        >
          <ArrowRightCircle className='mr-2' />
          CASILLERO PERSONAL
        </Button>
        <Button
          className={`py-4 px-4 text-white font-semibold rounded-none h-16 flex-1 !hover:bg-none active:bg-none focus:bg-none ${
            activeTab === 'business'
              ? '!bg-[#4CAF50] active-button'
              : 'bg-[#3F51B5]'
          }`}
          onClick={() => setActiveTab('business')}
        >
          <ArrowRightIcon className='mr-2' />
          CASILLERO EMPRESARIAL
        </Button>
      </div>
      <div
        className={`p-4 rounded-b-lg ${
          activeTab === 'personal' ? 'bg-[#d6f2db]' : 'bg-[#d4d9ed]'
        }`}
      >
        {activeTab === 'personal' ? <PersonalTab /> : <BusinessTab />}
      </div>
    </div>
  );
}
