import { useState } from "react";
import { IAnimal } from "../models/IAnimal";
import { Animals } from "./Animals";

export const ZooComponent = () => {
  const [zooAnimals, setZooAnimals] = useState<IAnimal[]>([]);

  function getAnimals(animals: IAnimal[]) {
    setZooAnimals(animals);
  }
  return (
    <>
      <Animals animals={zooAnimals} getAnimals={getAnimals}></Animals>
    </>
  );
};
