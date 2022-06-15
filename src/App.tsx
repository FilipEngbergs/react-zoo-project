import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/layout";
import { NotFound } from "./components/NotFound";
import { Animal } from "./components/pages/Animal";
import { Animals } from "./components/pages/Animals";
import { Home } from "./components/pages/Home";
import { IAnimal } from "./models/IAnimal";
import AnimalService from "./services/ZooService";

function App() {
  const [zooAnimals, setZooAnimals] = useState<IAnimal[]>([]);

  useEffect(() => {
    let localStorageDataList = localStorage.getItem("animals") || "";

    if (localStorageDataList === "") {
      let service = new AnimalService();
      service.getAnimals().then((animals) => {
        localStorage.setItem("animals", JSON.stringify(animals));
        setZooAnimals(animals);
      });
    } else {
      let getList: IAnimal[] = JSON.parse(localStorageDataList);
      setZooAnimals(getList);
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route
              path="/animals"
              element={<Animals animals={zooAnimals} />}
            ></Route>
            <Route path="/animals/:id" element={<Animal />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
