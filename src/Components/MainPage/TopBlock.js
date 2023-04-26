import styled from "styled-components";
import MainNavBar from "./MainNavBar";
import MainDescribe from "./MainDescribe";

const BackgroundBox = styled.div`
  background: url("https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/e126bdcb-28c1-441d-9fb4-0b1e5ef86f11/KR-ko-20230417-popsignuptwoweeks-perspective_alpha_website_large.jpg");
`;

const TopBlockBox = styled.div`
  background-color: pink;
  width: 100%;
  top: 0px;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2));
`;

export default function TopBlock() {
  return (
    <>
      <BackgroundBox>
        <TopBlockBox>
          <MainNavBar />
          <MainDescribe />
        </TopBlockBox>
      </BackgroundBox>
    </>
  );
}
