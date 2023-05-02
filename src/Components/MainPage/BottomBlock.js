import FAQs from "./elements/FAQs";
import EmailStart from "./elements/emailStart";
import ConnectLinks from "./elements/ConnectLinks";
import styled from "styled-components";

const BottomBlockBox = styled.div`
  color: white;
  padding: 100px 120px;
`;

export default function BottomBlock() {
  return (
    <BottomBlockBox>
      <FAQs />
      <EmailStart />
      <div
        style={{ marginTop: "110px", marginBottom: "46px", color: "darkgray" }}
      >
        질문이 있으신가요? 문의 전화:{" "}
        <a href="tel:+0800019587" style={{ color: "darkgray" }}>
          080-001-9587
        </a>
      </div>
      <ConnectLinks />
    </BottomBlockBox>
  );
}
