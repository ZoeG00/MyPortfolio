import { useState } from 'react';
import ContactCode from '../components/ContactCode';
import styles from '../styles/ContactPage.module.css';

const ContactPage =() => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Enviar los datos del formulario al servidor
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({ name, email, message }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      alert('El mensaje se ha enviado correctamente');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      alert('Ocurrió un error al enviar el mensaje');
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.heading}>Social Networks</h3>
        <ContactCode />
      </div>
      <div>
        <h3 className={styles.heading}>Send me a message</h3>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.flex}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Contact' },
  };
}

export default ContactPage;
