import styled from "styled-components";
import Login from "../Components/LoginPage/Login";

const BackgroundImg = styled.div`
  background-image: url("https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/e126bdcb-28c1-441d-9fb4-0b1e5ef86f11/KR-ko-20230417-popsignuptwoweeks-perspective_alpha_website_small.jpg");
  background-size: cover;
  position: relative;
  width: 100%;
`;

const Overlay = styled.div`
  background: rgba(0, 8, 29, 0.7);
  width: 100%;
  height: 100%;
`;

export default function LoginPage() {
  return (
    <BackgroundImg>
      <Overlay>
        <Login />
      </Overlay>
    </BackgroundImg>
  );
}
