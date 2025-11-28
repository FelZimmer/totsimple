import { useEffect, useRef, useState } from "react";
import "./Contact.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import cont from "/public/images/img/Copilot_20251025_203840.png";
import contsis from "/public/images/img/SISTEMATOTEM.png";

export default function Contact() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <>
      <Header />
      <section ref={sectionRef} className={`contact ${visible ? "show" : ""}`}>
        <div className="contact-header">
          <img src={cont} alt="" />
          <div className="contact-text">
            <h1>Estamos Aqui para Ouvir Sua Voz</h1>
            <p>
              Se você está buscando soluções personalizadas ou quer entender melhor nossos serviços, envie sua mensagem.
            </p>
          </div>
          <img src={contsis} alt="" />

         
          <div className="custom-shape-divider-bottom-1759704000">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>

        <div className="contact-container">
          <div className="contact-box">
            <h1><b>Contate-se</b></h1>
            <p>Você tem alguma pergunta? Está procurando algo único? Quer saber mais?</p>

            <div className="contact-info">
              <p>
                📞 <strong>+55 (11) 87245-4712</strong>
              </p>
              <p>
                📧{" "}
                <a href="mailto:info@xtrahosting.com">Sac.totsimple@gmail.com</a>
              </p>
            </div>

            <form className="contact-form">
              <input type="text" placeholder="Nome" required />
              <input type="email" placeholder="Email" required />
              <textarea placeholder="Mensagem" required></textarea>
              <button type="submit">Enviar</button>
            </form>
          </div>

          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7313.667921866244!2d-46.621738856871765!3d-23.574406103077198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce597abf1a28ff%3A0x1b02a58f85e6395e!2zRklBUCAtIEFjbGltYcOnw6Nv!5e0!3m2!1spt-BR!2sbr!4v1759094211258!5m2!1spt-BR!2sbr"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
