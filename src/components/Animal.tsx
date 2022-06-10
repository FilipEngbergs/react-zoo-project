import { IAnimal } from "../models/IAnimal";
import { StyledHeading } from "../styledComponents/Headings";
import { StyledImage } from "../styledComponents/Images";
import {
  AnimalWrapper,
  ImageWrapper,
  ParagraphWrapper,
} from "../styledComponents/Wrappers";
import { StyledParagraph } from "../styledComponents/Paragraphs";

interface IAnimalProps {
  animal: IAnimal;
}

export const Animal = (props: IAnimalProps) => {
  return (
    <>
      <AnimalWrapper>
        <StyledHeading>{props.animal.name}</StyledHeading>
        <ImageWrapper>
          <StyledImage
            src={props.animal.imageUrl}
            alt={props.animal.name}
          ></StyledImage>
        </ImageWrapper>
        <ParagraphWrapper>
          <StyledParagraph>{props.animal.shortDescription}</StyledParagraph>
        </ParagraphWrapper>
      </AnimalWrapper>
    </>
  );
};
