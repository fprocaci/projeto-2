import { Link } from "react-scroll";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-800">
      <div className="w-10/12 lg:w-8/12 bg-gray-800">
        <div className="w-full lg:grid lg:grid-cols-4 py-5 sm:py-10">
          <div className="w-full lg:col-span-2 flex flex-col justify-start items-start px-2">
            <h4 className="text-gray-400">SOBRE</h4>
            <p className="text-gray-400 text-justify">
              Este site é uma One-Page e foi desenvolvido por mim,
              <span className="text-gray-100">
                {" "}
                Fabrício Procaci Santiago,
              </span>{" "}
              onde apresento as stacks nas quais trabalho atualmente. Uma sessão
              de portifólio com alguns trabalhos atualizados com essas stacks;
              uma sessão apresentando alguns de meus clientes; um formulário de
              contato desenvolvido com NodeJS para que os recrutadores tenham
              mais uma possibilidade de entrarem em contato comigo e um footer
              apresentando uma síntese do que é este site.
            </p>
          </div>
          <div className="w-full lg:flex lg:flex-col justify-start items-start px-10 hidden">
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
          <div className="w-full lg:flex lg:flex-col justify-start items-start px-10 hidden">
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
      </div>
      <div className="w-full h-16 flex justify-center items-center bg-gray-900">
        <span className="text-gray-100 text-lg">Desenvolvido por FPS DEV</span>
      </div>
    </div>
  );
}
