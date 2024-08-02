'use client';

import Link from "next/link";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Contact Information Section */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-6">Información de Contacto</h2>
                        <div className="space-y-4">
                            <Link
                                href="https://www.google.com/maps/place/Vista+Hermosa+1070,+2662132+San+Antonio,+Valpara%C3%ADso/@-33.5940767,-71.602544,17z/data=!3m1!4b1!4m6!3m5!1s0x966238f597bb6c4b:0x4224e6dfb144998b!8m2!3d-33.5940767!4d-71.5999691!16s%2Fg%2F11vlsb4fzf?authuser=0&entry=ttu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-blue-300 hover:text-blue-100"
                            >
                                <MapPinIcon className="w-6 h-6" aria-hidden="true" />
                                <span>Ubicación Taller</span>
                            </Link>
                            <Link
                                href="mailto:christopher.cortes.eduardo@gmail.com"
                                className="flex items-center space-x-2 text-blue-300 hover:text-blue-100"
                            >
                                <EnvelopeIcon className="w-6 h-6" aria-hidden="true" />
                                <span>Email</span>
                            </Link>
                        </div>
                    </div>

                    {/* Google Map Section */}
                    <div className="col-span-1 md:col-span-2">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.4326662138183!2d-71.5999691!3d-33.594076699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966238f597bb6c4b%3A0x4224e6dfb144998b!2sVista%20Hermosa%201070%2C%202662132%20San%20Antonio%2C%20Valpara%C3%ADso!5e0!3m2!1sen!2scl!4v1722561518131!5m2!1sen!2scl"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-lg"
                        ></iframe>
                    </div>

                    {/* Phone Section */}
                    <div className="flex items-center space-x-4">
                        <PhoneIcon className="w-6 h-6" aria-hidden="true" />
                        <div>
                            <p className="text-lg font-medium mb-1">Fono</p>
                            <p className="text-lg">+56 9 5660 8734</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
