'use client';

import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
    const [status, setStatus] = useState<string | null>(null);

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;

        const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID || "";
        const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID || "";
        const userID = process.env.NEXT_PUBLIC_USER_ID || "";

        if (!serviceID || !templateID || !userID) {
            setStatus("Error: EmailJS serviceID, templateID, or userID is missing.");
            return;
        }

        try {
            await emailjs.sendForm(serviceID, templateID, form, userID);
            setStatus("Mensaje enviado exitosamente!");
            form.reset();
        } catch (error) {
            setStatus("Error: Hay un error enviando tu mensaje. Intenta otra vez.");
        }
    };

    return (
        <form onSubmit={sendEmail} className="pb-10 space-y-6 max-w-lg mx-auto">
            <div className="rounded-lg bg-gray-200 p-6 shadow-md">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre*</label>
                        <input type="text" id="name" name="name" required aria-required="true" className="mt-1 block w-full rounded-md border border-gray-300 p-2.5 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Nombre completo" />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico*</label>
                        <input type="email" id="email" name="email" required aria-required="true" className="mt-1 block w-full rounded-md border border-gray-300 p-2.5 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Ingresa tu correo electrónico" />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono*</label>
                        <input type="tel" id="phone" name="phone" required aria-required="true" className="mt-1 block w-full rounded-md border border-gray-300 p-2.5 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Ingresa tu número de teléfono" />
                    </div>

                    <div>
                        <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">Numero de WhatsApp*</label>
                        <input type="tel" id="whatsapp" name="whatsapp" required aria-required="true" className="mt-1 block w-full rounded-md border border-gray-300 p-2.5 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Ingresa tu número de WhatsApp" />
                    </div>

                    <div>
                        <label htmlFor="plate" className="block text-sm font-medium text-gray-700">Escribe tu Patente*</label>
                        <input type="text" id="plate" name="plate" required aria-required="true" className="mt-1 block w-full rounded-md border border-gray-300 p-2.5 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Patente del vehículo" />
                    </div>

                    <div>
                        <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Marca*</label>
                        <select id="brand" name="brand" required aria-required="true" className="mt-1 block w-full rounded-md border border-gray-300 p-2.5 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500">
                            <option value="" disabled>Selecciona una opción</option>
                            <option>Alfa Romeo</option>
                            <option>Audi</option>
                            <option>Baic</option>
                            <option>BMW</option>
                            <option>BYD</option>
                            <option>Changan</option>
                            <option>Chery</option>
                            <option>Chevrolet</option>
                            <option>Daihatsu</option>
                            <option>Daewoo</option>
                            <option>Dodge</option>
                            <option>Fiat</option>
                            <option>Foton</option>
                            <option>Ford</option>
                            <option>Great Wall</option>
                            <option>Haval</option>
                            <option>Honda</option>
                            <option>Hummer</option>
                            <option>Hyindai</option>
                            <option>Infiniti</option>
                            <option>Isuzu</option>
                            <option>Jac</option>
                            <option>Jaguar</option>
                            <option>Jeep</option>
                            <option>Jetour</option>
                            <option>Kia</option>
                            <option>Lexus</option>
                            <option>Magindra</option>
                            <option>Mazda</option>
                            <option>Mercedes-Benz</option>
                            <option>Mitsubishi</option>
                            <option>MG</option>
                            <option>Nissan</option>
                            <option>Opel</option>
                            <option>Peugeot</option>
                            <option>Renault</option>
                            <option>Seat</option>
                            <option>Skoda</option>
                            <option>SsanYong</option>
                            <option>Subary</option>
                            <option>Suzuki</option>
                            <option>Tata</option>
                            <option>Toyota</option>
                            <option>Volkswagen</option>
                            <option>Volvo</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="model" className="block text-sm font-medium text-gray-700">Modelo*</label>
                        <input type="text" id="model" name="model" required aria-required="true" className="mt-1 block w-full rounded-md border border-gray-300 p-2.5 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Modelo del vehículo" />
                    </div>

                    <div>
                        <label htmlFor="year" className="block text-sm font-medium text-gray-700">Año*</label>
                        <input type="number" id="year" name="year" required aria-required="true" min="1900" max={new Date().getFullYear()} className="mt-1 block w-full rounded-md border border-gray-300 p-2.5 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Año del vehículo" />
                    </div>

                    <div>
                        <label htmlFor="mileage" className="block text-sm font-medium text-gray-700">Kilometraje*</label>
                        <input type="number" id="mileage" name="mileage" required aria-required="true" min="0" className="mt-1 block w-full rounded-md border border-gray-300 p-2.5 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Kilometraje del vehículo" />
                    </div>

                    <div>
                        <label htmlFor="gas" className="block text-sm font-medium text-gray-700">Tipo de Combustible*</label>
                        <select id="gas" name="gas" required aria-required="true" className="mt-1 block w-full rounded-md border border-gray-300 p-2.5 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500">
                            <option value="" disabled>Selecciona una opción</option>
                            <option>Diesel</option>
                            <option>Gasolina</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Motivo de la cita*</label>
                        <textarea id="message" name="message" required aria-required="true" className="mt-1 block w-full rounded-md border border-gray-300 p-2.5 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Descripción del problema o servicio"></textarea>
                    </div>
                </div>

                <button type="submit" className="mt-6 w-full rounded-md bg-blue-700 py-2 text-white font-semibold shadow-md hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Enviar
                </button>

                {status && (
                    <div className={`mt-4 p-4 text-center ${status.includes("Error") ? "text-red-600" : "text-green-600"}`}>
                        {status}
                    </div>
                )}
            </div>
        </form>
    );
}
