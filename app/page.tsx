import Image from "next/image";
import Link from "next/link";
import { lusitana } from "./ui/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <main className="pt-20 px-4 md:px-8 lg:px-12">
      {/* Header Section */}
      <section className="relative mb-8">
        <div className="relative">
          <Image
            src="/vlad.jpg"
            width={1200}
            height={800} // Adjust height to maintain aspect ratio
            alt="Mecánico trabajando"
            className="object-cover w-full h-[70vh] sm:h-[80vh] md:h-[90vh] lg:h-[100vh]"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black bg-opacity-50 p-6 sm:p-8 md:p-10 lg:p-12 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto rounded-lg shadow-lg z-20 text-center">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-white">
                Bienvenido a
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-white">
                Taller Mecánico
              </h2>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white">
                Rubinstein Mecánica Automotriz
              </h3>
              <Link href="/contacto" className="inline-block mt-4 px-4 py-2 bg-red-800 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition">
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Content Section */}
      <section className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12">
          <div className="flex-1 text-sm sm:text-base md:text-lg lg:text-xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
              Propuesta de valor
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4">
              Despreocúpese... <br /> Nosotros nos encargamos de su vehículo
            </h3>
            <p className="leading-relaxed mb-4">
              En Rubinstein nos motiva entregar un servicio integral para su vehículo, para que no
              invierta tiempo valioso en la búsqueda de un taller serio y capacitado para dar solución
              a sus problemas mecánicos, o en la compra de repuestos, o simplemente necesitas que se hagan cargo de la mantención.
              Nosotros nos encargamos de realizar todos los arreglos mecánicos, eléctricos, lubricantes,
              mantenciones, limpieza, trámites de permiso y todo lo que sea necesario para que su vehículo funcione a la perfección.
              Nos aseguramos de entregar un servicio de calidad y con garantía de satisfacción.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
