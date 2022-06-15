import axios from "axios";
import { IAnimal } from "../models/IAnimal";

export default class AnimalService {
  async getAnimals(): Promise<IAnimal[]> {
    const response = await axios.get(
      "https://animals.azurewebsites.net/api/animals"
    );
    response.data[0].imageUrl =
      "https://www.mjau.se/media/2883/mjau-utfodra-kattunge.jpg?preset=card-images";
    response.data[1].imageUrl =
      "https://firstvet.com/uploaded/images/articles/undervikt-hos-hund.jpg";
    return response.data;
  }
}
