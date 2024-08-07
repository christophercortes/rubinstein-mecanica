import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <main className="mt-10 pt-20 px-4 md:px-8 lg:px-12 bg-white text-black">
      {/* Header Section */}
      <div className="flex justify-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
          Rubinstein Mecánica Automotriz
        </h1>
      </div>

      {/* Main Image Section */}
      <section className="mb-12">
        <div className="">
          <Image
            src="/example.jpg"
            width={1000}
            height={800} // Adjust height to maintain aspect ratio
            alt="Mecánico trabajando"
            className="w-full h-auto lg:w-3/4 mx-auto"
            priority
          />
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center mt-4">
              <Link href="/contacto" className="inline-block px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 bg-navy-blue text-white font-semibold rounded-lg shadow-md hover:bg-navy-700 transition">
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
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-center">Propuesta de Valor</h2>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 text-center">Despreocúpese... <br /> Nosotros nos encargamos de su vehículo</h3>
            <p className="leading-relaxed mb-8 text-center text-sm sm:text-base md:text-lg lg:text-xl">
              En Rubinstein nos motiva entregar un servicio integral para su vehículo, para que no
              invierta tiempo valioso en la búsqueda de un taller serio y capacitado para dar solución
              a sus problemas mecánicos, o en la compra de repuestos, o simplemente necesite que se hagan cargo de la mantención.
              Nosotros nos encargamos de realizar todos los arreglos mecánicos, eléctricos, lubricantes,
              mantenciones, limpieza, trámites de permiso y todo lo que sea necesario para que su vehículo funcione a la perfección.
              Nos aseguramos de entregar un servicio de calidad y con garantía de satisfacción.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 mb-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-center">Atención y Mantención Personalizada</h2>
        <p className="leading-relaxed mb-8 text-center text-sm sm:text-base md:text-lg lg:text-xl">
          En Rubinstein nos encargamos de la reparación y mantención de su vehículo, con garantía por los
          trabajos realizados. Hacemos seguimiento de mantenciones, asesoramiento en mecánica, repuestos,
          lubricantes, Scanner y accesorios para mejorar la seguridad de su vehículo. Ofrecemos convenios de atención preferencial
          para empresas y agrupaciones, para mantención de la flota de vehículos corporativos, arreglos en general y trámites de permisos.
          Además, tenemos un innovador sistema de membresía para clientes particulares.
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-around gap-8">
          <div className="flex flex-col items-center">
            <Image
              src="/company.jpg"
              width={700}
              height={300} // Adjust height to maintain aspect ratio
              alt="Mecánico trabajando"
              className="w-full h-auto mb-4"
              priority
            />
            <Link href="/contacto" className="inline-block px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 bg-navy-blue text-white font-semibold rounded-lg shadow-md hover:bg-navy-700 transition">
              EMPRESAS
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/individual.jpg"
              width={700}
              height={300} // Adjust height to maintain aspect ratio
              alt="Mecánico trabajando"
              className="w-full h-auto mb-4"
              priority
            />
            <Link href="/contacto" className="inline-block px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 bg-navy-blue text-white font-semibold rounded-lg shadow-md hover:bg-navy-700 transition">
              PARTICULARES
            </Link>
          </div>
        </div>
      </section>

      {/* WhatsApp Icon */}
      <div className="fixed bottom-4 right-4 z-50">
        <Link href="https://wa.me/56954316358">
          <Image
            src="/whatsapp.png"
            width={50}
            height={50}
            alt="WhatsApp"
            className="hover:opacity-80 transition"
          />
        </Link>
      </div>
    </main>
  );
}
