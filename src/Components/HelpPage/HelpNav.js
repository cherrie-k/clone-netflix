import styled from "styled-components";
import { Link } from "react-router-dom";

const HelpNavBox = styled.div`
  display: flex;
  align-items: center;
  background-color: black;
  color: white;
  height: 38px;
  //font-weight: bold;
  padding: 10px 20px;
  justify-content: space-between;

  .nav-button {
    padding: 10px;
    border-radius: 3px;
    border: solid white 1px;
    font-size: 0.7em;
  }
`;

export default function HelpNav() {
  return (
    <HelpNavBox>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={`${process.env.PUBLIC_URL}/Netflix_Logo_PMS.png`}
          alt="Netflix"
          height="45px;"
          style={{ filter: "contrast(120%)" }}
        />
        <div style={{ fontSize: "16px" }}>| 고객 센터</div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="nav-button">넷플릭스 가입하기</div>
        <div
          className="nav-button"
          style={{
            background: "var(--netflix-red)",
            marginLeft: "14px",
            padding: "10px 28px",
            border: "none",
          }}
        >
          <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
            로그인
          </Link>
        </div>
      </div>
    </HelpNavBox>
  );
}
