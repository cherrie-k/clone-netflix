import EmailStart from "./emailStart";
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
      padding: 15px 0 0px 8px;
    }
    .small {
      font-size: 16px;
      padding: 0px 0px 15px 8px;
    }
  }

  @media screen and (max-width: 500px) {
    .big {
      font-size: 30px;
    }
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
      <EmailStart />
    </DescBox>
  );
}
