/* eslint-disable react/no-unescaped-entities */
'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';
import Captcha from '@/components/global/captcha';

export default function AlertPage() {
  const [file, setFile] = useState(null);

  const onChange = () => {};

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile) as unknown as null);
    }
  };

  return (
    <div className='w-full max-w-5xl mx-auto p-4 md:p-6 my-4 md:my-10 bg-white md:rounded-lg md:shadow'>
      <h1 className='text-2xl font-semibold mb-6 text-center text-gray-800'>
        Llena los datos solicitados en este formulario...
      </h1>
      <form className='space-y-6'>
        <div>
          <Input placeholder='NOMBRE Y APELLIDO' />
        </div>
        <div>
          <Input placeholder='CORREO ASOCIADO A TU CASILLERO' />
        </div>
        <div>
          <Input placeholder='NÚMERO DE CASILLERO' />
          <p className='text-sm text-gray-500 mt-1'>
            Ingresa tu número de casillero completo y evita que tu alerta no se
            coloque. Ej HN17X0000N, SPS0000, TGU0000
          </p>
        </div>
        <div>
          <Input placeholder='TIENDA DONDE REALIZÓ LA COMPRA' />
        </div>
        <div>
          <Input placeholder='NÚMERO DE TRACKING o RASTREO' />
          <p className='text-sm text-gray-500 mt-1'>
            Numero de rastreo NO es el numero de Orden.
          </p>
        </div>
        <div>
          <Input placeholder='VALOR DE COMPRA EN DÓLARES' />
        </div>
        <div>
          <Input placeholder='DESCRIPCIÓN BREVE DE SU COMPRA' />
          <p className='text-sm text-gray-500 mt-1'>
            Ropa, Zapatos, Electronicos, etc.
          </p>
        </div>
        <div>
          <Label className='font-semibold'>SUBIR TU FACTURA</Label>
          <p className='text-sm text-gray-500 mb-2'>
            Máximo 1 Factura Por PRE ALERTA - Archivos JPG o PDF Máximo 2
            Megabytes
          </p>
          <ul className='list-disc pl-5 text-sm text-gray-600 mb-2'>
            <li>Solo 1 Número de Tracking por PRE ALERTA</li>
            <li>
              No. de Tracking debe ser válido - ( No lo confundas con No. de
              Orden o Item Number )
            </li>
            <li>
              Factura debe contener: Descripción de Productos, No. de Orden,
              Fecha Emisión, Información Personal
            </li>
            <li>
              Factura debe ser de compra reciente (SOLO SE ACEPTAN pre Alertas
              de compras recientes)
            </li>
          </ul>

          <label htmlFor='licenseFile' className='relative cursor-pointer'>
            <div className='flex flex-col items-center justify-center border border-dashed border-gray-300 rounded-[12px] p-4 bg-white h-22'>
              <div className='flex flex-col items-center gap-2.5'>
                <Upload className='w-6 h-6' />
                <span className='text-sm text-gray-500'>
                  Haz clic o arrastra un archivo a este área para subirlo.
                </span>
              </div>
              <Input
                type='file'
                className='hidden'
                id='licenseFile'
                onChange={handleFileChange}
              />
            </div>
          </label>
          {file && (
            <div className='mt-2'>
              <img src={file} alt='Preview' className='max-w-52 h-auto' />
            </div>
          )}
        </div>
        <div>
          <div className='flex items-center justify-start space-x-2'>
            <Captcha onChange={onChange} />
          </div>
        </div>
        <Button className='w-full bg-green-500 hover:bg-green-600 text-white'>
          ENVIAR LA PRE ALERTA
        </Button>
      </form>
    </div>
  );
}
