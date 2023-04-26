import styled from "styled-components";
import { VscGlobe } from "react-icons/vsc";

const NavBlock = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 1.3rem;
  align-items: center;
`;

const RightBox = styled.div`
  padding-right: 30px;

  .lang {
    padding: 6px 15px;
    border: solid 1px gainsboro;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
  }

  .login-button {
    background: #e50914;
    padding: 6px 15px;
    color: white;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    margin-left: 16px;
  }
`;

export default function MainNavBar() {
  return (
    <NavBlock>
      <img
        src={`${process.env.PUBLIC_URL}/Netflix_Logo_PMS.png`}
        alt="Netflix"
        height="70px;"
      />
      <RightBox>
        <select className="lang">
          <option value="korean">
            <div>한국어</div>
          </option>
          <option value="english">English</option>
        </select>
        <button className="login-button">로그인</button>
      </RightBox>
    </NavBlock>
  );
}
