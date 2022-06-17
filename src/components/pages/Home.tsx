import { Link } from "react-router-dom";
import { StyledButton } from "../../styledComponents/Buttons";
import { StyledWrapper } from "../../styledComponents/Wrappers";

export const Home = () => {
  return (
    <>
      <StyledWrapper
        height="180%"
        url="url(https://img.freepik.com/free-vector/scene-zoo-park-with-pond-field_1308-34955.jpg?w=2000)"
      >
        <Link to="/animals">
          <StyledButton
            fontsize="28px"
            width="300px"
            transform="scale(110%)"
            backgroundColor="rgba(0, 215, 85, 0.8)"
            color="white"
          >
            Besök djuren!
          </StyledButton>
        </Link>
      </StyledWrapper>
    </>
  );
};
