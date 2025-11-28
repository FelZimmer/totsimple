import { useEffect, useRef, useState } from "react";
import "./Team.css";
import time from "/public/images/img/time.jpg";


export default function Team() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const teamMembers = [
  {
    name: "Erick Yu Xiang Li",
    role: "CFO - Chief Financial Officer",
    avatar: "erick.jpg",
    description: "O CFO é fundamental para moldar a estratégia financeira de longo prazo garantindo a solidez e o crescimento sustentável da empresa."
  },
  {
    name: "Felipe de Oliveira Zimmermann",
    role: "CTO - Chief Technology Officer ",
    avatar: "felipe.jpg",
    description: "O CTO lidera a visão tecnológica, impulsionando a inovação e garantindo que a infraestrutura e o produto se alinhem com os objetivos estratégicos de longo prazo da empresa."
  },
  {
    name: "Hugo Magri Mariutti",
    role: "CMO - Chief Marketing Officer",
    avatar: "hugo.jpg",
    description: "O CMO é essencial para definir a estratégia de marca, impulsionar o crescimento da receita e garantir uma experiência consistente e envolvente para o cliente em todos os canais."
  },
  {
    name: "Júlia Souza Lemos",
    role: "CEO - Chief Executive Officer",
    avatar: "julia.jpg",
    description: "A CEO é a principal responsável por definir a visão estratégica, cultivar a cultura organizacional e garantir o sucesso e a sustentabilidade de toda a companhia no mercado global."
  },
  {
    name: "Luiza Santillo Sales",
    role: "CDO - Chief Data Officer ",
    avatar: "luiza.jpg",
    description: "O CDO é o arquiteto da estratégia de dados, garantindo a governança, a qualidade e a exploração inteligente das informações para impulsionar decisões e gerar valor de negócio."
  },
  {
    name: "Matheus Lopes Lima",
    role: "CTO - Chief Technology Officer",
    avatar: "lopes.jpg",
    description: "O CTO Front-end é o guardião da experiência do usuário, definindo a arquitetura de interface e as tecnologias que garantem performance, usabilidade e inovação visual no produto final."
  }
];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paragraphTransition, setParagraphTransition] = useState(false);

  const handlePrev = () => {
    setParagraphTransition(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
      setParagraphTransition(false);
    }, 200);
  };
  const handleNext = () => {
  setParagraphTransition(true);
  setTimeout(() => {
    setCurrentIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
    setParagraphTransition(false);
  }, 200);
};


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  return (
    <section className="team" ref={sectionRef}>
      <div className={`team-text fade-left ${isVisible ? "visible" : ""}`}>
 
 <div className="team-heading">
  <h2 className="Tot">O time do <b><span>Tot</span>Simple</b></h2>
  <p
    className={paragraphTransition ? "paragraph-transition" : ""}
    style={{ transition: 'opacity 0.3s', opacity: paragraphTransition ? 0 : 1 }}
  >
    "{teamMembers[currentIndex].description}"
  </p>
</div>

  <div className="employee">
    <div className="avatar">
  <img
    src={`/images/team/${teamMembers[currentIndex].avatar}`}
    alt={`Foto de ${teamMembers[currentIndex].name}`}
    className="avatar-img"
  />
</div>
    <div>
      <strong>{teamMembers[currentIndex].name}</strong>
      <p>{teamMembers[currentIndex].role}</p>
    </div>
    <button className="btn-arrow" onClick={handleNext}>→</button>

  </div>

  <div style={{ marginTop: '10px', fontSize: '0.9em' }}>
    {currentIndex + 1} / {teamMembers.length}
  </div>
</div>


      <div className={`team-images fade-right ${isVisible ? "visible" : ""}`}>
        <img src={time} className="team-photo" />
        
      </div>


      
    </section>
  );
}
