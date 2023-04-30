import styled from "styled-components";

const StartBox = styled.div`
  div:first-child {
    font-size: 22px;
    padding: 15px 8px;
    line-height: 1.3em;

    @media screen and (max-width: 1000px) {
      font-size: 16px;
      padding: 0px 0px 15px 8px;
      padding: 15px 8px;
    }
  }

  .start {
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
  }
`;

export default function EmailStart() {
  return (
    <>
      <StartBox>
        <div>
          시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를
          입력하세요.
        </div>
        <div className="start">
          <input placeholder="이메일 주소"></input>
          <button>시작하기&gt;</button>
        </div>
      </StartBox>
    </>
  );
}
