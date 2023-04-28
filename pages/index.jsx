import Link from 'next/link';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>I BUILD</h1>
          <h1>APPS &</h1>
           <h1>WEBSITES</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Zoe Guzman</h1>
            <h6 className={styles.bio}>Frontend Developer</h6>
            <Link href="/projects">
              <button className={styles.button}>View Work</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contact Me</button>
            </Link>
            <Link href="https://drive.google.com/file/d/17O-oOpHlv--Iz1xj2TmwLI0Iuvx-xRV0/view?usp=sharing">
              <a target="_blank" ><button className={styles.button}>Download Resume</button></a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
