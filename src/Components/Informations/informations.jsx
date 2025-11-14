import React, { useRef, useEffect, useState } from "react";
import "./informations.css"; 
import { FaWater, FaShower, FaSoap, FaTint } from "react-icons/fa";
import { RiFileList3Line } from 'react-icons/ri';
import { LuComputer } from 'react-icons/lu';
import { LiaPeopleCarrySolid } from 'react-icons/lia';
import { RiMentalHealthLine } from 'react-icons/ri';
import { BiTimer } from 'react-icons/bi';
import { MdOutlineMoodBad } from 'react-icons/md';

const Informations = () => {
  const textRef = useRef(null);
  const circlesRef = useRef([]);
  const [isTextVisible, setTextVisible] = useState(false);
  const [visibleCircles, setVisibleCircles] = useState([false, false, false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTextVisible(true);
      },
      { threshold: 0.3 }
    );

    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  useEffect(() => {
    const observers = circlesRef.current.map((circle, index) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCircles((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        },
        { threshold: 0.3 }
      );
      if (circle) obs.observe(circle);
      return obs;
    });

    return () => observers.forEach((obs, i) => circlesRef.current[i] && obs.unobserve(circlesRef.current[i]));
  }, []);

  const icons = [<BiTimer />, <MdOutlineMoodBad />, <LiaPeopleCarrySolid />, <RiMentalHealthLine />];

  return (
    <section className="information-container">
      <div className="custom-shape-divider-top-1759712501">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
        </svg>
      </div>

      <div className={`information-card ${isTextVisible ? "fade-in" : ""}`} ref={textRef}>
        <h2>Desafios</h2>
        <p>
          
          Entre os principais problemas estão as filas longas, a sobrecarga nos funcionários e o tempo de espera elevado que recebeu nota 7,3 em desempenho considerado crítico segundo a pesquisa feita pela Decomposer. 
          Esses fatores não só prejudicam a experiência do consumidor, como também aumentam o estresse e a pressão sobre os colaboradores da drogaria.
        </p>
        <div className="circles-container">
          {icons.map((Icon, index) => (
            <div
              key={index}
              className={`circle ${visibleCircles[index] ? "fade-in-up" : ""}`}
              ref={(el) => (circlesRef.current[index] = el)}
            >
              <span>{Icon}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Informations;
