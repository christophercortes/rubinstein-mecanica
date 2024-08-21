'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function AboutUs() {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

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
              alt="Mechanic"
              className="w-full h-auto object-cover rounded-lg"
              loading="lazy"
            />
          </div>
          <div className="md:w-1/2 p-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">Trabajos Garantizados</h2>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
              Contamos con un dotación de mecánicos calificados con una vasta experiencia. Cada vehículo antes
              de salir del taller se vuelve a chequear por el mecánico jefe{" "}
              <button
                onClick={handleToggleDetails}
                className="font-bold text-blue-800 hover:underline focus:outline-none"
              >
                Rodrigo Sáez Madrid
              </button>, Técnico Universitario en Mecánica
              Automotriz y Autotrónica, con más de 15 años en el rubro, para asegurarnos de entregar un servicio de calidad
              y con garantía. Características que identifican a nuestro taller, dando así confianza a nuestros clientes.
            </p>
          </div>
        </div>
      </div>

      {/* Details Banner */}
      {showDetails && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Rodrigo Sáez Madrid</h2>
            <Image
              src="/acerca/rodrigo.jpg"
              width={300}
              height={200}
              alt="Rodrigo Sáez Madrid"
              className="w-full h-auto object-cover rounded-lg mb-4"
              loading="lazy"
            />
            <p className="text-base sm:text-lg leading-relaxed mb-4">
              Rodrigo Sáez Madrid es un Técnico Universitario en Mecánica Automotriz y Autotrónica de la Universidad Técnica Federico
              Santa Maria con más de 15 años de experiencia en el campo. Su compromiso con la calidad y la atención al detalle garantiza
              que cada vehículo reciba el mejor cuidado y reparación posible. Su experiencia y habilidades son fundamentales para ofrecer
              un servicio excepcional en nuestro taller.
            </p>
            <button
              onClick={handleToggleDetails}
              className="mt-4 w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 focus:outline-none"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}


      <div className="mt-12 mb-12 text-center bg-navy-blue bg-opacity-40 text-white py-8 px-6 rounded-lg shadow-xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">Todos los Vehículos con Checkout de Garantía</h2>
        <h3 className="text-xl md:text-2xl lg:text-3xl">Todos los trabajos con sello de garantía</h3>
      </div>

      {/* WhatsApp Icon */}
      <div className="fixed bottom-4 right-4 z-50">
        <Link
          href="https://wa.me/56956608734"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
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
