import styled from "styled-components";
import { Link } from "react-router-dom";
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
    transition: 0.25s;
    background: var(--netflix-red);
    padding: 6px 15px;
    margin-left: 16px;
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 0.8em;
    text-decoration: none;

    :hover {
      transition: 0.25s;
      cursor: pointer;
      background: #c11119;
    }
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
        <Link to="/login" className="login-button">
          로그인
        </Link>
      </RightBox>
    </NavBlock>
  );
}
