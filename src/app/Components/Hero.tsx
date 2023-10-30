import React from 'react';
import styles from '../../styles/Home.module.css';

const Hero = () => {
  return (
    <section className={`${styles.hero}`}>
      <h1
        className={` tracking-[0.3em] mt-0 lg:mt-10 text-lg min-h-[370px]:text-2xl sm:text-4xl md:text-5xl uppercase text-[#6213c2] ${styles.DropShadow}  text-center mb-2 sm:mb-4`}
      >
        ChengCriptados
      </h1>

      <h3
        className={`text-center text-[13px] min-[370px]:text-xl sm:text-2xl md:text-3xl uppercase text-white ${styles.DropShadow}`}
      >
        Lorem ipsum dolor sit.
      </h3>

      <div className='mx-[40px] mt-3 mb-0 md:mx-[190px] md:mt-4  text-center text-white font-light '>
        <p className='text-[14px] md:text-lg lg:text-xl '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem consequuntur recusandae quidem aliquid quis, error,
          sapiente culpa sed id quae facere aperiam vitae laborum beatae quia
          delectus, ut ipsum voluptatem itaque animi.
        </p>
      </div>

      <div className='border-[1px] pl-1 pr-1 pb-[0.20rem]  md:pt-[0.60rem] md:pb-[0.60rem] md:pl-[0.30rem] md:pr-[0.30rem] md:border-[1px] border-[#a8a8a8]  rounded-full mt-[25px] sm:mt-[35px] cursor-pointer'>
        <a
          className={` cursor-pointer bg-[#6213c2] text-[11px] p-4 pt-1 pb-1 md:text-[16px] text-white md:p-9 md:pt-2 md:pb-2  rounded-full font-normal uppercase `}
        >
          Descargar
        </a>
      </div>
    </section>
  );
};

export default Hero;
