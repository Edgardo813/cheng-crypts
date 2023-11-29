import Image from 'next/image';
import Hero from './Components/Hero';
import About from './Components/About';

import Services from './Components/Services';
import CTA from './Components/CTA';
export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <CTA />
      <Services />
    </div>
  );
}
