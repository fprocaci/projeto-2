import { AiTwotoneHeart } from "react-icons/ai";
export default function footer() {
  return (
    <div className="w-full h-96 bg-gray-800 flex flex-col justify-end">
      <div className="w-full flex">
        <div className="w-4/12 h-80 flex justify-center items-center bg-orange-500">
          Esquerda
        </div>
        <div className="w-4/12 h-80 flex justify-center items-center bg-orange-500">
          Esquerda
        </div>
        <div className="w-4/12 h-80 flex justify-center items-center bg-orange-500">
          Esquerda
        </div>
      </div>

      <div className="w-full h-16 flex justify-center items-center bg-gray-900">
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
