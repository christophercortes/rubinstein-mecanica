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
      <section className="relative mb-8">
        <div className="relative">
          <Image
            src="/Car-Station.jpg"
            width={1000}
            height={700}
            alt="Mecánico trabajando"
            className="object-cover w-full h-auto"
            priority // Optional: load this image as a priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black bg-opacity-60 p-4 max-w-xs mx-auto rounded-lg shadow-lg z-20 text-center">
              <h1 className={`${lusitana.className} text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-white`}>
                Bienvenidos a
              </h1>
              <h2 className={`${lusitana.className} text-base md:text-lg lg:text-xl font-semibold mb-1 text-white`}>
                Taller Mecanico
              </h2>
              <h3 className={`${lusitana.className} text-sm md:text-base lg:text-lg font-semibold text-white`}>
                Rubinstein Mecanica Automotriz
              </h3>
              <Link href="/contacto" className="inline-block mt-4 px-4 py-2 bg-red-800 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition">
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12">
          <div className="flex-shrink-0">
            <Image
              src="/auto-shop.jpg"
              width={300}
              height={400}
              alt="Trabajador en taller"
              className="object-cover rounded-lg w-full h-auto"
            />
          </div>
          <div className="flex-1 text-sm md:text-base lg:text-lg">
            <h2 className={`${lusitana.className} text-xl md:text-2xl lg:text-3xl font-semibold mb-4`}>
              Propuesta de valor
            </h2>
            <h2 className={`${lusitana.className} text-lg md:text-xl lg:text-2xl mb-4`}>
              Despreocupese... <br /> Nosotros nos encargamos de su vehículo<br />
            </h2>
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
