import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Dévellopeur Fronted", "Technicien polyvalent", "UI/UX Designer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 1000,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">Bienvenu sur ma page! </h4>
        <h1 className="text-4xl font-bold text-white">
        Bonjour, Je suis : <span className="text-designColor capitalize">Maheritianabe Prince Andréas</span>
        </h1>
        <h2 className="text-2xl font-bold text-white">
          un : <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Jeune technicien supérieur passionné et curieux 
de nouvelles technologies et de l’électronique, 
capables de réaliser des projets dans les délais 
prévus et prêt à affronter de nouveaux 
challenges en contribuant efficacement.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner