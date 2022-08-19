import react from "react";
import Image from "next/image";
import avatarImage from "../public/img/avatar.png";
import { Element } from "react-scroll";
function homePage() {
  return (
    <Element id="home" name="home">
      <div>
        <div className="flex justify-between text-center md:mx-20 md:pt-32">
          <div className="w-3/4 h-96 rounded-full relative px-10 hidden md:block">
            <Image
              src={avatarImage}
              alt="avatarImage"
              layout="fixed"
              objectFit="cover"
              className="rounded-full cursor-pointer hidden md:block"
            />
          </div>
          <div className="flex flex-col md:ml-20 mx-10 mt-10">
            <h1 className="font-bold text-7xl text-left mb-5">
              Olá , eu sou <span className="text-indigo-900">Fabrício</span>
            </h1>
            <p className="text-left font-normal mb-5 flex-wrap">
              Tenho 42 anos, desenvolvedor & entusiasta por empreendedorismo e
              criação de produtos inovadores. Estudante de Analise e
              Desenvolvimento de Sistemas pela Univesidade Estácio de Sá.
            </p>
            <a
              href="#"
              className="font-semibold text-white md:mt-10 mt-5 pt-5 bg-indigo-900 rounded-md w-60 h-16 text-lg hover:bg-black"
            >
              Veja meu Portifólio
            </a>
          </div>
        </div>
      </div>
    </Element>
  );
}
export default homePage;
