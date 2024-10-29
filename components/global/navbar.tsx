'use client';
/* eslint-disable @next/next/no-img-element */
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Bell, BookOpen, Calculator, Info, MenuIcon, User } from 'lucide-react';

import { cn } from '@/lib/utils';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Logo from './logo';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  const menuItems = [
    {
      href: '/account',
      label: 'Account',
      icon: <User className='w-5 h-5' />,
    },
    {
      href: '/services',
      label: 'Services',
      icon: <BookOpen className='w-5 h-5' />,
    },
    {
      href: '/calculator',
      label: 'Calculator',
      icon: <Calculator className='w-5 h-5' />,
    },
    {
      href: '/about',
      label: 'About Us',
      icon: <Info className='w-5 h-5' />,
    },
    { href: '/alerts', label: 'Alerts', icon: <Bell className='w-5 h-5' /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'w-full z-40 bg-white transition-all duration-500 ease-in-out',
        scrolled ? 'sticky top-0 left-0 right-0 border-b border-gray-200' : ''
      )}
    >
      <div className='w-full flex h-[90px] items-center px-4 md:px-6 lg:px-10'>
        <Link href='/' className='flex mr-auto' prefetch={false}>
          <Logo />
        </Link>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant='ghost' size='icon' className='md:hidden'>
              <MenuIcon className='h-8 w-8 text-primary font-extrabold' />
            </Button>
          </SheetTrigger>
          <SheetContent
            side='left'
            className='max-w-[300px] border-none px-[15px]'
          >
            <SheetHeader className='mb-10'>
              <Logo />
            </SheetHeader>
            <div className='grid gap-4 py-6'>
              {menuItems.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-2 text-sm hover:bg-primary hover:text-white rounded-md px-3 py-1.5 transition-all duration-300',
                    pathname === item.href
                      ? 'text-white bg-primary'
                      : 'font-semibold'
                  )}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>

        <nav className='ml-auto hidden md:flex items-center gap-2 lg:gap-6'>
          {menuItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className={cn(
                'flex items-center gap-2 text-xs lg:text-sm hover:bg-primary hover:text-white rounded-full px-3 py-1.5 transition-all duration-300 cursor-pointer',
                pathname === item.href
                  ? 'text-white bg-primary'
                  : 'font-semibold'
              )}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
