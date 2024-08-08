import Image from "next/image";
import CarTable from "../ui/table";
import { carBrand } from "../lib/carbrand-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Quienes Somos',
};

export default function AboutUs() {
  return (
    <main className="mt-10 pt-20 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">Quiénes Somos</h1>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-4">
            <Image
              src="/acerca/mechanic.jpg"
              width={700}
              height={400}
              alt="Rubinstein Logo"
              className="w-full h-auto object-cover rounded-lg"
              loading="lazy"
            />
          </div>
          <div className="md:w-1/2 p-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">Trabajos Garantizados</h2>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
              Contamos con un dotación de mecánicos calificados con una vasta experiencia, además cada vehículo antes
              de salir del taller se vuelve a chequear por el mecánico jefe <b>Rodrigo Sáez</b>, Técnico Universitario en Mecánica
              Automotriz y Autotrónica, con más de 15 años en el rubro, para asegurarnos de entregar un servicio de calidad
              y con garantía. Características que identifican a nuestro taller, dando así confianza a nuestros clientes.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">Marcas con las que Trabajamos</h2>
        <CarTable carBrand={carBrand} />
      </div>
      
      <div className="mt-12 mb-12 text-center bg-navy-blue text-white py-8 px-4 rounded-lg shadow-md">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">Todos los Vehículos con Checkout de Garantía</h2>
        <h3 className="text-xl md:text-2xl lg:text-3xl">Todos los trabajos con sello de garantía</h3>
      </div>
    </main>
  );
}
