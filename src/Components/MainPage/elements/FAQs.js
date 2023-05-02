import styled from "styled-components";
import { VscAdd } from "react-icons/vsc";

const FAQsBlock = styled.div`
  h1 {
    font-size: 2.4em;
    font-weight: bold;
    padding-bottom: 15px;
  }
`;

const EachQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #132144;
  transition: 0.2s;
  margin-top: 8px;
  padding: 25px;
  font-size: 1.4em;
  cursor: pointer;

  :hover {
    transition: 0.2s;
    background-color: #223362;
    .plus {
      transform: rotate(45deg);
    }
  }
`;

export default function FAQs() {
  return (
    <FAQsBlock>
      <h1>자주 묻는 질문</h1>
      <EachQuestion>
        <span>넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?</span>
        <VscAdd className="plus" />
      </EachQuestion>
      <EachQuestion>
        <span>넷플릭스란 무엇인가요?</span>
        <VscAdd className="plus" />
      </EachQuestion>
    </FAQsBlock>
  );
}
