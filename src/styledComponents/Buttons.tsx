import styled from "styled-components";

interface IStyledButtonProps {
  transform: string;
  fontsize: string;
  width: string;
  backgroundColor: string;
  color: string;
}

export const StyledButton = styled.button`
  font-size: ${(props: IStyledButtonProps) => props.fontsize || "16px"};
  border-radius: 15px;
  cursor: pointer;
  color:${(props: IStyledButtonProps) => props.color || "black"};
  width: ${(props: IStyledButtonProps) => props.width || "100px"};
  background-color: ${(props: IStyledButtonProps) =>
    props.backgroundColor || "none"};

  &:hover{
    transform:   ${(props: IStyledButtonProps) => props.transform || "none"};};
  }
  
`;
