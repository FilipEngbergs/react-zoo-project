import styled from "styled-components";

interface IStyledHeadingProps {
  fontsize: string;
}

export const StyledHeading = styled.h1`
  text-align: center;
  font-size: ${(props: IStyledHeadingProps) => props.fontsize || "24px"};
`;
