import Image from "next/image";
import { Car } from "../lib/definitions";

export default function CarTable({ carBrand }: { carBrand: Car[] }) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
            {carBrand.length === 0 ? (
                <p className="col-span-full text-center text-lg text-gray-700">
                    No cars available at the moment.
                </p>
            ) : (
                carBrand.map((car) => (
                    <div 
                        key={car.id} 
                        className="flex flex-col items-center justify-center bg-white p-4 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl"
                    >
                        <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 relative">
                            <Image
                                src={car.image_url || "/default-car-image.png"} // Fallback image
                                alt={`Image of ${car.id}`}
                                layout="fill"
                                objectFit="contain"
                                className="rounded"
                                loading="lazy"
                            />
                        </div>
                        <p className="mt-2 text-center text-sm md:text-base lg:text-lg font-medium text-gray-800">
                            {car.id}
                        </p>
                    </div>
                ))
            )}
        </div>
    );
}
