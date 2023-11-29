import React from 'react';

const CTA = () => {
  return (
    <div className='bg-neutral-900'>
      <div className='mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8'>
        <h2 className='text-3xl font-bold tracking-tight text-purple-500 sm:text-4xl'>
          ¿Listo para recibir tus cursos?
          <br />
          <span className='text-white'>¡No pierdas más tiempo!</span>
        </h2>
        <div className='mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0'>
          <a
            href='#footer'
            className='rounded-md bg-Primary  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm bgHover-Primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            ¡Contactanos!
          </a>
          <a
            href='/cursos'
            className='text-sm font-semibold bg-slate-200 leading-6 text-purple-400 shadow-md rounded-md px-3.5 py-2.5'
          >
            Cursos
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTA;
