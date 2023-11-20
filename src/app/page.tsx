import Image from 'next/image';
import Hero from './Components/Hero';
import styles from '../styles/Home.module.css';
import About from './Components/About';
import Cardsection from './Components/Cardsection';
import Services from './Components/Services';
export default function Home() {
  return (
    <div>
      <div className={`${styles.Banner}`}>
        <Hero />
      </div>
      <About />
      <Cardsection />
      <Services />
    </div>
  );
}
