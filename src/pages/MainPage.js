import TopBlock from "../Components/MainPage/TopBlock";
import MiddleBlock from "../Components/MainPage/MiddleBlock";
import BottomBlock from "../Components/MainPage/BottomBlock";
import styled from "styled-components";
import FAQs from "../Components/MainPage/FAQs";

const BackgroundBox = styled.div`
  background: rgb(0, 8, 29);
`;

export default function MainPage() {
  return (
    <div className="App">
      <BackgroundBox>
        <TopBlock />
        <MiddleBlock />
        <BottomBlock />
      </BackgroundBox>
    </div>
  );
}
