import { AiTwotoneHeart } from "react-icons/ai";
export default function footer() {
  return (
    <div className="w-full h-16 bg-gray-50 flex justify-center items-center">
      <h1 className="text-xl text-blue-900 mr-2">Desenvolvidor por</h1>
      <AiTwotoneHeart className="text-red-600" />
      <h1 className="text-xl text-blue-900 ml-2">
        Criado por
        <a
          href="#"
          className="cursor-pointer font-semibold text-indigo-900 hover:text-black"
        >
          <span> FPS DEV</span>
        </a>
      </h1>
    </div>
  );
}
