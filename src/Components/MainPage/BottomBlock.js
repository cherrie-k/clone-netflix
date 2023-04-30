import FAQs from "./FAQs";
import EmailStart from "./elements/emailStart";
import styled from "styled-components";

const BottomBlockBox = styled.div`
  color: white;
  padding: 100px;
`;

export default function BottomBlock() {
  return (
    <BottomBlockBox>
      <FAQs />
      <EmailStart />
      <div style={{ marginTop: "120px", color: "darkgray" }}>
        질문이 있으신가요? 문의 전화: <u>080-001-9587</u>
      </div>
    </BottomBlockBox>
  );
}
