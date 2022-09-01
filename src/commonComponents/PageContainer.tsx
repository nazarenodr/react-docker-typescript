import styled from "styled-components";
import Logo from "../assets/img/logomin.svg";
import { THEME } from "../helpers/theme";

export default function PageContainer({ children }: any) {

  return (
    <MainContainer>
      <TopContainer>
        <IconContainer>
          <img src={Logo} alt="logo" />
        </IconContainer>
      </TopContainer>
      {children}
    </MainContainer>
  );
  
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 50px;
  background: ${THEME.colors.white};
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.13);
  border-radius: 6px;
  padding: 60px 10px 25px 10px;
  position: relative;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 65px;
  border-radius: 5px;
  background-color: ${THEME.colors.primary};
  color: ${THEME.colors.white};
  position: absolute;
  top: -32.5px;
  left: 20px;
  img {
    width: 40px;
    height: 40px;
  }
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;
