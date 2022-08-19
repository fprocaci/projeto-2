import { Element } from "react-scroll";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

function services() {
  return (
    <Element id="services" name="services">
      <div className="w-full my-40 h-auto flex flex-col justify-center items-center">
        <p className="text-sm uppercase text-gray-400">Minhas Skills</p>
        <h1 className="text-indigo-900 text-6xl font-bold text-center">
          Experiência
        </h1>
        {/* Primeira Linha */}
        <div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
          {/* Primeiro Bloco */}
          <div className="flex  flex-col justify-center items-center">
            <div className="flex justify-center items-center cursor-pointer">
              <SiJavascript className="w-10 h-10 bg-js-yellow text-gray-100 m-3 p-1 shadow-xl rounded-md" />
              <h2 className="text-xl text-indigo-600 font-semibold">
                JavaScript
              </h2>
            </div>
            <p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis aliquid fuga, asperiores voluptas expedita nulla.
            </p>
          </div>
          {/* Segundo bloco */}
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center cursor-pointer">
              <SiReact className="w-10 h-10 bg-rc-blue text-gray-100 m-3 p-1 shadow-xl rounded-md" />
              <h2 className="text-xl text-indigo-600 font-semibold">ReactJS</h2>
            </div>
            <p className="md:text-base text-gray-400 md:text-center sm:text-sm sm:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis aliquid fuga, asperiores voluptas expedita nulla.
            </p>
          </div>
        </div>
        {/* Segunda Linha */}
        <div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
          {/* Primeiro Bloco */}
          <div className="flex  flex-col justify-center items-center">
            <div className="flex justify-center items-center cursor-pointer">
              <SiNextdotjs className="w-10 h-10  text-gray-900 m-3 p-1 shadow-xl rounded-md" />
              <h2 className="text-xl text-indigo-600 font-semibold">NextJS</h2>
            </div>
            <p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis aliquid fuga, asperiores voluptas expedita nulla.
            </p>
          </div>
          {/* Segundo bloco */}
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center cursor-pointer">
              <SiTailwindcss className="w-10 h-10  text-tw-blue m-3 p-1 shadow-xl rounded-md" />
              <h2 className="text-xl text-indigo-600 font-semibold">
                Tailwind
              </h2>
            </div>
            <p className="md:text-base text-gray-400 md:text-center sm:text-sm sm:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis aliquid fuga, asperiores voluptas expedita nulla.
            </p>
          </div>
        </div>
        {/* Terceira Linha */}
        <div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
          {/* Primeiro Bloco */}
          <div className="flex  flex-col justify-center items-center">
            <div className="flex justify-center items-center cursor-pointer">
              <SiStyledcomponents className="w-10 h-10  text-sc-brow m-3 p-1 shadow-xl rounded-md" />
              <h2 className="text-xl text-indigo-600 font-semibold">
                Styled Components
              </h2>
            </div>
            <p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis aliquid fuga, asperiores voluptas expedita nulla.
            </p>
          </div>
          {/* Segundo bloco */}
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center cursor-pointer">
              <FaNodeJs className="w-10 h-10  text-nd-green m-3 p-1 shadow-xl rounded-md" />
              <h2 className="text-xl text-indigo-600 font-semibold">NodeJS</h2>
            </div>
            <p className="md:text-base text-gray-400 md:text-center sm:text-sm sm:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis aliquid fuga, asperiores voluptas expedita nulla.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default services;
