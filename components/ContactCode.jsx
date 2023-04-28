import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'zoeguzman.portfolio',
    href: 'https://zoeguzmanportfolio.vercel.app/',
  },
  {
    social: 'email',
    link: 'zoeguzman.ok@gmail.com',
    href: 'mailto:zoeguzman.ok@gmail.com',
  },
  {
    social: 'github',
    link: 'ZoeG00',
    href: 'https://github.com/ZoeG00',
  },
  {
    social: 'linkedin',
    link: 'ZoeGuzman',
    href: 'https://www.linkedin.com/in/zoeg00/',
  },
  {
    social: 'instagram',
    link: 'zoeguzmann',
    href: 'https://www.instagram.com/zoeguzmann',
  },
  {
    social: 'discord',
    link: 'ZoeG#9921',
    href: 'https://www.discord.com/',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
