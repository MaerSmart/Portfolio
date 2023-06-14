import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-slate-900 from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Maheritianabe</h3>
        <p className="text-lg font-normal text-gray-400">
           Frontend Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Développeur web polyvalent, je suis également compétent dans la mise en place et la gestion de bases de données. J'ai une solide connaissance des principes de sécurité et de performance, et je m'assure que mes sites web sont optimisés pour offrir une vitesse de chargement rapide et une sécurité renforcée.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+261 32 89 118 34</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">maheryprince@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Trouvez moi sur :</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft