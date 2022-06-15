import styled from "styled-components";

interface IAnimalWrapperProps {
  width?: string;
  flexdirection?: string;
  border: string;
  transform: string;
  height: string;
}
interface IImageWrapperProps {
  height: string;
  border: string;
}

interface IParagraphWrapperProps {
  width: string;
  height: string;
  border: string;
  flexdirection: string;
}

interface IButtonWrapperProps {
  height: string;
}

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items center;
  width: 100%;
  height: 20%;
`;

export const AnimalsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  padding-top: 100px;
`;

export const AnimalWrapper = styled.div`
  display: flex;
  flex-direction: ${(props: IAnimalWrapperProps) =>
    props.flexdirection || "column"};
  justify-content: center;
  align-items: center;
  width: ${(props: IAnimalWrapperProps) => props.width || "30%"};
  height: ${(props: IAnimalWrapperProps) => props.height || "500px"};
  border: ${(props: IAnimalWrapperProps) => props.border || "1px solid black"};
  box-shadow: 5px 0px 8px 0px #888888;

  &:hover {
    transform: ${(props: IAnimalWrapperProps) =>
      props.transform || "scale(100%)"};
    z-index: 2;
    background-color: white;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  height: ${(props: IImageWrapperProps) => props.height || "50%"};
  border-bottom: ${(props: IImageWrapperProps) =>
    props.border || "2px solid black"};
`;

export const ParagraphWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props: IParagraphWrapperProps) =>
    props.flexdirection || "row"};
  gap: 10px;
  width: ${(props: IParagraphWrapperProps) => props.width || "80%"};
  margin: 0 auto;
  height: ${(props: IParagraphWrapperProps) => props.height || "30%"};
  border: ${(props: IParagraphWrapperProps) => props.border || "none"};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: ${(props: IButtonWrapperProps) => props.height || "15%"};
`;

export const HeadingWrapper = styled.div`
  height: 10%;
`;
