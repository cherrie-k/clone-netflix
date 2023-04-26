import styled from "styled-components";

const NavSecondBlock = styled.nav`
  width: 100%;
  background-color: lightblue;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 30px;
  padding: 1rem 8.4rem;
  height: 90px;
  position: fixed;
`;

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
    <NavSecondBlock>
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
    </NavSecondBlock>
  );
}
