'use client';

import Link from "next/link";
import Image from "next/image";
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Footer() {
    return (
        <footer className="bg-[#0056A0] text-white py-6 sm:py-8">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center space-y-6 text-center">
                    <div className="w-full lg:w-2/3 space-y-6">
                        <p className="text-lg font-semibold">Dirección: Vista Hermosa 1071, San Antonio</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <p className="text-base">Rodrigo Sáez <br /> Mecánico Jefe</p>
                            </div>
                            <div>
                                <p className="text-base">Cesar Chavarría <br /> Asesor Comercial</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <Link
                                href="mailto:rubinsteincontact@gmail.com"
                                className="flex items-center justify-center space-x-2 text-white hover:text-gray-300 transition"
                                aria-label="Email Rubinstein Contact"
                            >
                                <EnvelopeIcon className="w-6 h-6 text-white" aria-hidden="true" />
                                <span>rubinsteincontacto@gmail.com</span>
                            </Link>
                        </div>
                        <div className="space-y-4">
                            <Link
                                href="tel:+56956608734"
                                className="flex items-center justify-center space-x-2 text-white hover:text-gray-300 transition"
                                aria-label="Call Rubinstein"
                            >
                                <PhoneIcon className="w-6 h-6 text-white" aria-hidden="true" />
                                <span>+56 9 5660 8734</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center pt-10">
                    <h2 className="text-xl font-semibold mb-4 text-center">Ubicación en el Mapa</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.4326662138183!2d-71.5999691!3d-33.594076699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966238f597bb6c4b%3A0x4224e6dfb144998b!2sVista%20Hermosa%201070%2C%202662132%20San%20Antonio%2C%20Valpara%C3%ADso!5e0!3m2!1sen!2scl!4v1722561518131!5m2!1sen!2scl"
                        className="w-full h-64 border-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <div className="mt-6 border-t border-gray-700 pt-6 text-center">
                    <Image
                        src="/logo.jpg"
                        width={100}
                        height={100}
                        alt="Rubinstein Logo"
                        className="mx-auto bg-white p-2 rounded-lg"
                    />
                    <p className="mt-4 text-gray-400 text-sm">&copy; 2024 Rubinstein Mecanica Automotriz. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
