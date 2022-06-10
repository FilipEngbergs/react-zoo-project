import styled from "styled-components";

export const AnimalsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  padding-top: 100px;
`;

export const AnimalWrapper = styled.div`
  width: 30%;
  height: 450px;
  border: 1px solid black;
  box-shadow: 5px 0px 8px 0px #888888;
  cursor: pointer;

  &:hover {
    transform: scale(110%);
    z-index: 9;
    background-color: white;
  }
`;

export const ImageWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 50%;
  border-bottom: 2px solid black;
`;

export const ParagraphWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 30%;
`;
