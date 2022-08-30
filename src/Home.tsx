import styled from "styled-components";

export default function Home() {
  return (
    <Container>

    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  @media (max-width: 768px) {
    width: 100vw;
    max-width: 100vw;
    overflow-x: hidden;
  }
`;
