'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterForm() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsPending(true);
    setErrorMessage(null);

    const formData = new FormData(event.target as HTMLFormElement);

    const data = {
      fname: formData.get('fname'),
      email: formData.get('email'),
      phone: formData.get('phone'),
    };

    console.log('Form Data:', data); // Debugging line

    try {
      const response = await fetch('/api/sendemail', { // Ensure path is correct
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Tu mensaje se envió correctamente!');
        (event.target as HTMLFormElement).reset();
      } else {
        setErrorMessage(result.message || 'Algo ocurrió mal');
      }
    } catch (error) {
      setErrorMessage('Falló al enviar el email');
    } finally {
      setIsPending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-20 pt-10 mb-20 pb-10 space-y-6 max-w-lg mx-auto">
      <div className="rounded-lg bg-gray-50 p-6 shadow-md">
        <h1 className="mb-5 text-3xl font-semibold text-center text-gray-900">
          ¡CUÉNTANOS LA FECHA DE TU CITA Y TE CONFIRMAMOS!
        </h1>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="fname" className="block text-sm font-medium text-gray-700">Nombre*</label>
            <input type="text" id="fname" name="fname" className="mt-1 block w-full rounded-md border border-gray-300 p-2.5 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Nombre completo" required />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico*</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border border-gray-300 p-2.5 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Ingresa tu correo electrónico" required />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono*</label>
            <input type="tel" id="phone" name="phone" className="mt-1 block w-full rounded-md border border-gray-300 p-2.5 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Ingresa tu número de teléfono" required />
          </div>
        </div>

        <button type="submit" disabled={isPending} className="mt-6 w-full rounded-md bg-blue-600 py-2 text-white font-semibold shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          {isPending ? 'Enviando...' : 'Confirmar Cita'}
        </button>

        {errorMessage && <p className="mt-4 text-center text-red-500">{errorMessage}</p>}
      </div>
    </form>
  );
}
