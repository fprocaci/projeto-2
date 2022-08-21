import { AiTwotoneHeart } from "react-icons/ai";
import { Link } from "react-scroll";

export default function footer() {
  return (
    <div className="w-full h-96 bg-gray-800 flex flex-col justify-end">
      <div className="w-full flex px-10">
        <div className="w-6/12 h-80 px-3 py-5 hidden lg:block">
          <h4 className="text-gray-400">SOBRE</h4>
          <p className="text-gray-400 text-justify">
            Este site foi desenvolvido por mim para apresentação do meu
            portifólio
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

      <div className="w-full h-16 flex justify-center items-center bg-gray-900 ">
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
