import { AiTwotoneHeart } from "react-icons/ai";
import { Link } from "react-scroll";
export default function footer() {
  return (
    <div className="w-full h-96 bg-gray-800 flex flex-col justify-end">
      <div className="w-full flex px-10">
        <div className="w-6/12 h-80 flex flex-col justify-start items-start px-3 py-5">
          <h4 className="text-gray-400">SOBRE</h4>
          <p className="text-gray-400 text-justify">
            Estou em transição de carreira de suporte técnico e infraestrutura
            TI para desenvolvimento e devido a este meu interesse, comecei a
            estudar por conta própria. Concluí o bootcamp oferecido na
            plataforma da Digital Innovation One, onde estudei programação C# no
            dotnet. Agora estou focado nas tecnologias front-end ReactJS e
            NextJS. Também estou estudando NodeJS para back-end, desenvolvimento
            de API em NodeJS. Ainda estou no começo, mas pretendo me aperfeiçoar
            e me tornar um desenvolvedor completo e bem estruturado, poder
            desenvolver aplicações e criar soluções inteligentes que ajudem não
            só particulares e empresas. Por esse motivo, gostaria de uma
            oportunidade de trabalhar diretamente com essas tecnologias pois
            facilitaria meu aprendizado e minha evolução como programador.
            Sempre tentando encontrar novos desafios e aprender coisas novas.
          </p>
        </div>
        <div className="w-3/12 h-80 flex flex-col justify-start items-start px-3 py-5">
          <h4 className="text-gray-400">CATEGORIAS</h4>
          <ul className="text-gray-400">
            <li className="">JavaScript</li>
            <li className="">ReactJS</li>
            <li className="">NextJS</li>
            <li className="">Tailwind</li>
            <li className="">Styled Components</li>
            <li className="">NodeJS</li>
          </ul>
        </div>
        <div className="w-3/12 h-80 flex flex-col justify-start items-start  px-3 py-5">
          <h4 className="text-gray-400">LINKS</h4>
          <ul className="">
            <li className="">
              <Link
                activeClass="Home"
                to="home"
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer hover:text-gray-100 text-gray-400 text-md"
              >
                Home
              </Link>
            </li>
            <li className="">
              <Link
                activeClass="services"
                to="services"
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer hover:text-gray-100 text-gray-400"
              >
                Serviços
              </Link>
            </li>
            <li className="">
              <Link
                activeClass="work"
                to="work"
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer hover:text-gray-100 text-gray-400"
              >
                Projetos
              </Link>
            </li>
            <li className="">
              <Link
                activeClass="clients"
                to="clients"
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer hover:text-gray-100 text-gray-400"
              >
                Clientes
              </Link>
            </li>
            <li className="">
              <Link
                activeClass="contacts"
                to="contacts"
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer hover:text-gray-100 text-gray-400"
              >
                Contatos
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full h-16 flex justify-center items-center bg-gray-900 px-10">
        <h1 className="text-xl text-blue-900 mr-2">Desenvolvidor com</h1>
        <AiTwotoneHeart className="text-red-600" />
        <h1 className="text-xl text-blue-900 ml-2">
          por
          <a
            href="#"
            className="cursor-pointer font-semibold text-indigo-900 hover:text-black"
          >
            <span> FPS DEV</span>
          </a>
        </h1>
      </div>
    </div>
  );
}
