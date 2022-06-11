import styled from "styled-components";

interface IStyledButtonProps {
  transform: string;
}

export const StyledButton = styled.button`
  font-size: 16px;
  border-radius: 15px;
  cursor: pointer;

  &:hover{
    transform:   ${(props: IStyledButtonProps) => props.transform || "none"};};
  }
  
`;
