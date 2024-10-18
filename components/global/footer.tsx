import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import Logo from './logo';

const Footer = () => {
  return (
    <footer className='bg-gray-300'>
      <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
          <Logo />

          <ul className='flex flex-wrap items-center text-base font-medium text-gray-500'>
            <li>
              <a href='#' className='hover:underline me-4 md:me-6'>
                About
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline me-4 md:me-6'>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline me-4 md:me-6'>
                Licensing
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Contact
              </a>
            </li>
          </ul>
          <ul className='flex gap-3 text-base font-medium text-gray-500'>
            <li>
              <a href='#' className='hover:underline'>
                <Instagram className='w-4 h-4' />
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                <Facebook className='w-4 h-4' />
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                <Linkedin className='w-4 h-4' />
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                <Youtube className='w-4 h-4' />
              </a>
            </li>
          </ul>
        </div>

        <span className='block text-sm text-gray-500 text-center mt-8'>
          © 2024{' '}
          <a href='#' className='hover:underline'>
            Transexpress™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
