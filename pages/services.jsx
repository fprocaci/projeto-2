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
      <div className="w-full py-16 my-16 h-auto flex flex-col justify-center items-center bg-gray-100">
        <p className="text-sm uppercase text-gray-400">Minhas Skills</p>
        <h1 className="text-indigo-900 text-6xl font-bold text-center">
          Experiência
        </h1>
        {/* Primeira Linha */}
        <div className="w-full md:w-8/12 flex flex-col justify-center items-center  sm:flex-row mx-40 gap-10 mt-20">
          {/* Primeiro Bloco */}
          <div className="w-10/12 sm:w-5/12 flex flex-col justify-center items-center rounded-md drop-shadow-md bg-white p-5">
            <div className="flex justify-center items-center cursor-pointer">
              <SiJavascript className="w-10 h-10 bg-gray-100 text-js-yellow m-3 p-1 shadow-xl rounded-md" />
              <h2 className="text-xl text-indigo-600 font-semibold">
                JavaScript
              </h2>
            </div>
            <p className="md:text-base text-gray-400 md:text-left sm:text-left sm:text-sm">
              JavaScript® (às vezes abreviado para JS) é uma linguagem leve,
              interpretada e baseada em objetos com funções de primeira classe,
              mais conhecida como a linguagem de script para páginas Web, mas
              usada também em vários outros ambientes sem browser. O JavaScript
              é uma linguagem baseada em protótipos, multi-paradigma e dinâmica,
              suportando estilos de orientação a objetos, imperativos e
              declarativos (como por exemplo a programação funcional).
            </p>
          </div>
          {/* Segundo bloco */}
          <div className="w-8/12 sm:w-5/12 h-auto flex flex-col justify-center items-center rounded-md drop-shadow-md bg-white p-5">
            <div className="flex justify-center items-center cursor-pointer">
              <SiReact className="w-10 h-10 bg-gray-100 text-rc-blue m-3 p-1 shadow-xl rounded-md" />
              <h2 className="text-xl text-indigo-600 font-semibold">ReactJS</h2>
            </div>
            <p className="md:text-base text-gray-400 md:text-left sm:text-sm sm:text-left">
              React faz com que a criação de UIs interativas seja uma tarefa
              fácil. Crie views simples para cada estado na sua aplicação, e o
              React irá atualizar e renderizar de forma eficiente apenas os
              componentes necessários na medida em que os dados mudam. Views
              declarativas fazem com que seu código seja mais previsível e
              simples de depurar.
            </p>
          </div>
        </div>
        {/* Segunda Linha */}
        <div className="w-8/12 flex justify-center items-start mx-40 gap-10 mt-20">
          {/* Primeiro Bloco */}
          <div className="w-5/12 flex flex-col justify-center items-center rounded-md drop-shadow-md bg-white p-5">
            <div className="flex justify-center items-center cursor-pointer">
              <SiNextdotjs className="w-10 h-10  text-gray-900 m-3 p-1 shadow-xl rounded-md" />
              <h2 className="text-xl text-indigo-600 font-semibold">NextJS</h2>
            </div>
            <p className="md:text-base text-gray-400 md:text-left sm:text-left sm:text-sm">
              O Next.js oferece a melhor experiência de desenvolvedor com todos
              os recursos necessários para produção: renderização híbrida
              estática e de servidor, suporte a TypeScript, agrupamento
              inteligente, pré-busca de rota e muito mais.
            </p>
          </div>
          {/* Segundo bloco */}
          <div className="w-5/12 flex flex-col justify-center items-center rounded-md drop-shadow-md bg-white p-5">
            <div className="flex justify-center items-center cursor-pointer">
              <SiTailwindcss className="w-10 h-10  text-tw-blue m-3 p-1 shadow-xl rounded-md" />
              <h2 className="text-xl text-indigo-600 font-semibold">
                Tailwind
              </h2>
            </div>
            <p className="md:text-base text-gray-400 md:text-left sm:text-sm sm:text-left">
              Um framework CSS de primeira utilidade com classes como flex,
              pt-4, text-center e rotate-90 que podem ser compostas para
              construir qualquer design, diretamente em sua marcação.
            </p>
          </div>
        </div>
        {/* Terceira Linha */}
        <div className="w-8/12 flex justify-center items-start mx-40 gap-10 mt-20">
          {/* Primeiro Bloco */}
          <div className="w-5/12 flex flex-col justify-center items-center rounded-md drop-shadow-md bg-white p-5">
            <div className="flex justify-center items-center cursor-pointer">
              <SiStyledcomponents className="w-10 h-10  text-sc-brow m-3 p-1 shadow-xl rounded-md" />
              <h2 className="text-xl text-indigo-600 font-semibold">
                Styled Components
              </h2>
            </div>
            <p className="md:text-base text-gray-400 md:text-left sm:text-left sm:text-sm">
              Styled-components permite que você escreva código CSS real para
              estilizar seus componentes. Ele também remove o mapeamento entre
              componentes e estilos – usar componentes como uma construção de
              estilo de baixo nível não poderia ser mais fácil!
            </p>
          </div>
          {/* Segundo bloco */}
          <div className="w-5/12 flex flex-col justify-center items-center rounded-md drop-shadow-md bg-white p-5">
            <div className="flex justify-center items-center cursor-pointer">
              <FaNodeJs className="w-10 h-10  text-nd-green m-3 p-1 shadow-xl rounded-md" />
              <h2 className="text-xl text-indigo-600 font-semibold">NodeJS</h2>
            </div>
            <p className="md:text-base text-gray-400 md:text-left sm:text-sm sm:text-left">
              Como um tempo de execução JavaScript assíncrono orientado a
              eventos, o Node.js foi projetado para criar aplicativos de rede
              escaláveis.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default services;
