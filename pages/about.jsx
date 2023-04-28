import styles from '../styles/HomePage.module.css';

const AboutPage = () => {
  return (
    <>
      <h3>About Me</h3>
      <img src="https://i.ibb.co/nsxzYLX/3324343.png" alt="zoe" className={styles.perfil}/>
      <p>Mi nombre es Zoe tengo 22 años y soy de San Martín, Mendoza.</p>
      <p>Tengo experiencia laboral en el área de comercio pero mi interés<br></br> está en el desarollo de software.</p>
      <p>Me encuentro desarrollando aplicaciones mobile y sitios web.</p>
      <p>Mi objetivo es trabajar en una empresa de Software dedicada a brindar <br></br>soluciones o en una empresa de gran trayectoria.</p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
