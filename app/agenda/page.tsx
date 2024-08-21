import ContactForm from "../ui/contactform";

export default function AgendaForm() {
  return (
    <main className="mt-20 pt-10 bg-gray-100 min-h-screen md:p-8">
      <div className="max-w-4xl mx-auto bg-white p-2 rounded-lg shadow-lg">
        <header className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">Agenda Tu Cita</h1>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Completa el formulario a continuación para agendar una cita. Nos pondremos en contacto contigo lo antes posible.
          </p>
        </header>

        {/* Wrap the form in a responsive container */}
        <div className="w-full sm:w-3/4 md:w-full lg:w-full mx-auto">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
