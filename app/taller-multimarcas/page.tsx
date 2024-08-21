import Image from "next/image";
import Link from "next/link";
import CarTable from "../ui/table";
import { carBrand } from "../lib/carbrand-data";

export default function TallerMultimarcas() {
  return (
    <main className="mt-20 pt-10 bg-gray-50">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          Taller Multimarca en San Antonio
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-600">
          Tu socio confiable para todas tus necesidades de reparación de automóviles.
        </p>
      </div>
      
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 mb-6">
          Nuestros Colaboradores
        </h2>
        <p className="text-base md:text-lg text-gray-600">
          Conoce a nuestros colaboradores que nos ayudan a ofrecerte el mejor servicio.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {[
          { src: "/logos/colaboradores/def2.png", alt: "Rectomotors", name: "Rectomotors" },
          { src: "/logos/colaboradores/controlplaga.png", alt: "Control Plaga San Antonio", name: "Control Plaga San Antonio" },
          { src: "/logos/colaboradores/tallerpintura.png", alt: "Taller de pintura FF", name: "Taller de pintura FF" }
        ].map((collaborator, index) => (
          <div key={index} className="flex flex-col items-center justify-center bg-white p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 relative">
              <Image
                src={collaborator.src}
                alt={collaborator.alt}
                layout="fill"
                objectFit="contain"
                className="rounded"
                loading="lazy"
              />
            </div>
            <p className="mt-2 text-center text-sm md:text-base lg:text-lg font-medium text-gray-800">
              {collaborator.name}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 mb-8">
          Marcas con las que Trabajamos
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-8">
          Descubre las marcas que confían en nuestro servicio.
        </p>
        <div className="max-w-4xl mx-auto">
          <CarTable carBrand={carBrand} />
        </div>
      </div>
       {/* WhatsApp Icon */}
      <div className="fixed bottom-4 right-4 z-50">
        <Link href="https://wa.me/56956608734"
          target="_blank"
          rel="nooper noreferrer"
          className="block">
            <Image
              src="/whatsapp.png"
              width={50}
              height={50}
              alt="Contacta con nosotros en WhatsApp"
              className="hover:opacity-80 transition-transform transform hover:scale-110 hover:rotate-5"
            />
            <span className="sr-only">Contact Us on WhatsApp</span>
        </Link>
      </div>
    </main>
  );
}
