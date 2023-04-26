import styled from "styled-components";

const DescBox = styled.div`
  padding: 110px;
  color: white;
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
    background: #e50914;
    color: white;
    font-size: x-large;
  }
`;

export default function MainDescribe() {
  return (
    <DescBox>
      <div style={{ fontWeight: "900", fontSize: "60px", padding: "8px" }}>
        영화와 시리즈를
      </div>
      <div style={{ fontWeight: "900", fontSize: "60px", padding: "8px" }}>
        무제한으로.
      </div>
      <div style={{ fontSize: "22px", padding: "15px 8px" }}>
        다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.
      </div>
      <div style={{ fontSize: "large", padding: "20px 8px" }}>
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
