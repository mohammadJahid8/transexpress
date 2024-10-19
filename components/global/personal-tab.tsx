import React from 'react';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import ImageUpload from './upload';
import Captcha from './captcha';

const PersonalTab = () => {
  return (
    <form className='space-y-8'>
      <h1 className='text-xl font-semibold text-left'>
        Formulario Apertura CASILLERO PERSONAL
      </h1>
      <div className='flex flex-col gap-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <Input type='text' placeholder='NOMBRES' />
          <Input type='text' placeholder='APELLIDOS' />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <Input type='email' placeholder='EMAIL' />
          <Input type='tel' placeholder='TEL. MÓVIL' />
        </div>
        <Input type='password' placeholder='CONTRASEÑA' />
      </div>
      <div className='flex flex-col gap-4'>
        <h2 className='text-lg font-semibold text-left'>
          AGENCIA DONDE RECOGERÁS TUS PAQUETES{' '}
          <span className='text-red-500'>*</span>
        </h2>
        <Select>
          <SelectTrigger className=''>
            <SelectValue placeholder='SAN PEDRO SULA' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value='san-pedro-sula'>SAN PEDRO SULA</SelectItem>
              <SelectItem value='tegucigalpa'>TEGUCIGALPA</SelectItem>
              <SelectItem value='siguatepeque'>SIGUATEPEQUE</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <Input type='text' placeholder='No. DE CÉDULA' />
          <Input type='date' placeholder='FECHA NACIMIENTO' />
        </div>
        <Input type='text' placeholder='DIRECCIÓN' />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <Select>
            <SelectTrigger className=''>
              <SelectValue placeholder='DEPARTAMENTO' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>DEPARTAMENTO</SelectLabel>
                <SelectItem value='cortes'>CORTÉS</SelectItem>
                <SelectItem value='francisco-morazan'>
                  FRANCISCO MORAZÁN
                </SelectItem>
                <SelectItem value='atlantida'>ATLÁNTIDA</SelectItem>
                <SelectItem value='yoro'>YORO</SelectItem>
                <SelectItem value='colon'>COLÓN</SelectItem>
                <SelectItem value='gracias-a-dios'>GRACIAS A DIOS</SelectItem>
                <SelectItem value='olancho'>OLANCHO</SelectItem>
                <SelectItem value='santa-barbara'>SANTA BÁRBARA</SelectItem>
                <SelectItem value='comayagua'>COMAYAGUA</SelectItem>
                <SelectItem value='copan'>COPÁN</SelectItem>
                <SelectItem value='ocotepeque'>OCOTEPEQUE</SelectItem>
                <SelectItem value='intibuca'>INTIBUCÁ</SelectItem>
                <SelectItem value='lempira'>LEMPIRA</SelectItem>
                <SelectItem value='la-paz'>LA PAZ</SelectItem>
                <SelectItem value='valle'>VALLE</SelectItem>
                <SelectItem value='choluteca'>CHOLUTECA</SelectItem>
                <SelectItem value='el-paraiso'>EL PARAÍSO</SelectItem>
                <SelectItem value='islas-de-la-bahia'>
                  ISLAS DE LA BAHÍA
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className=''>
              <SelectValue placeholder='CIUDAD' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value='2276 - Atlántida'>
                  2276 - Atlántida
                </SelectItem>
                <SelectItem value='515 - Catacamas'>515 - Catacamas</SelectItem>
                <SelectItem value='507 - Choloma'>507 - Choloma</SelectItem>
                <SelectItem value='516 - Choluteca'>516 - Choluteca</SelectItem>
                <SelectItem value='513 - Comayagua'>513 - Comayagua</SelectItem>
                <SelectItem value='182 - Copayaguela'>
                  182 - Copayaguela
                </SelectItem>
                <SelectItem value='1877 - Copán Ruinas'>
                  1877 - Copán Ruinas
                </SelectItem>
                <SelectItem value='1295 - Cortés'>1295 - Cortés</SelectItem>
                <SelectItem value='516 - Danlí'>516 - Danlí</SelectItem>
                <SelectItem value='1284 - El Paraíso'>
                  1284 - El Paraíso
                </SelectItem>
                <SelectItem value='518 - El Progreso'>
                  518 - El Progreso
                </SelectItem>
                <SelectItem value='510 - Islas de La Bahía'>
                  510 - Islas de La Bahía
                </SelectItem>
                <SelectItem value='519 - Juticalpa'>519 - Juticalpa</SelectItem>
                <SelectItem value='225 - La Ceiba'>225 - La Ceiba</SelectItem>
                <SelectItem value='1304 - La Esperanza'>
                  1304 - La Esperanza
                </SelectItem>
                <SelectItem value='460 - La Lima'>460 - La Lima</SelectItem>
                <SelectItem value='509 - Olanchito'>509 - Olanchito</SelectItem>
                <SelectItem value='500 - Omoa'>500 - Omoa</SelectItem>
                <SelectItem value='2642 - Potrerillos'>
                  2642 - Potrerillos
                </SelectItem>
                <SelectItem value='2275 - Puerto Cortés'>
                  2275 - Puerto Cortés
                </SelectItem>
                <SelectItem value='75 - Roatán HN'>75 - Roatán HN</SelectItem>
                <SelectItem value='76 - San Pedro Sula'>
                  76 - San Pedro Sula
                </SelectItem>
                <SelectItem value='347 - Santa Bárbara'>
                  347 - Santa Bárbara
                </SelectItem>
                <SelectItem value='511 - San Rosa de Copán'>
                  511 - San Rosa de Copán
                </SelectItem>
                <SelectItem value='512 - Siguatepeque'>
                  512 - Siguatepeque
                </SelectItem>
                <SelectItem value='168 - Tegucigalpa'>
                  168 - Tegucigalpa
                </SelectItem>
                <SelectItem value='499 - Tela'>499 - Tela</SelectItem>
                <SelectItem value='1292 - Villanueva'>
                  1292 - Villanueva
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <h3 className='font-semibold text-left'>DATOS DEL EMPLEO O TRABAJO</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <Input type='text' placeholder='LUGAR DE TRABAJO' />
          <Input type='text' placeholder='CARGO' />
        </div>
        <Input type='tel' placeholder='TEL. TRABAJO' />
      </div>
      <div className='flex flex-col gap-4'>
        <h3 className='font-semibold text-left'>
          PERSONAS ADICIONALES DE CONTACTOS
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <Input type='text' placeholder='NOMBRE' />
          <Input type='tel' placeholder='TELÉFONO' />
          <Input type='email' placeholder='CORREO' />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <Input type='text' placeholder='NOMBRE' />
          <Input type='tel' placeholder='TELÉFONO' />
          <Input type='email' placeholder='CORREO' />
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center space-x-2'>
          <Checkbox id='terms' />
          <Label htmlFor='terms'>Acepto los términos y condiciones</Label>
        </div>

        <p className='text-sm text-gray-500'>
          ENVÍO DE REGISTRO. Acepto los términos y condiciones del contrato de
          Servicios de TransExpress para el servicio de Casillero Personal.
          Debes seleccionar botón aceptando los términos descritos. Términos y
          Condiciones
        </p>

        <ImageUpload description='Puedes subir hasta 2 archivos.' />

        <div className='flex flex-col gap-4'>
          <p className='text-sm text-gray-500'>
            <span className='font-semibold'>SUBIR DOCUMENTOS:</span> Cédula del
            Titular de la cuenta. Requerido Subir tu Documento de Identidad;
            CÉDULA ó LICENCIA CONDUCIR VIGENTE o PASAPORTE para Extranjeros.
            Máximo 2 Archivos en JPG o PDF – Máximo tamaño de archivo, 2
            Megabyte
          </p>
          <Captcha onChange={() => {}} />
        </div>
      </div>
      <Button
        type='submit'
        className='text-xs sm:text-sm w-full bg-green-500 text-white'
      >
        ENVIAR SOLICITUD DE CASILLERO PERSONAL
      </Button>
    </form>
  );
};

export default PersonalTab;
