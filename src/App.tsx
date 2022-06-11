import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/layout";
import { NotFound } from "./components/NotFound";
import { Animal } from "./components/pages/Animal";
import { Animals } from "./components/pages/Animals";
import { Home } from "./components/pages/Home";
import { IAnimal } from "./models/IAnimal";

function App() {
  const [zooAnimals, setZooAnimals] = useState<IAnimal[]>([]);

  function showAnimals(animals: IAnimal[]) {
    setZooAnimals(animals);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route
              path="/animals"
              element={
                <Animals animals={zooAnimals} showAnimals={showAnimals} />
              }
            ></Route>
            <Route
              path="/animals/:id"
              element={<Animal animals={zooAnimals} />}
            ></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
