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
  top: 70px;
`;

export default function MainSecondNav() {
  return (
    <NavSecondBlock>
      <button>해변 근처</button>
      <button>최고의 전망</button>
      <button>한옥</button>
      <button>통나무집</button>
      <button>개인실</button>
      <button>기상천외한 숙소</button>
      <button>해변 바로 앞</button>
      <button>한적한 시골</button>
      <button>인기 급상승</button>
      <button>국립공원</button>
      <button>멋진 수영장</button>
      <button>료칸</button>
      <button>저택</button>
      <div
        style={{
          width: "30px",
          height: "30px",
          border: "solid black 1px",
          borderRadius: "50%",
        }}
      >
        {">"}
      </div>
      <div>필터</div>
    </NavSecondBlock>
  );
}
