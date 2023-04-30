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
        질문이 있으신가요? 문의 전화:{" "}
        <a href="tel:+0800019587" style={{ color: "darkgray" }}>
          080-001-9587
        </a>
      </div>
    </BottomBlockBox>
  );
}
