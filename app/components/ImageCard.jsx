
import Image from "next/image";


export default function ImageCard({ imageSrc, title, description , category }) {
  return (
    <div className="bg-green-600 rounded-2xl overflow-hidden shadow-lg flex md:flex-row flex-col border-6 border-green-600">
      <div className="md:w-1/2">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="md:w-1/2 p-8 text-white flex flex-col justify-between">
        <div>
          <h2 className="text-xl  mb-2">{title}</h2>
          <p className="text-gray-300  font-lighter text-sm mb-4">{description}</p>
           <button className="px-2  border my-2 hover:text-green-600 cursor-pointer hover:bg-white border-white rounded-full">{category}</button>
         
        </div>
      </div>
    </div>
  );
}
