import { IAnimal } from "../../models/IAnimal";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  AnimalWrapper,
  ButtonWrapper,
  HeadingWrapper,
  ImageWrapper,
  ParagraphWrapper,
  StyledWrapper,
} from "../../styledComponents/Wrappers";
import { StyledHeading } from "../../styledComponents/Headings";
import { StyledImage } from "../../styledComponents/Images";
import { StyledParagraph } from "../../styledComponents/Paragraphs";
import { StyledButton } from "../../styledComponents/Buttons";
import { formatted_date } from "../../functions/formatter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile, faFaceFrown } from "@fortawesome/free-solid-svg-icons";

export const Animal = () => {
  const [zooAnimal, setZooAnimal] = useState<IAnimal>();

  let params = useParams();

  useEffect(() => {
    const animals = localStorage.getItem("animals" || "");
    if (animals) {
      let localStorageAnimalList: IAnimal[] = JSON.parse(animals);
      const animal = localStorageAnimalList.find((animal) => {
        if (params.id) {
          return animal.id === parseInt(params.id);
        }
      });
      setZooAnimal(animal);
    }
  }, [params]);

  function handleFed() {
    if (zooAnimal) {
      const idToString = zooAnimal.id.toString();

      if (idToString === params.id) {
        const localStorageAnimalsList: string =
          localStorage.getItem("animals") || "";
        const jsonAnimalsList = JSON.parse(localStorageAnimalsList);

        jsonAnimalsList.forEach((animal: IAnimal) => {
          let idToString = animal.id.toString();
          if (idToString === params.id) {
            if (animal.lastFed !== "") {
              animal.lastFed = "";
            }
            let newDate = formatted_date(animal.lastFed);
            animal.isFed = true;
            animal.lastFed = newDate;
          }
        });

        localStorage.setItem("animals", JSON.stringify(jsonAnimalsList));

        let animalObject = { ...zooAnimal };
        animalObject.isFed = true;
        animalObject.lastFed = "";
        let newDate = formatted_date(animalObject.lastFed);
        animalObject.lastFed = newDate;
        setZooAnimal(animalObject);
      }
    }
  }

  return (
    <>
      <AnimalWrapper
        border="2px solid black"
        flexdirection="row"
        width="100%"
        transform="scale(100%)"
        height="600px"
      >
        <ImageWrapper height="100%" border="3px solid black">
          <StyledHeading fontsize="36px">{zooAnimal?.name}</StyledHeading>
          <StyledImage
            height="60%"
            width="80%"
            src={zooAnimal?.imageUrl}
            alt={zooAnimal?.name}
          ></StyledImage>
          <StyledWrapper url="" height="">
            <ParagraphWrapper
              width="50%"
              height="100%"
              border="none"
              flexdirection="column"
            >
              <b>Status:</b>
              {zooAnimal?.isFed ? (
                <FontAwesomeIcon
                  color="green"
                  fontSize="30px"
                  icon={faFaceSmile}
                />
              ) : (
                <FontAwesomeIcon
                  color="red"
                  fontSize="30px"
                  icon={faFaceFrown}
                />
              )}
            </ParagraphWrapper>
            <ParagraphWrapper
              width="50%"
              height="100%"
              border="none"
              flexdirection="column"
            >
              <b>Matad: </b>
              {zooAnimal?.isFed ? (
                <StyledParagraph margin="0px">
                  {zooAnimal?.lastFed}
                </StyledParagraph>
              ) : (
                <>
                  <StyledParagraph margin="">Inte matad!</StyledParagraph>
                </>
              )}
            </ParagraphWrapper>
          </StyledWrapper>
        </ImageWrapper>
        <ParagraphWrapper
          height="100%"
          width="60%"
          border="1px solid black"
          flexdirection="column"
        >
          <HeadingWrapper>
            <StyledHeading fontsize="22px">Beskrivning:</StyledHeading>
          </HeadingWrapper>
          <StyledParagraph margin="20px">
            {zooAnimal?.longDescription}
          </StyledParagraph>
          <ButtonWrapper height="10%">
            {zooAnimal?.isFed ? (
              <></>
            ) : (
              <StyledButton
                width="150px"
                transform="scale(110%)"
                onClick={handleFed}
              >
                Mata {zooAnimal?.name}
              </StyledButton>
            )}
          </ButtonWrapper>
        </ParagraphWrapper>
      </AnimalWrapper>
    </>
  );
};
