import "./contact.css";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineGoogle } from "react-icons/ai";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8qjhmbs', 'template_bw4pm4v', form.current, 'E9r4FHw6IVcoAgz5y')

    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>Contáctame</h2>

      <div className="container contact_container">
        <div className="contact_options">
        
          <article className="contact_option">
            <AiOutlineWhatsApp className="contact_option-icon"/>
            <h5>+54-2664-952528</h5>
            <a href="https://api.whatsapp.com/send?phone=542664952528" target="_blank">Envia Mensaje</a>
          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>

          <input type="text" name="name" placeholder="Nombre Completo" required/>
          <input type="email" name="email" placeholder="Correo" required/>
          <textarea name="message" rows="7" placeholder="Mensaje" required></textarea>
          <button type='submit' className="boton_personalizado">Enviar</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;