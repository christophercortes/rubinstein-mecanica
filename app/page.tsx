import Image from "next/image";
import styles from "@/app/ui/home.module.css";
import { lusitana } from "./ui/fonts";

export default function Home() {
  return (
    <main className="p-4">
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Bienvenidos a Rubinstein Mecanica</h1>
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
            <h2 className="text-2xl font-semibold mb-4">¿Qué es Taller Gestión Profesional?</h2>
            <p>
              TALLERGP es un ERP para la gestión de talleres online, con el que podrá manejar todas las tareas administrativas de su taller, con un coste reducido, unas máximas prestaciones y un soporte permanente. Podrá gestionar las citas previas, visualizar su agenda y la de sus empleados, emitir presupuestos, albaranes, facturas, órdenes de reparación, enviar campañas de marketing por SMS o correos electrónicos, enviar facturas o presupuestos a sus clientes, llevar un control del stock, tener un control documental de sus documentos importantes, como albaranes de compra, fichas de vehículos. Podrá adjuntar fotos a las órdenes, directamente desde el móvil o una tableta, sin pasar por un ordenador, o firmar los documentos con una tableta de firma Wacom.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
