import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LoginFormBox = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  input {
    background: #333333;
    font-size: 0.9em;
    border: none;
    padding: 13px 15px;
    border-radius: 4px;
  }

  button {
    background: var(--netflix-red);
    font-size: 0.9em;
    border: none;
    padding: 13px 15px;
    border-radius: 4px;
    color: white;
    margin-top: 20px;
    cursor: pointer;
  }

  input[type="checkbox"]::before {
    border: 2px solid black;
    width: 20px;
    height: 20px;
    accent-color: red;
  }

  input[type="checkbox"] {
    width: 15px;
    height: 15px;
    accent-color: #333;
    border: solid #333 2px;
  }

  .check {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: 0.73em;
      color: darkgray;
    }

    .help {
      text-decoration: none;
      :hover {
        cursor: pointer;
        text-decoration: underline;
        color: darkgray;
      }
    }
  }
`;

export default function LoginForm() {
  const [isChecked, setIsChecked] = useState(true);

  // 체크박스가 처음부터 checked이게 함
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <LoginFormBox autoComplete="off">
      <input
        placeholder="이메일 주소 또는 전화번호"
        name="username"
        required=""
        autoComplete="off"
      />
      <input
        placeholder="비밀번호"
        name="password"
        required=""
        autoComplete="off"
      />
      <button type="submit">로그인</button>
      <div className="check">
        <label style={{ display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            value="save-id"
            name="saveId"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span>로그인 정보 저장</span>
        </label>
        <Link to="/" className="help">
          <span>도움이 필요하신가요?</span>
        </Link>
      </div>
    </LoginFormBox>
  );
}
