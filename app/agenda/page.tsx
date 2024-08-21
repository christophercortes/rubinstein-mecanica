import ContactForm from "../ui/contactform";

export default function AgendaForm() {
  return (
    <main className="mt-20 pt-10 bg-gray-100 min-h-screen p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Agenda Tu Cita</h1>
          <p className="text-gray-600 mt-2">
            Completa el formulario a continuación para agendar una cita. Nos pondremos en contacto contigo lo antes posible.
          </p>
        </header>
        
        <ContactForm />
      </div>
    </main>
  )
}
