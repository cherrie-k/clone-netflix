import styled from "styled-components";
import Login from "../Components/LoginPage/Login";

const BackgroundImg = styled.div`
  background-image: url("https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/e126bdcb-28c1-441d-9fb4-0b1e5ef86f11/KR-ko-20230417-popsignuptwoweeks-perspective_alpha_website_small.jpg");
  position: relative;
  width: 100%;
`;

const LoginPageBox = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export default function LoginPage() {
  return (
    <BackgroundImg>
      <LoginPageBox>
        <img
          src={`${process.env.PUBLIC_URL}/Netflix_Logo_PMS.png`}
          alt="Netflix"
          width="180px;"
          style={{ filter: "contrast(120%)" }}
        />
        <Login />
      </LoginPageBox>
    </BackgroundImg>
  );
}
