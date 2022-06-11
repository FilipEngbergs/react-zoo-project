import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IAnimal } from "../../models/IAnimal";
import AnimalService from "../../services/ZooService";
import { StyledButton } from "../../styledComponents/Buttons";
import { StyledHeading } from "../../styledComponents/Headings";
import { StyledImage } from "../../styledComponents/Images";
import { StyledParagraph } from "../../styledComponents/Paragraphs";
import {
  AnimalWrapper,
  ButtonWrapper,
  ImageWrapper,
  ParagraphWrapper,
} from "../../styledComponents/Wrappers";

interface IAnimalsProps {
  animals: IAnimal[];
  showAnimals(animals: IAnimal[]): void;
}

export const Animals = (props: IAnimalsProps) => {
  useEffect(() => {
    if (props.animals.length !== 0) return;

    let service = new AnimalService();
    service.getAnimals().then((animals) => {
      props.showAnimals(animals);
    });
  });

  return (
    <>
      {props.animals.map((animal) => {
        return (
          <AnimalWrapper border="" transform="scale(110%)">
            <StyledHeading fontsize="24px">{animal.name}</StyledHeading>
            <ImageWrapper height="50%" border="2px solid black">
              <StyledImage
                src={animal.imageUrl}
                alt={animal.name}
                height="100%"
                width="100%"
              ></StyledImage>
            </ImageWrapper>
            <ParagraphWrapper
              border="none"
              height="30%"
              width="80%"
              flexdirection=""
            >
              <StyledParagraph margin="0px">
                {animal.shortDescription}
              </StyledParagraph>
            </ParagraphWrapper>
            <ButtonWrapper height="">
              <Link to={"/animals/" + animal.id} key={animal.id}>
                <StyledButton transform="">Visa mer!</StyledButton>
              </Link>
            </ButtonWrapper>
          </AnimalWrapper>
        );
      })}
    </>
  );
};
