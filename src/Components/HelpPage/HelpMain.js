import styled from "styled-components";

const HelpMainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px;

  .back {
    align-self: flex-start;
    font-size: 0.8em;
    padding-bottom: 30px;
    color: red;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }

  .garo {
    border: solid 1px gainsboro;
    width: 100%;
    margin: 35px 0;
  }
`;

const DescBox = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.8em;
    font-weight: bold;
    padding-bottom: 24px;
  }

  h2 {
    font-size: 1.2em;
    font-weight: bold;
    padding-bottom: 30px;
  }

  span {
    color: red;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
`;

const SentenceBox = styled.div`
  line-height: 1.3em;
  font-size: 0.9em;
  padding: 10px 0;
  max-width: 780px;
`;

export default function HelpMain() {
  return (
    <HelpMainBox>
      <div className="back">← 고객 센터 홈으로 돌아가기</div>
      <DescBox>
        <h1>넷플릭스 소개</h1>
        <img
          src="https://help.nflxext.com/43e0db2f-fea0-4308-bfb9-09f2a88f6ee4_what_is_netflix_1_en.png"
          alt="img"
          width="100%"
          style={{ maxWidth: "800px", paddingBottom: "10px" }}
        />
        <SentenceBox>
          넷플릭스는 시리즈와 영화를 인터넷 연결 지원 디바이스에서 시청할 수
          있는 멤버십 기반 <span>스트리밍 서비스</span>입니다.
        </SentenceBox>
        <SentenceBox>
          또한 <span>멤버십에 따라</span> iOS, Android 또는 Windows 10
          디바이스에서 <span>시리즈 및 영화를 저장</span>하여 인터넷 연결 없이
          시청할 수도 있습니다.
        </SentenceBox>
        <SentenceBox>
          이미 넷플릭스에 가입했으며 이용 방법에 대해 자세히 알고자 하는 경우
          <span>넷플릭스 시작하기</span>를 참조하세요.
        </SentenceBox>
      </DescBox>
      <div className="garo" />
      <DescBox>
        <h2>시리즈 및 영화</h2>
        <img
          src="https://help.nflxext.com/396a2a39-8d34-4260-b07a-6391fe04ded5_what_is_netflix_2_en.png"
          alt="img"
          width="100%"
          style={{ maxWidth: "800px", paddingBottom: "10px" }}
        />
        <SentenceBox>
          넷플릭스 콘텐츠는 지역에 따라 다르며 시간이 지나면 변경될 수 있습니다.
          넷플릭스에서는{" "}
          <span>
            수상 경력에 빛나는 넷플릭스 오리지널, 시리즈, 영화 및 다큐멘터리 등
          </span>{" "}
          다양한 콘텐츠를 시청할 수 있습니다.
        </SentenceBox>
        <SentenceBox>
          시청 시간이 늘어날수록 넷플릭스의 시리즈 및 영화 <span>추천</span>{" "}
          정확도도 올라갑니다.
        </SentenceBox>
        <div className="garo" />
      </DescBox>
    </HelpMainBox>
  );
}
