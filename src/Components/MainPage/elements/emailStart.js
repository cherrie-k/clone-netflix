import styled from "styled-components";

const StartBox = styled.div`
  height: 50px;
  display: flex;
  flex-wrap: wrap;

  input {
    padding: 0 15px;
    height: 100%;
    width: 300px;
    margin-right: 5px;
    border: solid 0.5px rgba(173, 175, 176, 0.7);
    border-radius: 6px;
    background-color: rgba(0, 0, 0, 0.7);
    font-size: 23px;
    margin-bottom: 10px;
  }

  button {
    width: 150px;
    height: 100%;
    border-radius: 6px;
    background: var(--netflix-red);
    color: white;
    font-size: 23px;
    @media screen and (max-width: 720px) {
      font-size: 18px;
    }
  }
`;

export default function EmailStart() {
  return (
    <StartBox>
      <input placeholder="이메일 주소"></input>
      <button>시작하기&gt;</button>
    </StartBox>
  );
}
