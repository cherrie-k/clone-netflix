import styled from "styled-components";
import { Link } from "react-router-dom";

const LinksBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 100%;
`;

const EachLink = styled(Link)`
  padding: 10px 0px;
  font-size: 0.8em;
  margin: 1px;
  width: 250px;
  color: darkgray;
  text-decoration: underline;

  @media screen and (max-width: 800px) {
    width: 190px;
  }
`;

export default function ConnectLinks() {
  return (
    <LinksBox>
      <EachLink to="/help">자주 묻는 질문</EachLink>
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
