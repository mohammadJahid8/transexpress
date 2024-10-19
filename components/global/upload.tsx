'use client';

import React, { useState, ChangeEvent } from 'react';
import { Input } from '../ui/input';
import { Upload } from 'lucide-react';

interface UploadProps {
  setImage?: (file: File) => void;
  description?: string;
}

const ImageUpload: React.FC<UploadProps> = ({ setImage, description }) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage?.(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setPreviewImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <label htmlFor='licenseFile' className='relative cursor-pointer'>
      <div className='flex flex-col items-center justify-center border border-dashed border-gray-300 rounded-[12px] p-4 bg-white h-22'>
        <div className='flex flex-col items-center gap-2.5'>
          <Upload className='w-6 h-6' />
          <div className='flex flex-col items-center gap-1 text-center'>
            <span className='text-base text-gray-500'>
              Haz clic o arrastra un archivo a este área para subirlo.
            </span>
            <span className='text-sm text-gray-300'>{description}</span>
          </div>
        </div>
        <Input
          type='file'
          className='hidden'
          id='licenseFile'
          onChange={handleFileChange}
        />
      </div>
      {previewImage && (
        <div className='mt-2'>
          <img src={previewImage} alt='Preview' className='max-w-52 h-auto' />
        </div>
      )}
    </label>
  );
};

export default ImageUpload;
