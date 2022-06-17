import styled from "styled-components";

interface IStyledButtonProps {
  transform: string;
  width: string;
}

export const StyledButton = styled.button`
  font-size: 16px;
  border-radius: 15px;
  cursor: pointer;
  width: ${(props: IStyledButtonProps) => props.width || "100px"};

  &:hover{
    transform:   ${(props: IStyledButtonProps) => props.transform || "none"};};
  }
  
`;
