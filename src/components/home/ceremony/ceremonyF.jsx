import React from "react";
import Heading from "../../common/Heading";

import "./ceremony.css";
import image from "./p-3.png";





const ceremonyF = () => {
  return (
    <>
      <section className="awards padding">
        <div className="container">
          <div className="flex">
            <div className="message">
              <Heading title="Jésus parmis nous" subtitle="Viens expériencer" />
              <p>
              Notre équipe dévouée de chefs de culte, de musiciens et de bénévoles s'est préparée avec diligence pour vous offrir une expérience inoubliable. Dès que vous franchissez nos portes, vous serez accueillis avec chaleur et hospitalité, ressentant instantanément un sentiment d'appartenance au sein de notre communauté dynamique. Tous les dimanches à 10h.
              </p>
            </div>
            <div className="image-container">
              <img src={image} alt="Image description" className="image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ceremonyF;