'use client';

import Link from "next/link";
import Image from "next/image";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Footer() {
    return (
        <footer className="bg-[#0056A0] text-white py-6 sm:py-8"> {/* Updated color and padding */}
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Adjusted grid for smaller screens */}

                    {/* Contact Information Section */}
                    <div className="flex flex-col space-y-4">
                        <h2 className="text-xl font-semibold mb-2 text-center md:text-left">Información de Contacto</h2>
                        <div className="flex flex-col space-y-4">
                            <Link
                                href="https://www.google.com/maps/place/Vista+Hermosa+1070,+2662132+San+Antonio,+Valpara%C3%ADso/@-33.5940767,-71.602544,17z/data=!3m1!4b1!4m6!3m5!1s0x966238f597bb6c4b:0x4224e6dfb144998b!8m2!3d-33.5940767!4d-71.5999691!16s%2Fg%2F11vlsb4fzf?authuser=0&entry=ttu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-white hover:text-gray-300 transition"
                            >
                                <MapPinIcon className="w-6 h-6 text-white" aria-hidden="true" /> {/* Adjusted icon size */}
                                <span>Ubicación Taller</span>
                            </Link>
                            <Link
                                href="mailto:christopher.cortes.eduardo@gmail.com"
                                className="flex items-center space-x-2 text-white hover:text-gray-300 transition"
                            >
                                <EnvelopeIcon className="w-6 h-6 text-white" aria-hidden="true" /> {/* Adjusted icon size */}
                                <span>Email</span>
                            </Link>
                        </div>
                    </div>

                    {/* Phone Section */}
                    <div className="flex flex-col space-y-4">
                        <h2 className="text-xl font-semibold mb-2 text-center md:text-left">Contacto Telefónico</h2>
                        <Link
                            href="tel:+56956608734"
                            className="flex items-center space-x-4 text-white hover:text-gray-300 transition"
                        >
                            <PhoneIcon className="w-6 h-6 text-white" aria-hidden="true" /> {/* Adjusted icon size */}
                            <div>
                                <p className="text-lg font-medium mb-1">Fono</p>
                                <p className="text-lg">+56 9 5660 8734</p>
                            </div>
                        </Link>
                    </div>
                </div>
                {/* Google Map Section */}
                <div className="flex flex-col items-center pt-10">
                    <h2 className="text-xl font-semibold mb-2 text-center">Ubicación en el Mapa</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.4326662138183!2d-71.5999691!3d-33.594076699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966238f597bb6c4b%3A0x4224e6dfb144998b!2sVista%20Hermosa%201070%2C%202662132%20San%20Antonio%2C%20Valpara%C3%ADso!5e0!3m2!1sen!2scl!4v1722561518131!5m2!1sen!2scl"
                        width="100%"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                {/* Footer Bottom Section with Logo */}
                <div className="mt-6 border-t border-gray-700 pt-6 text-center">
                    <Image
                        src="/logo.jpg"
                        width={100} // Adjusted width for better fit
                        height={100} // Adjusted height for better fit
                        alt="Rubinstein Logo"
                        className="mx-auto bg-white p-2 rounded-full"
                    />
                    <p className="mt-4 text-gray-400">&copy; 2024 Rubinstein Mecanica Automotriz. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
