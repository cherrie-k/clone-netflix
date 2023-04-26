import styled from "styled-components";

const BottomBox = styled.div`
  background: linear-gradient(
    to bottom right,
    #9c0b22 1px,
    #01093c 80%,
    #000235 20%,
    #000235
  );
  padding: 20px 120px;
  margin: 30px;
  border-radius: 12px;
  color: white;
`;

const TempDiv = styled.div`
  display: flex;
  align-items: center;
  border: solid 1px black;
`;

export default function BottomBlock() {
  return (
    <>
      <BottomBox>
        <TempDiv>
          <div>
            <div>TV로 즐기세요</div>
            <span>
              스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이
              플레이어 등 다양한 디바이스에서 시청하세요.
            </span>
          </div>
          <div style={{ background: "pink" }}>
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/enjoyOnTv/en.png"
              alt="img"
              width="420px"
            />
          </div>
        </TempDiv>
        <TempDiv>
          <div style={{ background: "pink" }}>
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/watchEverywhere/en.png"
              alt="img"
              width="420px"
            />
          </div>
          <div>
            <div>다양한 디바이스에서 시청하세요.</div>
            <span>
              각종 영화와 시리즈를 스마트폰, 태블릿, 노트북, TV에서 무제한으로
              스트리밍하세요. 추가 요금이 전혀 없습니다.
            </span>
          </div>
        </TempDiv>
        <TempDiv>
          <div>
            <div>어린이 전용 프로필을 만들어 보세요.</div>
            <span>
              자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험. 자녀에게
              이 특별한 경험을 선물하세요. 넷플릭스 회원이라면 무료입니다.
            </span>
          </div>
          <div style={{ background: "pink" }}>
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/kids/ko.png"
              alt="img"
              width="420px"
            />
          </div>
        </TempDiv>
        <TempDiv>
          <div style={{ background: "pink" }}>
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/download/ko.png"
              alt="img"
              width="420px"
            />
          </div>
          <div>
            <div>즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요.</div>
            <span>광고 없는 멤버십에서만 이용 가능합니다.</span>
          </div>
        </TempDiv>
      </BottomBox>
    </>
  );
}
