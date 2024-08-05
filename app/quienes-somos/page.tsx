import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Quienes Somos',
};

export default function AboutUs() {
  return (
    <main className="pt-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Quiénes Somos</h1>
        <div className="relative overflow-hidden bg-gray-100 rounded-lg shadow-lg mb-8">
          <Image
            src=""
            width={1000}
            height={700}
            alt="Rubinstein Logo"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cumque rerum consequuntur, veritatis deserunt ratione ab totam. Est explicabo, earum neque atque reprehenderit quasi iusto dolorem? Inventore ex ipsa ullam.
        </p>
      </div>
    </main>
  );
}
