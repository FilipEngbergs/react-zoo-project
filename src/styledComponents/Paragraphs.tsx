import styled from "styled-components";

interface IStyledParagraphProps {
  margin: string;
}

export const StyledParagraph = styled.p`
  text-align: center;
  margin: ${(props: IStyledParagraphProps) => props.margin || "0px"};
`;
