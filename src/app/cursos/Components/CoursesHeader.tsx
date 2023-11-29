import React from 'react';

const CoursesHeader = () => {
  return (
    <div className='overflow-hidden bg-black py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
          <div className='lg:ml-auto lg:pl-4 lg:pt-4'>
            <div className='lg:max-w-lg flex flex-col'>
              <h2 className='text-base font-semibold leading-7 text-[#FF5900]'>
                Listo para ver tus cursos?
              </h2>
              <p className='mt-2 text-3xl font-bold tracking-tight text-neutral-400 sm:text-4xl'>
                Preparate, proximamente aterrizaran.
              </p>
              <p className='mt-6 text-lg leading-8 text-slate-400 text-justify'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ex
                officia saepe dolorum in sapiente exercitationem totam laborum
                dignissimos ipsam, error qui voluptatibus adipisci, minima
                dolore fugit et quo sit. Vero provident maiores non, quisquam
                est rerum laborum eum natus omnis neque quas tempore hic
                suscipit. Velit nulla enim illo. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Excepturi dolorem officia tempore
                vel odit totam vero quod doloremque, optio ipsam eius adipisci
                cupiditate. Aut temporibus, esse ipsa amet reiciendis nesciunt.
              </p>

              <button className='w-32 lg:w-60 self-center  rounded-md bg-Primary px-8 py-3 mt-6 text-sm font-semibold text-white shadow-sm bgHover-Primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"'>
                Reproducir
              </button>
            </div>
          </div>
          <div className='flex items-start justify-end lg:order-first'>
            <img
              src='/images/courses1.jpg'
              alt='Product screenshot'
              className='w-[30rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]'
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesHeader;
