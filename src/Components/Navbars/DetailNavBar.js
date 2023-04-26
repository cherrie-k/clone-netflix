import styled from "styled-components";

const NavBlock = styled.nav`
  width: 100%;
  background-color: gainsboro; /*white*/
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 30px;
  padding: 1rem 8.4rem;
  position: fixed;
  height: 70px;

  a {
    display: flex;
    color: red;
    height: 100%;
  }
`;

export default function DetailNavBar() {
  return (
    <NavBlock>
      <a href="/host/homes">당신의 공간을 에어비앤비하세요</a>
    </NavBlock>
  );
}
