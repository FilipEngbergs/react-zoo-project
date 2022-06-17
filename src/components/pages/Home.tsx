import { Link } from "react-router-dom";
import { StyledButton } from "../../styledComponents/Buttons";
import { StyledImage } from "../../styledComponents/Images";
import { StyledWrapper } from "../../styledComponents/Wrappers";

export const Home = () => {
  return (
    <>
      <StyledWrapper
        height="180%"
        url="url(https://img.freepik.com/free-vector/scene-zoo-park-with-pond-field_1308-34955.jpg?w=2000)"
      >
        <Link to="/animals">
          <StyledButton width="300px" transform="scale(110%)">
            Besök djuren!
          </StyledButton>
        </Link>
      </StyledWrapper>
    </>
  );
};
