import { useEffect } from "react";
import { IAnimal } from "../models/IAnimal";
import AnimalService from "../services/ZooService";
import { AnimalsWrapper } from "../styledComponents/Wrappers";
import { Animal } from "./Animal";

interface IAnimalsProps {
  animals: IAnimal[];
  getAnimals(animals: IAnimal[]): void;
}

export const Animals = (props: IAnimalsProps) => {
  useEffect(() => {
    if (props.animals.length !== 0) return;

    let service = new AnimalService();
    service.getAnimals().then((animals) => {
      props.getAnimals(animals);
    });
  });

  return (
    <>
      <AnimalsWrapper>
        {props.animals.map((animal) => {
          return <Animal animal={animal} key={animal.id}></Animal>;
        })}
      </AnimalsWrapper>
    </>
  );
};
