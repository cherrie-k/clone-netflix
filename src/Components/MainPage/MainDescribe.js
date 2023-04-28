import styled from "styled-components";

const DescBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 110px;
  color: white;
  flex-wrap: wrap;

  .big {
    font-weight: 900;
    font-size: 60px;
    padding: 6px;
  }

  .mid {
    font-size: 22px;
    padding: 15px 8px;
  }

  .small {
    font-size: 20px;
    padding: 20px 8px;
  }

  @media screen and (max-width: 1000px) {
    .big {
      font-size: 40px;
      padding: 0px;
    }
    .mid {
      font-size: 16px;
      padding: 10px 8px;
    }
    .small {
      font-size: 16px;
      padding: 10px 8px;
    }
  }

  @media screen and (max-width: 500px) {
    .big {
      font-size: 30px;
    }
  }
`;

const StartBox = styled.div`
  height: 50px;
  display: flex;

  input {
    padding: 0 15px;
    height: 100%;
    width: 300px;
    margin-right: 5px;
    border: solid 1px gainsboro;
    border-radius: 6px;
    background-color: rgba(0, 0, 0, 0.7);
    font-size: large;
  }

  button {
    width: 150px;
    height: 100%;
    border: solid 1px gainsboro;
    border-radius: 6px;
    background: var(--netflix-red);
    color: white;
    font-size: x-large;
  }
`;

export default function MainDescribe() {
  return (
    <DescBox>
      <div className="big">영화, 시리즈 등을</div>
      <div className="big">무제한으로.</div>
      <div className="mid">
        다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.
      </div>
      <div className="small">
        시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를
        입력하세요.
      </div>
      <StartBox>
        <input placeholder="이메일 주소"></input>
        <button>시작하기&gt;</button>
      </StartBox>
    </DescBox>
  );
}
