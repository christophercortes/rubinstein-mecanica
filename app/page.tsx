import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { homeBanner } from "./lib/home-banners";
import Carousel from "./ui/banner-table";

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <main className="mt-12 pt-20 px-4 md:px-8 lg:px-12 bg-white text-black">
      {/* Header Section */}
      <div className="flex justify-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center tracking-wide">
          Rubinstein Mecánica Automotriz
        </h1>
      </div>

      <section className="pb-10">
        <div>
          <Carousel slides={homeBanner} />
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 mb-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-center tracking-wide">
          Atención y Mantención Personalizada
        </h2>
        <p className="leading-relaxed mb-8 text-center text-sm sm:text-base md:text-lg lg:text-xl tracking-wide">
          En Rubinstein nos encargamos de la reparación y mantención de su vehículo, con garantía por los
          trabajos realizados. Hacemos seguimiento de mantenciones, asesoramiento en mecánica, repuestos,
          lubricantes, Scanner y accesorios para mejorar la seguridad de su vehículo. Ofrecemos convenios de atención preferencial
          para empresas y agrupaciones, para mantención de la flota de vehículos corporativos, arreglos en general y trámites de permisos.
          Además, tenemos un innovador sistema de membresía para clientes particulares.
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-around gap-8">
          <div className="flex flex-col items-center">
            <Image
              src="/home/cars.jpg"
              width={600}
              height={300}
              alt="Imagen de flota de coches para empresas"
              className="w-full h-auto mb-4 rounded-lg shadow-md"
              layout="responsive"
              priority
            />
            <Link href="/empresas" className="inline-block px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 bg-navy-blue text-white font-semibold rounded-lg shadow-md hover:bg-navy-700 transition-transform transform hover:scale-105">
                EMPRESAS
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/home/car.jpg"
              width={600}
              height={300}
              alt="Imagen de un coche particular"
              className="w-full h-auto mb-4 rounded-lg shadow-md"
              layout="responsive"
              priority
            />
            <Link href="/particular" className="inline-block px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 bg-navy-blue text-white font-semibold rounded-lg shadow-md hover:bg-navy-700 transition-transform transform hover:scale-105">
                PARTICULARES
            </Link>
          </div>
        </div>
      </section>

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
