import {
  LockClosedIcon,
  AcademicCapIcon,
  CheckBadgeIcon,
  FingerPrintIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Proteccion garantizada',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget arcu dictum varius duis at consectetur lorem donec. Egestas sed tempus urna et pharetra pharetra massa.',
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: 'Enseñanzas Privadas',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget arcu dictum varius duis at consectetur lorem donec. Egestas sed tempus urna et pharetra pharetra massa.',
    href: '#',
    icon: AcademicCapIcon,
  },
  {
    name: 'Conocimiento Internacional',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis lectus nulla at volutpat diam. Diam quam nulla porttitor massa. Lorem ipsum dolor sit amet consectetur',
    href: '#',
    icon: FingerPrintIcon,
  },
  {
    name: 'Confianza y seguridad',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis lectus nulla at volutpat diam. Diam quam nulla porttitor massa. Lorem ipsum dolor sit amet consectetur',
    href: '#',
    icon: CheckBadgeIcon,
  },
];

export default function Services() {
  return (
    <div className='bg-primary py-24 sm:py-32' id='Services'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-base font-semibold leading-7 text-purple-700'>
            Beneficios
          </h2>
          <p className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            Lo que nos diferencia
          </p>
          <p className='mt-6 text-lg leading-8 text-gray-300'>
            <span className='3'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              amet aperiam eaque eius excepturi facilis iusto laudantium natus
              quisquam? Cumque ducimus id incidunt, natus nobis quia quibusdam!
              Aspernatur, ducimus, esse!
            </span>
          </p>
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4'>
            {features.map((feature) => (
              <div key={feature.name} className='flex flex-col'>
                <dt className='text-base font-semibold leading-7 text-white'>
                  <div className='mb-6 flex h-20 w-20 items-center justify-center rounded-lg bg-Primary'>
                    <feature.icon
                      className='h-12 w-12 text-white'
                      aria-hidden='true'
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className='mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300'>
                  <p className='flex-auto'>{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
