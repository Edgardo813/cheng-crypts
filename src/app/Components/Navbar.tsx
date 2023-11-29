import Link from 'next/link';
import React from 'react';

const navigation = [
  {
    name: 'Quienes somos',
    href: '#About',
  },
  { name: 'Beneficios', href: '#Services' },
  { name: 'Cursos', href: '/cursos' },
];

const Navbar = () => {
  return (
    <div>
      <header className='absolute inset-x-0 top-0 z-50 bg'>
        <div className='mx-auto max-w-7xl'>
          <div className='px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0'>
            <nav
              className='flex items-center justify-between lg:justify-start'
              aria-label='Global'
            >
              <a href='/' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Your Company</span>
                <img
                  alt='Your Company'
                  className='h-16 w-auto'
                  src='/images/logo.png'
                />
              </a>

              <div className='hidden lg:ml-12 lg:flex lg:gap-x-14'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='text-sm font-semibold leading-6 text-slate-300'
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
