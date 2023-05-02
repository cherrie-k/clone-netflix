import styled from "styled-components";

const LinksBox = styled.div`
  display: grid;
  background-color: pink;
`;

const EachLink = styled.div`
  padding: 10px 0px;
  color: darkgray;
  text-decoration: underline;
`;

export default function ConnectLinks() {
  return (
    <LinksBox>
      <EachLink>자주 묻는 질문</EachLink>
      <EachLink>고객 센터</EachLink>
      <EachLink>계정</EachLink>
      <EachLink>미디어 센터</EachLink>
      <EachLink>투자 정보(IR)</EachLink>
      <EachLink>입사 정보</EachLink>
      <EachLink>넷플릭스 지원 디바이스</EachLink>
      <EachLink>이용 약관</EachLink>
    </LinksBox>
  );
}
