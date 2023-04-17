import "./NavBarStyle.css";
import styled from "styled-components";

const SelectBlock = styled.div`
  display: flex;
  background: red;
`;

const PriceBlock = styled.div`
  display: flex;
`;

const ReviewBlock = styled.div`
  display: flex;
`;

export default function DetailSecondNav() {
  return (
    <nav className="nav-second" style={{ display: "flex" }}>
      <SelectBlock>
        <button>사진</button>
        <button>편의시설</button>
        <button>후기</button>
        <button>위치</button>
      </SelectBlock>
      <div>
        <PriceBlock>
          <div>$80,372</div>
          <div>/박</div>
        </PriceBlock>
        <ReviewBlock>
          <div>★4.81·</div>
          <button>후기54개</button>
        </ReviewBlock>
      </div>
      <button>예약하기</button>
    </nav>
  );
}
