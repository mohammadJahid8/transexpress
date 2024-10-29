'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Captcha from '@/components/global/captcha';
import ImageUpload from '@/components/global/upload';

export default function AlertPage() {
  // const [image, setImage] = useState(null);

  const onChange = () => {};

  return (
    <div className='w-full max-w-5xl mx-auto p-4 md:p-6 my-4 md:my-10 bg-[#d4d9ed] md:rounded-lg md:shadow'>
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

          <ImageUpload
          // setImage={setImage}
          />
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
