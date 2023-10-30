import Image from 'next/image';
import Hero from './Components/Hero';
import styles from '../styles/Home.module.css';
export default function Home() {
  return (
    <div className={`${styles.Banner}`}>
      <Hero />
    </div>
  );
}
