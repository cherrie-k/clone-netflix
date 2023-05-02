import styled from "styled-components";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";
import { useState } from "react";

const LoginBox = styled.div`
  margin-top: 10px;
  align-self: center;
  background-color: rgba(0, 0, 0, 0.7);
  width: 285px;
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
    padding-top: 80px;
    color: var(--cool-gray);
    font-size: 0.9em;

    #join {
      padding-left: 5px;
      color: white;
      text-decoration: none;
      :hover {
        text-decoration: underline;
      }
    }
  }

  h3 {
    font-size: 0.7em;
    color: var(--cool-gray);
    word-break: keep-all;
    padding-top: 18px;
    line-height: 1.2em;
    font-weight: bold;
  }

  .learn {
    display: inline;
    color: #0071eb;
    margin-left: 2px;

    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  a {
    text-decoration: none;
    color: #0071eb;
    :hover {
      text-decoration: underline;
    }
  }
`;

export default function Login() {
  const [show, setShow] = useState(false);

  const handleSetshow = (e) => {
    setShow(!show);
  };

  return (
    <LoginBox>
      <h1>로그인</h1>
      <LoginForm />
      <div className="join">
        Netflix 회원이 아닌가요?
        <Link to="/" id="join">
          지금 가입하세요
        </Link>
        .
      </div>
      <h3>
        이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을
        확인합니다.
        {!show && (
          <div onClick={handleSetshow} className="learn">
            자세히 알아보기.
          </div>
        )}
      </h3>
      {show && (
        <h3>
          Google reCAPTCHA가 수집하는 정보에는 Google{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noreferrer noopener"
          >
            개인정보처리방침
          </a>
          과{" "}
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noreferrer noopener"
          >
            서비스 약관
          </a>
          이 적용되며, 해당 정보는 reCAPTCHA 서비스 제공, 관리 및 개선과
          일반적인 보안 유지에 사용됩니다(Google의 개인 맞춤 광고에 사용 안 함).
        </h3>
      )}
    </LoginBox>
  );
}
