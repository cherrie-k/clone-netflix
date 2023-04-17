import styled from "styled-components";

const TempDiv = styled.div`
  min-height: 1px;
  min-width: 200px;
  max-width: 500px;
  overflow: hidden;
`;

const MainPageBlock = styled.section`
  margin: 0 auto;
  width: 1024px;
  height: 100%;
  padding: 80px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;

export default function TempDetail() {
  return (
    <>
      <main>
        <MainPageBlock style={{ background: "beige" }}>
          <TempDiv>
            If you&apos;re looking for random paragraphs, you&apos;ve come to
            the right place. When a random word or a random sentence isn&apos;t
            quite enough, the next logical step is to find a random paragraph.
            We created the Random Paragraph Generator with you in mind. The
            process is quite simple. Choose the number of random paragraphs
            you&apos;d like to see and click the button. Your chosen number of
            paragraphs will instantly appear. While it may not be obvious to
            everyone, there are a number of reasons creating random paragraphs
            can be useful. A fsew examples of how some people use this generator
            are listed in the following paragraphs.
          </TempDiv>
        </MainPageBlock>
      </main>
      <main style={{ background: "pink" }}>
        <MainPageBlock style={{ background: "lightblue" }}>
          <TempDiv>
            If you&apos;re looking for random paragraphs, you&apos;ve come to
            the right place. When a random word or a random sentence isn&apos;t
            quite enough, the next logical step is to find a random paragraph.
            We created the Random Paragraph Generator with you in mind. The
            process is quite simple. Choose the number of random paragraphs
            you&apos;d like to see and click the button. Your chosen number of
            paragraphs will instantly appear. While it may not be obvious to
            everyone, there are a number of reasons creating random paragraphs
            can be useful. A fsew examples of how some people use this generator
            are listed in the following paragraphs.
          </TempDiv>
        </MainPageBlock>
      </main>
      <main>
        <MainPageBlock style={{ background: "lightgreen" }}>
          <TempDiv>
            If you&apos;re looking for random paragraphs, you&apos;ve come to
            the right place. When a random word or a random sentence isn&apos;t
            quite enough, the next logical step is to find a random paragraph.
            We created the Random Paragraph Generator with you in mind. The
            process is quite simple. Choose the number of random paragraphs
            you&apos;d like to see and click the button. Your chosen number of
            paragraphs will instantly appear. While it may not be obvious to
            everyone, there are a number of reasons creating random paragraphs
            can be useful. A fsew examples of how some people use this generator
            are listed in the following paragraphs.
          </TempDiv>
        </MainPageBlock>
      </main>
    </>
  );
}
