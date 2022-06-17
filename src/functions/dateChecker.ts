import { IAnimal } from "../models/IAnimal";

export function dateChecker(animal: IAnimal) {
  const animalDateString = animal.lastFed;
  const animalDateObject = new Date(animalDateString);

  let staticDate = new Date(1000 * 60 * 60 * 3);

  const deadlineDate = new Date(
    animalDateObject.getTime() + staticDate.getTime()
  );

  if (Date.now() > deadlineDate.getTime()) {
    animal.isFed = false;
    return animal;
  }
}
