"use client";

import SloganSection from "./components/SloganSection";
import HeaderSection from "./components/HeaderSection";
import DevisesSections from "./components/DevisesSections";
import GalerieSection from "./components/GalerieSection";
import { getCarList } from "@/Services";
import { useState, useEffect } from "react";

export default function Home() {
  const [carList, setCarList] = useState<any>([]);

  useEffect(() => {
    getCars();
  }, []);

  const getCars = async () => {
    const result: any = await getCarList();
    console.log(result.carLists);
    setCarList(result.carLists);
  };
  return (
    <>
      <SloganSection />
      <HeaderSection />
      <DevisesSections />

      <GalerieSection carList={carList} />
    </>
  );
}
