import Image from "next/image";
import { Car } from "../lib/definitions";

export default function CarTable({ carBrand }: { carBrand: Car[] }) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
            {carBrand.map((car) => (
                <div key={car.id} className="flex flex-col items-center justify-center bg-white p-2 shadow-md rounded-lg">
                    <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 relative">
                        <Image
                            src={car.image_url}
                            alt={car.id}
                            layout="fill"
                            objectFit="contain"
                            className="rounded"
                            loading="lazy"
                        />
                    </div>
                    <p className="mt-2 text-center text-sm md:text-base lg:text-lg font-medium">{car.id}</p>
                </div>
            ))}
        </div>
    );
}
