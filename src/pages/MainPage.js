import TopBlock from "../Components/MainPage/TopBlock";
import MiddleBlock from "../Components/MiddleBlock";
import styled from "styled-components";

const BackgroundBox = styled.div`
  background: rgb(0, 8, 29);
`;

export default function MainPage() {
  return (
    <div className="App">
      <BackgroundBox>
        <TopBlock />
        <MiddleBlock />
      </BackgroundBox>
    </div>
  );
}
