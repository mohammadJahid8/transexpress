/* eslint-disable react/no-unescaped-entities */
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import Logo from './logo';

const Footer = () => {
  return (
    <footer className='bg-primary text-white'>
      <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
        <div className='flex flex-col md:flex-row items-start justify-between gap-6'>
          <div className='flex flex-col items-start'>
            <Logo url='/transexpress-white.svg' />
            <p className='mt-4 text-sm'>
              I don't know how to make money.
              <br />
              I only know how to make dreams
              <br />
              come true.
            </p>
          </div>

          <div className='flex flex-col md:flex-row gap-8'>
            <div>
              <h3 className='font-semibold mb-4'>Information</h3>
              <ul className='space-y-2 text-sm'>
                <li>
                  <a href='#' className='hover:underline'>
                    About Us
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className='font-semibold mb-4'>Help Link</h3>
              <ul className='space-y-2 text-sm'>
                <li>
                  <a href='#' className='hover:underline'>
                    Support
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className='font-semibold mb-4'>Contact Info</h3>
              <ul className='space-y-2 text-sm'>
                <li>Phone: +880 1234567890</li>
                <li>Email: info@example.com</li>
                <li>Web: www.example.com</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row items-center justify-between mt-8 pt-8 border-t border-white/20'>
          <span className='text-sm'>
            © 2024 Transexpress™. All Rights Reserved.
          </span>
          <ul className='flex gap-4 mt-4 md:mt-0'>
            <li>
              <a href='#' className='hover:text-gray-300'>
                <Facebook className='w-5 h-5' />
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-gray-300'>
                <Instagram className='w-5 h-5' />
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-gray-300'>
                <Linkedin className='w-5 h-5' />
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-gray-300'>
                <Youtube className='w-5 h-5' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
