import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/home.module.css";
import { lusitana } from "./ui/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <main className="pt-20 px-5">
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">
          Bienvenidos a Rubinstein Mecanica Automotriz!
        </h1>
      </section>
      <section className="max-w-screen-xl mx-auto px-4">
        <div className="relative mb-8">
          <Image
            src="/mecanico.jpg"
            width={1200}
            height={800}
            alt="Mecánico trabajando"
            className="object-cover w-full h-auto"
            priority // Optional: load this image as a priority
          />
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-shrink-0">
            <Image
              src="/trabajador.jpg"
              width={400}
              height={500}
              alt="Trabajador en taller"
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex-1 text-base">
            <h2 className="text-2xl font-semibold mb-4">
              Propuesta de valor
            </h2>
            <h2 className="text-xl md-4">
              Despreocupese... <br /> Nosotros nos encargamos de su vehiculo<br />
            </h2>
            <p className="leading-relaxed mb-4">
              En Rubinstein nos motiva entregar un servicio integral para su vehículo, para que no
              invierta tiempo valioso en la búsqueda de un taller serio y capacitado para dar solución
              a sus problemas mecánicos, o en la compra de repuestos, o simplemente necesitas que se hagan cargo de la mantención.
              Nosotros nos encargamos de realizar todos los arreglos mecánicos, eléctricos, lubricantes, 
              mantenciones, limpieza, tramites de permiso y todo lo que sea necesario para que su vehículo funcione a la perfección.
              Nos aseguramos de entregar un servicio de calidad y con garantía de satisfacción.
            </p>
            <Link href="/contacto" className="inline-block mt-4 mb-8 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              Contáctanos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
