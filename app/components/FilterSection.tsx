import { useState, useEffect } from "react";

export default function FilterSection({
  carFilter,
  setBrand,
  orderPrice,
}: any) {
  const [brandList, setBrandList] = useState<any>([]);

  const BrandSet = new Set();

  useEffect(() => {
    if (carFilter) {
      handlerFilter();
    }
  }, [carFilter]);

  const handlerFilter = () => {
    carFilter.forEach((element: any) => {
      BrandSet.add(element.marque);
    });
    setBrandList(Array.from(BrandSet));
  };

  return (
    <div className="flex justify-center gap-3 p-3">
      <select
        onChange={(e) => orderPrice(e.target.value)}
        className="select select-bordered w-full max-w-xs"
      >
        <option disabled={true}>Trier par prix</option>
        <option value={-1}>Prix croissant</option>
        <option value={1}>Prix décroissant</option>
      </select>

      <select
        onChange={(e) => setBrand(e.target.value)}
        className="select select-bordered w-full max-w-xs"
      >
        <option disabled={true}>Filtrer par marque</option>
        {brandList.map((brand: string, index: number) => (
          <option key={index} value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </div>
  );
}
