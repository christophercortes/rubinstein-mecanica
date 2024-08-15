import CarTable from "../ui/table";
import { carBrand } from "../lib/carbrand-data";

export default function tallerMultimarcas() {
  return (
    <main>
      <div className="mt-12 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">Marcas con las que Trabajamos</h2>
        <CarTable carBrand={carBrand} />
      </div>
    </main>
  );
}