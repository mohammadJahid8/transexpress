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

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Logo from './logo';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  const menuItems = [
    {
      href: '/casillero',
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
      href: '/about-us',
      label: 'About Us',
      icon: <Info className='w-5 h-5' />,
    },
    { href: '/alerts', label: 'Alerts', icon: <Bell className='w-5 h-5' /> },
  ];

  return (
    <header
      className={cn(
        'w-full z-40 bg-white transition-all duration-500 ease-in-out sticky top-0 left-0 right-0 shadow-[0_0_10px_rgba(0,0,0,0.1)]'
      )}
    >
      <div className='w-full max-w-[1850px] mx-auto flex h-[90px] items-center px-4 md:px-6'>
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
            <div className='grid gap-6 py-6'>
              {menuItems.map((item, i) => (
                <div
                  key={i}
                  className={cn(
                    'flex items-center gap-2 text-sm',
                    pathname === item.href
                      ? 'text-white bg-primary rounded-md px-3 py-1.5'
                      : 'font-semibold'
                  )}
                >
                  {item.icon}
                  <Link href={item.href}>{item.label}</Link>
                </div>
              ))}
            </div>
          </SheetContent>
        </Sheet>

        <nav className='ml-auto hidden md:flex items-center gap-6 lg:gap-12'>
          {menuItems.map((item, i) => (
            <div
              key={i}
              className={cn(
                'flex items-center gap-2 text-xs lg:text-sm',
                pathname === item.href
                  ? 'text-white bg-primary rounded-full px-3 py-1.5'
                  : 'font-semibold'
              )}
            >
              {item.icon}
              <Link href={item.href}>{item.label}</Link>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
