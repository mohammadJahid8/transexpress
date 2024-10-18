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
    <div className='flex flex-col md:flex-row justify-center items-center min-h-screen gap-8 p-4 md:p-8'>
      <div className='bg-white shadow-md rounded-lg p-6 w-full md:w-96'>
        <h2 className='text-xl font-bold text-center text-primary mb-4'>
          Calculator
        </h2>
        <form className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Peso
            </label>
            <Input
              type='text'
              placeholder='Enter weight'
              className='mt-1 block w-full'
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Valor
            </label>
            <Input
              type='text'
              placeholder='Enter value'
              className='mt-1 block w-full'
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Ciudad
            </label>
            <Select>
              <SelectTrigger className=''>
                <SelectValue placeholder='Select a fruit' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value='apple'>Apple</SelectItem>
                  <SelectItem value='banana'>Banana</SelectItem>
                  <SelectItem value='blueberry'>Blueberry</SelectItem>
                  <SelectItem value='grapes'>Grapes</SelectItem>
                  <SelectItem value='pineapple'>Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Tipo de mercadería
            </label>
            <Select>
              <SelectTrigger className=''>
                <SelectValue placeholder='Select a fruit' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value='apple'>Apple</SelectItem>
                  <SelectItem value='banana'>Banana</SelectItem>
                  <SelectItem value='blueberry'>Blueberry</SelectItem>
                  <SelectItem value='grapes'>Grapes</SelectItem>
                  <SelectItem value='pineapple'>Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Button type='submit' className='w-full mt-4 bg-primary text-white'>
            Calculate
          </Button>
        </form>
      </div>
      <div className='bg-white shadow-md rounded-lg p-6 w-full md:w-80'>
        <h2 className='text-xl font-bold text-center text-primary mb-4'>
          Resumen para cliente
        </h2>
        <ul className='space-y-2'>
          {resumenItems.map((item, index) => (
            <li
              key={index}
              className={`flex justify-between border-b ${
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
  );
};

export default Calculator;
