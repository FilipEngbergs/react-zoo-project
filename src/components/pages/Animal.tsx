import { IAnimal } from "../../models/IAnimal";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  AnimalWrapper,
  ButtonWrapper,
  HeadingWrapper,
  ImageWrapper,
  ParagraphWrapper,
} from "../../styledComponents/Wrappers";
import { StyledHeading } from "../../styledComponents/Headings";
import { StyledImage } from "../../styledComponents/Images";
import { StyledParagraph } from "../../styledComponents/Paragraphs";
import { StyledButton } from "../../styledComponents/Buttons";

interface IAnimalProps {
  animals: IAnimal[];
}

export const Animal = (props: IAnimalProps) => {
  const [zooAnimal, setZooAnimal] = useState<IAnimal>();

  let params = useParams();

  useEffect(() => {
    props.animals.forEach((animal) => {
      const idToString = animal.id.toString();
      if (idToString === params.id) {
        setZooAnimal(animal);
      }
    });
  });

  return (
    <>
      <AnimalWrapper
        border="2px solid black"
        flexdirection="row"
        width="100%"
        transform="scale(100%)"
      >
        <ImageWrapper height="100%" border="3px solid black">
          <StyledHeading fontsize="36px">{zooAnimal?.name}</StyledHeading>
          <StyledImage
            height="60%"
            width="80%"
            src={zooAnimal?.imageUrl}
            alt={zooAnimal?.name}
          ></StyledImage>
          <ParagraphWrapper
            width="90%"
            height="20%"
            border="none"
            flexdirection=""
          >
            <b>Matad: </b>
            <StyledParagraph margin="0px">{zooAnimal?.lastFed}</StyledParagraph>
          </ParagraphWrapper>
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
            <StyledButton transform="scale(110%)">
              Mata {zooAnimal?.name}
            </StyledButton>
          </ButtonWrapper>
        </ParagraphWrapper>
      </AnimalWrapper>
    </>
  );
};
