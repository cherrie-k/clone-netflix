import styled from "styled-components";

const MiddleBox = styled.div`
  background: linear-gradient(
    to bottom right,
    #9c0b22,
    #01093c,
    #000235,
    #000235
  );
  padding: 20px 100px;
  margin: 0 3rem;
  border-radius: 12px;
  color: white;

  margin-top: -100px;
`;

const ContentBox = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 0;

  h1 {
    font-size: 42px;
    font-weight: bold;
    line-height: 1.2em;
    padding-bottom: 15px;
  }

  h2 {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.3em;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
    h1 {
      font-size: 36px;
    }
    h2 {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;
    h1 {
      font-size: 28px;
    }
  }
`;

const Line = styled.div`
  background: #000a2d;
  width: 100%;
  height: 6px;
`;

export default function MiddleBlock() {
  return (
    <>
      <MiddleBox>
        <ContentBox>
          <div>
            <h1>TV로 즐기세요.</h1>
            <h2>
              스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이
              플레이어 등 다양한 디바이스에서 시청하세요.
            </h2>
          </div>
          <div>
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/enjoyOnTv/en.png"
              alt="img"
              width="100%"
              style={{ minWidth: "240px" }}
            />
          </div>
        </ContentBox>
        <Line />
        <ContentBox>
          <div>
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/watchEverywhere/en.png"
              alt="img"
              width="100%"
              style={{ minWidth: "240px" }}
            />
          </div>
          <div>
            <h1>다양한 디바이스에서 시청하세요.</h1>
            <h2>
              각종 영화와 시리즈를 스마트폰, 태블릿, 노트북, TV에서 무제한으로
              스트리밍하세요. 추가 요금이 전혀 없습니다.
            </h2>
          </div>
        </ContentBox>
        <Line />
        <ContentBox>
          <div>
            <h1>어린이 전용 프로필을 만들어 보세요.</h1>
            <h2>
              자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험. 자녀에게
              이 특별한 경험을 선물하세요. 넷플릭스 회원이라면 무료입니다.
            </h2>
          </div>
          <div>
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/kids/ko.png"
              alt="img"
              width="100%"
              style={{ minWidth: "240px" }}
            />
          </div>
        </ContentBox>
        <Line />
        <ContentBox>
          <div>
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/download/ko.png"
              alt="img"
              width="100%"
              style={{ minWidth: "240px" }}
            />
          </div>
          <div>
            <h1>즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요.</h1>
            <h2>광고 없는 멤버십에서만 이용 가능합니다.</h2>
          </div>
        </ContentBox>
      </MiddleBox>
    </>
  );
}
