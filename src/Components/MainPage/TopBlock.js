import styled from "styled-components";
import MainNavBar from "./MainNavBar";
import MainDescribe from "./elements/MainDescribe";

const BackgroundImg = styled.div`
  background-image: url("https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/e126bdcb-28c1-441d-9fb4-0b1e5ef86f11/KR-ko-20230417-popsignuptwoweeks-perspective_alpha_website_large.jpg");
  width: 100%;
  height: 100%;
`;

const TopBlockBox = styled.div`
  width: 100%;
  top: 0px;
  background: linear-gradient(to right, rgba(0, 8, 29, 1), rgba(0, 8, 29, 0.3));
  padding-bottom: 100px;
`;

export default function TopBlock() {
  return (
    <>
      <BackgroundImg>
        <TopBlockBox>
          <MainNavBar />
          <MainDescribe />
        </TopBlockBox>
      </BackgroundImg>
    </>
  );
}
