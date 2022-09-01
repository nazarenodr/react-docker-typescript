import styled, { keyframes } from "styled-components";
import Logo from "../assets/img/logomin.svg";
import { THEME } from "../helpers/theme";

export default function Modal({
  children,
  title,
}: {
  children?: React.ReactNode;
  title?: string;
}) {
  return (
    <ModalBackground>
      <ModalContainer>
        <IconContainer>
          <img src={Logo} alt="Logo" />
        </IconContainer>
        <Title>{title}</Title>
        {children}
      </ModalContainer>
    </ModalBackground>
  );
}
const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 261px;
  width: calc(100% - 261px);
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 30;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${FadeIn} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  @media (max-width: 768px) {
    left: 0px;
    width: 100vw;
  }
`;

const ModalContainer = styled.div`
  background-color: ${THEME.colors.white};
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.13);
  border-radius: 6px;
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
  top: -20px;
  left: 20px;
  img {
    width: 40px;
    height: 40px;
  }
  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    top: -10px;
    left: 10px;
    & > img {
      width: 14px;
      height: 14px;
    }
  }
`;
const Title = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #3c4858;
  position: absolute;
  top: 17px;
  left: 98px;
  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 14px;
    position: relative;
    top: auto;
    left: auto;
    padding: 40px 0 0 10px;
    font-size: 12px;
    line-height: 14px;
    color: ${THEME.colors.primary};
  }
`;
