'use client';
import { useState } from 'react';
import PersonalTab from '@/components/global/personal-tab';
import BusinessTab from '@/components/global/business-tab';
import { Button } from '@/components/ui/button';
import { ArrowRightCircle, ArrowRightIcon } from 'lucide-react';

export default function Component() {
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <>
      <div className='bg-[url("/calculator-bg.png")] bg-cover bg-center bg-no-repeat w-full h-64 flex items-center'>
        <div className='container mx-auto px-4 lg:px-32'>
          <h1 className='text-[#444444] text-[44px] font-bold'>ACCOUNT</h1>
          <p className='text-[#aaaaaa] text-[18px]'>
            Gestiona tu cuenta y tus datos personales
          </p>
        </div>
      </div>
      <div className='w-full max-w-5xl mx-auto p-4'>
        <div className='flex xs:flex-row flex-col mb-4 w-full gap-4'>
          <Button
            className={`py-4 px-4 text-white font-semibold rounded-full h-16 flex-1 !hover:bg-none active:bg-none focus:bg-none ${
              activeTab === 'personal' ? 'active-button' : 'bg-[#3F51B5]'
            }`}
            onClick={() => setActiveTab('personal')}
          >
            <ArrowRightCircle className='mr-2' />
            CASILLERO PERSONAL
          </Button>
          <Button
            className={`py-4 px-4 text-white font-semibold rounded-full h-16 flex-1 !hover:bg-none active:bg-none focus:bg-none ${
              activeTab === 'business' ? 'active-button' : 'bg-[#3F51B5]'
            }`}
            onClick={() => setActiveTab('business')}
          >
            <ArrowRightIcon className='mr-2' />
            CASILLERO EMPRESARIAL
          </Button>
        </div>
        <div className={`p-4 rounded-b-lg bg-[#d4d9ed]`}>
          {activeTab === 'personal' ? <PersonalTab /> : <BusinessTab />}
        </div>
      </div>
    </>
  );
}
