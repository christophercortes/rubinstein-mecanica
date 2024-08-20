import Image from "next/image";
import CarTable from "../ui/table";
import { carBrand } from "../lib/carbrand-data";

export default function TallerMultimarcas() {
  return (
    <main className="mt-20 pt-10 bg-gray-50">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Taller Multimarca en San Antonio
        </h1>
      </div>
      
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700">
          Nuestros Colaboradores
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 p-4">
        <div className="flex flex-col items-center justify-center bg-white p-2 shadow-md rounded-lg">
          <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 relative">
            <Image
              src="/logos/colaboradores/def2.png"
              alt="Rectomotors"
              layout="fill"
              objectFit="contain"
              className="rounded"
              loading="lazy"
            />
          </div>
          <p className="mt-2 text-center text-sm md:text-base lg:text-lg font-medium">Rectomotors</p>
        </div>

        <div className="flex flex-col items-center justify-center bg-white p-2 shadow-md rounded-lg">
          <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 relative">
            <Image
              src="/logos/colaboradores/controlplaga.png"
              alt="Control Plaga San Antonio"
              layout="fill"
              objectFit="contain"
              className="rounded"
              loading="lazy"
            />
          </div>
          <p className="mt-2 text-center text-sm md:text-base lg:text-lg font-medium">Control Plaga San Antonio</p>
        </div>

        <div className="flex flex-col items-center justify-center bg-white p-2 shadow-md rounded-lg">
          <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 relative">
            <Image
              src="/logos/colaboradores/tallerpintura.png"
              alt="Taller de pintura FF"
              layout="fill"
              objectFit="contain"
              className="rounded"
              loading="lazy"
            />
          </div>
          <p className="mt-2 text-center text-sm md:text-base lg:text-lg font-medium">Taller de pintura FF</p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 mb-8">
          Marcas con las que Trabajamos
        </h2>
        <div className="max-w-4xl mx-auto">
          <CarTable carBrand={carBrand} />
        </div>
      </div>
    </main>
  );
}
