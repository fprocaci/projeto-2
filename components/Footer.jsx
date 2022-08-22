export default function Footer() {
  return (
    <div className="grid grid-cols-1 grid-row-2 bg-gray-800">
      <div className="w-full h-80 flex">
        <div className="w-6/12 flex justify-center items-center bg-orange-400">
          <h4 className="text-gray-100">LOGO</h4>
        </div>
        <div className="w-3/12 flex justify-center items-center bg-orange-500">
          <h4 className="text-gray-100">Categorias</h4>
        </div>
        <div className="w-3/12 flex justify-center items-center bg-orange-600">
          <h4 className="text-gray-100">LINKS</h4>
        </div>
      </div>
      <div className="w-full h-16 flex justify-center items-center bg-gray-900">
        <span className="text-gray-100 text-lg">Developer by FPS</span>
      </div>
    </div>
  );
}
