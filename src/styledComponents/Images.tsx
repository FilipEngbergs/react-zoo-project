import styled from "styled-components";

interface IStyledImageProps {
  width: string;
  height: string;
}

export const StyledImage = styled.img`
  width: ${(props: IStyledImageProps) => props.width || "100%"};
  height: ${(props: IStyledImageProps) => props.height || "100%"};
`;
