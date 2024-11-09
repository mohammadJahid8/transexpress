import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Calculator = () => {
  const resumenItems = [
    { label: 'Flete', value: '0.00' },
    { label: 'Gasto Areoportuario', value: '0.00' },
    { label: 'Cobro por Transexpress', value: '0.00' },
    { label: 'ISV', value: '0.00' },
    { label: 'Impuesto Aduana', value: '0.00' },
    { label: 'Cobro Aduana', value: '0.00' },
  ];

  return (
    <>
      <div className='bg-[url("/calculator-bg.png")] bg-cover bg-center bg-no-repeat w-full h-64 flex items-center'>
        <div className='container mx-auto px-4 lg:px-32'>
          <h1 className='text-[#444444] text-[44px] font-bold'>CALCULADOR</h1>
          <p className='text-[#aaaaaa] text-[18px]'>
            Calcula aquí tus impuestos de importación
          </p>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-center items-center gap-8 p-4 md:p-8 mb-10'>
        <div className='bg-[#f1f1f1] shadow-md rounded-lg p-6 w-full md:w-[520px]'>
          <form className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-black'>
                Peso
              </label>
              <Input
                type='text'
                placeholder='Enter weight'
                className='mt-1 block w-full'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-black'>
                Valor
              </label>
              <Input
                type='text'
                placeholder='Enter value'
                className='mt-1 block w-full'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-black'>
                Ciudad
              </label>
              <Select>
                <SelectTrigger className=''>
                  <SelectValue placeholder='Select a city' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Ciudades</SelectLabel>
                    <SelectItem value='apple'>Option 1</SelectItem>
                    <SelectItem value='banana'>Option 2</SelectItem>
                    <SelectItem value='blueberry'>Option 3</SelectItem>
                    <SelectItem value='grapes'>Option 4</SelectItem>
                    <SelectItem value='pineapple'>Option 5</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className='block text-sm font-medium text-black'>
                Tipo de mercadería
              </label>
              <Select>
                <SelectTrigger className=''>
                  <SelectValue placeholder='Select a type' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Tipo de mercadería</SelectLabel>
                    <SelectItem value='apple'>Option 1</SelectItem>
                    <SelectItem value='banana'>Option 2</SelectItem>
                    <SelectItem value='blueberry'>Option 3</SelectItem>
                    <SelectItem value='grapes'>Option 4</SelectItem>
                    <SelectItem value='pineapple'>Option 5</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <Button type='submit' className='w-full mt-4'>
              Calculate
            </Button>
          </form>
        </div>
        <div className='bg-[#f1f1f1] shadow-md rounded-lg p-6 w-full md:w-80'>
          <h2 className='text-xl font-bold text-center text-black mb-4'>
            Resumen para cliente
          </h2>
          <ul className='space-y-2'>
            {resumenItems.map((item, index) => (
              <li
                key={index}
                className={`flex justify-between border-b text-black ${
                  index === 0 ? 'pt-0' : 'pt-4'
                }`}
              >
                <span>{item.label}</span>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Calculator;
