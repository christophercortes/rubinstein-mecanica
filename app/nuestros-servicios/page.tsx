import Image from "next/image";

export default function Services() {
  return (
    <main className="mt-10 pt-20 bg-white">
      <section className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Nuestros Servicios</h1>
      </section>

      <section className="grid grid-cols-1 bg-gray-50 px-4 py-8 md:grid-cols-2 gap-12 px-4 md:px-8 lg:px-10 xl:px-16 mt-16">
        <div className="text-center md:text-left">
          <Image
            src="/servicios/grua.jpeg"
            width={700}
            height={400}
            alt="Grúa"
            className="w-full h-auto object-cover rounded-lg mx-auto md:w-[500px] md:h-[300px] lg:w-[600px] lg:h-[350px] xl:w-[700px] xl:h-[400px]"
            loading="lazy"
          />
        </div>
        <div className="lg:max-w-[600px] lg:mx-auto xl:max-w-[700px] flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Servicios de Grúa</h2>
          <h3 className="text-xl font-bold mb-4 text-gray-600">Asistencia en Ruta</h3>
          <p className="text-lg leading-relaxed text-gray-700">
            Cuando alguno de nuestros clientes quede en panne o por alguna colisión menor o choque no pueda mover
            su vehículo y necesite rescate, nosotros nos encargamos de traer el vehículo a taller para el arreglo.
            Solo debe llamarnos y nosotros coordinamos el servicio de grúa.
          </p>
        </div>
      </section>
      <div className="border-t border-gray-300 mt-8 mb-8"></div>

      <section className="grid grid-cols-1 bg-gray-50 px-4 py-8 md:grid-cols-2 gap-12 px-4 md:px-8 lg:px-10 xl:px-16 mt-16">
        <div className="lg:max-w-[600px] lg:mx-auto xl:max-w-[700px] flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Servicio Scanner</h2>
          <h3 className="text-xl font-bold mb-4 text-gray-600">Chequeo OBD1 y OBD2</h3>
          <p className="text-lg leading-relaxed text-gray-700">
            En Rubinstein chequeamos tu vehículo para ver fallas o borrar códigos erróneos. Este servicio
            se realiza en nuestro taller y también a domicilio dependiendo de las necesidades de nuestros clientes.
          </p>
        </div>
        <div className="text-center md:text-left">
          <Image
            src="/servicios/cardiagnostic.jpg"
            width={700}
            height={400}
            alt="Servicio Scanner"
            className="w-full h-auto object-cover rounded-lg mx-auto md:w-[500px] md:h-[300px] lg:w-[600px] lg:h-[350px] xl:w-[700px] xl:h-[400px]"
            loading="lazy"
          />
        </div>
      </section>
      <div className="border-t border-gray-300 mt-8 mb-8"></div>

      <section className="grid grid-cols-1 bg-gray-50 px-4 py-8 md:grid-cols-2 gap-12 px-4 md:px-8 lg:px-10 xl:px-16 mt-16">
        <div className="text-center md:text-left">
          <Image
            src="/servicios/pintura.jpeg"
            width={700}
            height={400}
            alt="Servicio de Pintura"
            className="w-full h-auto object-cover rounded-lg mx-auto md:w-[500px] md:h-[300px] lg:w-[600px] lg:h-[350px] xl:w-[700px] xl:h-[400px]"
            loading="lazy"
          />
        </div>
        <div className="lg:max-w-[600px] lg:mx-auto xl:max-w-[700px] flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Servicio de Pintura</h2>
          <h3 className="text-xl font-bold mb-4 text-gray-600">Desabolladura y Pintura</h3>
          <p className="text-lg leading-relaxed text-gray-700">
            Cuando alguno de nuestros clientes sufra una colisión menor o choque y necesite arreglar su vehículo, en Rubinstein nos
            encargamos de gestionar con algún taller asociado el presupuesto y arreglo del siniestro del vehículo,
            tanto en Desabolladura, pintura, parabrisas y vidrios.
          </p>
        </div>
      </section>
      <div className="border-t border-gray-300 mt-8 mb-8"></div>

      <section className="grid grid-cols-1 bg-gray-50 px-4 py-8 md:grid-cols-2 gap-12 px-4 md:px-8 lg:px-10 xl:px-16 mt-16">
        <div className="lg:max-w-[600px] lg:mx-auto xl:max-w-[700px] flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Revisión Técnica</h2>
          <h3 className="text-xl font-bold mb-4 text-gray-600">Chequeo y trámite</h3>
          <p className="text-lg leading-relaxed text-gray-700">
            En Rubinstein chequeamos tu vehículo y lo preparamos para obtener la revisión técnica. Servicio especial
            para nuestros clientes que están complicados de tiempo o no pueden hacer este trámite
            por alguna razón, nosotros nos encargamos del trámite de llevar el vehículo a la planta de revisión
            y lo entregamos aprobado.
          </p>
        </div>
        <div className="text-center md:text-left">
          <Image
            src="/servicios/trabajador.jpg"
            width={700}
            height={400}
            alt="Revisión Técnica"
            className="w-full h-auto object-cover rounded-lg mx-auto md:w-[500px] md:h-[300px] lg:w-[600px] lg:h-[350px] xl:w-[700px] xl:h-[400px]"
            loading="lazy"
          />
        </div>
      </section>
      <div className="border-t border-gray-300 mt-8 mb-8"></div>

      <section className="grid grid-cols-1 bg-gray-50 px-4 py-8 md:grid-cols-2 gap-12 px-4 md:px-8 lg:px-10 xl:px-16 mt-16">
        <div className="text-center md:text-left">
          <Image
            src="/servicios/verificado.jpeg"
            width={700}
            height={400}
            alt="Permiso de Circulación"
            className="w-full h-auto object-cover rounded-lg mx-auto md:w-[500px] md:h-[300px] lg:w-[600px] lg:h-[350px] xl:w-[700px] xl:h-[400px]"
            loading="lazy"
          />
        </div>
        <div className="lg:max-w-[600px] lg:mx-auto xl:max-w-[700px] flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Permiso de Circulación</h2>
          <h3 className="text-xl font-bold mb-4 text-gray-600">Trámite Municipal</h3>
          <p className="text-lg leading-relaxed text-gray-700">
            En Rubinstein nos preocupamos y encargamos de que tu vehículo tenga los permisos municipales al día, para
            que puedas circular sin problemas, nos hacemos cargo del trámite municipal y así ahorres tiempo.
          </p>
        </div>
      </section>
      <div className="border-t border-gray-300 mt-8 mb-8"></div>

      <section className="grid grid-cols-1 bg-gray-50 px-4 py-8 md:grid-cols-2 gap-12 px-4 md:px-8 lg:px-10 xl:px-16 mt-16">
        <div className="lg:max-w-[600px] lg:mx-auto xl:max-w-[700px] flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Repuestos</h2>
          <h3 className="text-xl font-bold mb-4 text-gray-600">Stock de Repuestos</h3>
          <p className="text-lg leading-relaxed text-gray-700">
            En Rubinstein nos ocupamos de tener todos los repuestos de tu vehículo a fin de optimizar
            tu tiempo, te asesoramos en la compra de repuestos específicos y nos encargamos de la compra
            para liberarte de estos trámites.
          </p>
        </div>
        <div className="text-center md:text-left">
          <Image
            src="/servicios/engine.jpg"
            width={700}
            height={400}
            alt="Repuestos"
            className="w-full h-auto object-cover rounded-lg mx-auto md:w-[500px] md:h-[300px] lg:w-[600px] lg:h-[350px] xl:w-[700px] xl:h-[400px]"
            loading="lazy"
          />
        </div>
      </section>
      <div className="border-t border-gray-300 mt-8 mb-8"></div>

      <section className="grid grid-cols-1 bg-gray-50 px-4 py-8 md:grid-cols-2 gap-12 px-4 md:px-8 lg:px-10 xl:px-16 mt-16">
        <div className="text-center md:text-left">
          <Image
            src="/servicios/oil.jpg"
            width={700}
            height={400}
            alt="Mantenimiento"
            className="w-full h-auto object-cover rounded-lg mx-auto md:w-[500px] md:h-[300px] lg:w-[600px] lg:h-[350px] xl:w-[700px] xl:h-[400px]"
            loading="lazy"
          />
        </div>
        <div className="lg:max-w-[600px] lg:mx-auto xl:max-w-[700px] flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Mantenimiento</h2>
          <h3 className="text-xl font-bold mb-4 text-gray-600">Cambio de Aceite y Filtro</h3>
          <p className="text-lg leading-relaxed text-gray-700">
            Si necesitas realizar el cambio de aceite y filtro, en Rubinstein te asesoramos con el lubricante
            ideal para tu vehículo, realizamos el cambio y además llevamos una bitácora de tus cambios de aceite
            para recordarte cuando estés en el tiempo de un nuevo cambio de aceite.
          </p>
        </div>
      </section>
      <div className="border-t border-gray-300 mt-8 mb-8"></div>

      <section className="grid grid-cols-1 bg-gray-50 px-4 py-8 md:grid-cols-2 gap-12 px-4 md:px-8 lg:px-10 xl:px-16 mt-16">
        <div className="lg:max-w-[600px] lg:mx-auto xl:max-w-[700px] flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Seguimiento en Línea</h2>
          <h3 className="text-xl font-bold mb-4 text-gray-600">Bitácora de Mantenciones</h3>
          <p className="text-lg leading-relaxed text-gray-700">
            Nos preocupamos de recordar a nuestros clientes cambios de aceite, pastillas de frenos y
            mantenciones en general.
          </p>
        </div>
        <div className="text-center md:text-left">
          <Image
            src="/servicios/call.jpg"
            width={700}
            height={400}
            alt="Seguimiento en Línea"
            className="w-full h-auto object-cover rounded-lg mx-auto md:w-[500px] md:h-[300px] lg:w-[600px] lg:h-[350px] xl:w-[700px] xl:h-[400px]"
            loading="lazy"
          />
        </div>
      </section>
      <div className="border-t border-gray-300 mt-8 mb-8"></div>


      {/* Installation Section */}
      <section className="text-center mb-16 mt-16">
        <h1 className="text-2xl mb-20 mt-20 md:text-3xl lg:text-4xl font-bold mb-8">Instalaciones</h1>
      </section>

      <section className="grid grid-cols-1 bg-gray-50 px-4 py-8 md:grid-cols-2 gap-12 px-4 md:px-8 lg:px-10 xl:px-16 mt-16">
        <div className="lg:max-w-[600px] lg:mx-auto xl:max-w-[700px] flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">Instalación de Inmovilizadores</h2>
          <h3 className="text-xl font-bold mb-4 text-gray-600">Corta Corriente / Antiportazo</h3>
          <p className="text-lg leading-relaxed text-gray-700">
            En Rubinstein nos preocupa tu seguridad y la de tu vehículo. Por ello, ofrecemos la instalación de inmovilizadores
            para proteger tu vehículo de robos o portonazos. Nuestro sistema es indetectable por delincuentes, inhackeable y
            más seguro que los GPS.
          </p>
        </div>
        <div className="text-center md:text-left">
          <Image
            src="/servicios/thief.jpg"
            width={700}
            height={400}
            alt="Instalación de Inmovilizadores"
            className="w-full h-auto object-cover rounded-lg shadow-lg mx-auto md:w-[500px] md:h-[300px] lg:w-[600px] lg:h-[350px] xl:w-[700px] xl:h-[400px]"
            loading="lazy"
          />
        </div>
      </section>
      <div className="border-t border-gray-300 mt-8 mb-8"></div>

      <section className="grid grid-cols-1 bg-gray-50 px-4 py-8 md:grid-cols-2 gap-12 px-4 md:px-8 lg:px-10 xl:px-16 mt-16">
        <div className="text-center md:text-left">
          <Image
            src="/servicios/alarm.jpg"
            width={700}
            height={400}
            alt="Alarma y Cierre"
            className="w-full h-auto object-cover rounded-lg mx-auto md:w-[500px] md:h-[300px] lg:w-[600px] lg:h-[350px] xl:w-[700px] xl:h-[400px]"
            loading="lazy"
          />
        </div>
        <div className="lg:max-w-[600px] lg:mx-auto xl:max-w-[700px] flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Alarma y Cierre</h2>
          <h3 className="text-xl font-bold mb-4 text-gray-600">Alarma y Cierre Centralizado</h3>
          <p className="text-lg leading-relaxed text-gray-700">
            Si necesitas instalar una alarma de seguridad o renovar el cierre centralizado de tu vehículo, en Rubinstein te
            ofrecemos la mejor opción para tu auto. Contáctanos para más detalles.
          </p>
        </div>
      </section>
      <div className="border-t border-gray-300 mt-8 mb-8"></div>

      <section className="grid grid-cols-1 bg-gray-50 px-4 py-8 md:grid-cols-2 gap-12 px-4 md:px-8 lg:px-10 xl:px-16 mt-16">
        <div className="lg:max-w-[600px] lg:mx-auto xl:max-w-[700px] flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Radio y Cámara</h2>
          <h3 className="text-xl font-bold mb-4 text-gray-600">Instalación de Radio Android y Cámara de Retroceso</h3>
          <p className="text-lg leading-relaxed text-gray-700">
            Moderniza tu radio y añade una cámara de retroceso para tu seguridad. En Rubinstein, tenemos una selección de
            radios Android o te asesoramos en la compra de un modelo específico.
          </p>
        </div>
        <div className="text-center md:text-left">
          <Image
            src="/servicios/radio.jpg"
            width={700}
            height={400}
            alt="Radio y Cámara"
            className="w-full h-auto object-cover rounded-lg mx-auto md:w-[500px] md:h-[300px] lg:w-[600px] lg:h-[350px] xl:w-[700px] xl:h-[400px]"
            loading="lazy"
          />
        </div>
      </section>
      <div className="border-t border-gray-300 mt-8 mb-8"></div>

      <section className="grid grid-cols-1 bg-gray-50 px-4 py-8 md:grid-cols-2 gap-12 px-4 md:px-8 lg:px-10 xl:px-16 mt-16">
        <div className="text-center md:text-left">
          <Image
            src="/servicios/start.jpg"
            width={700}
            height={400}
            alt="Botón Start/Stop Engine"
            className="w-full h-auto object-cover rounded-lg mx-auto md:w-[500px] md:h-[300px] lg:w-[600px] lg:h-[350px] xl:w-[700px] xl:h-[400px]"
            loading="lazy"
          />
        </div>
        <div className="lg:max-w-[600px] lg:mx-auto xl:max-w-[700px] flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Botones de Encendido</h2>
          <h3 className="text-xl font-bold mb-4 text-gray-600">Botón Start/Stop Engine</h3>
          <p className="text-lg leading-relaxed text-gray-700">
            Moderniza tu vehículo con un botón de encendido. En Rubinstein realizamos la instalación del botón Start/Stop
            Engine y ofrecemos garantía de satisfacción por nuestro trabajo.
          </p>
        </div>
      </section>
      <div className="border-t border-gray-300 mt-8 mb-8"></div>

    </main>
  );
}
