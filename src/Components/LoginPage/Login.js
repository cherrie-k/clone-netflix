import styled from "styled-components";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";

const LoginBox = styled.div`
  align-self: center;
  background-color: rgba(0, 0, 0, 0.7);
  width: 280px;
  height: 470px;
  padding: 70px 60px;
  color: white;
  border-radius: 5px;

  margin-bottom: 200px;

  h1 {
    padding-bottom: 25px;
    font-size: 1.8em;
  }

  .join {
  }
`;

export default function Login() {
  return (
    <LoginBox>
      <h1>로그인</h1>
      <LoginForm />
      <div>
        Netflix 회원이 아닌가요?
        <Link to="/" className="join">
          지금 가입하세요
        </Link>
      </div>
    </LoginBox>
  );
}
