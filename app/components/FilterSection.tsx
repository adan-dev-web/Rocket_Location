/* filepath: /home/wac7/Projets_perso/sixt/Rocket_Location/app/components/FilterSection.tsx */
import { useState, useEffect } from "react";

export default function FilterSection({
  carFilter,
  setBrand,
  orderPrice,
}: any) {
  const [brandList, setBrandList] = useState<any>([]);

  const handlerFilter = () => {
    const BrandSet = new Set();
    carFilter.forEach((element: any) => {
      BrandSet.add(element.marque);
    });
    setBrandList(Array.from(BrandSet));
  };

  useEffect(() => {
    if (carFilter && carFilter.length > 0) {
      handlerFilter();
    }
  }, [carFilter]);

  return (
    <div className="flex justify-center gap-3 p-3">
      <select
        onChange={(e) => orderPrice(e.target.value)}
        className="select select-bordered w-full max-w-xs hover:border-[#24FFB2] hover:scale-105 transition-all duration-300 focus:border-[#24FFB2] focus:outline-none"
        defaultValue=""
      >
        <option disabled value="">
          Trier par prix
        </option>
        <option value={-1}>Prix croissant</option>
        <option value={1}>Prix décroissant</option>
      </select>

      <select
        onChange={(e) => setBrand(e.target.value)}
        className="select select-bordered w-full max-w-xs hover:border-[#24FFB2] hover:scale-105 transition-all duration-300 focus:border-[#24FFB2] focus:outline-none"
        defaultValue=""
      >
        <option disabled value="">
          Filtrer par marque
        </option>
        {brandList.map((brand: string, index: number) => (
          <option key={index} value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </div>
  );
}
