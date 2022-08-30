import styled from "styled-components";
export default function Tooltip({
  children,
  text,
  width,
}: {
  children: React.ReactNode;
  text: string;
  width?: number;
}) {
  return (
    <ButtonsContainer>
      <Children>{children}</Children>
      <TooltipContainer
        style={{
          width: width ? `${width}px` : "88px",
          left: width ? `calc(50% - ${width / 2}px)` : `calc(50% - 44px)`,
        }}
      >
        <TooltipText>{text}</TooltipText>
      </TooltipContainer>
    </ButtonsContainer>
  );
}
const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
`;
const Children = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TooltipContainer = styled.div`
  background: #424242;
  position: absolute;
  height: 20px;
  width: 88px;
  border-radius: 3px;
  display: flex;
  top: -30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 5;
  left: calc(50% - 44px);
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  ::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 50%;
    margin-left: -9px;
    width: 15px;
    height: 9px;
    background: #424242;
    transform: rotate(45deg);
  }
  ${Children}:hover ~ & {
    opacity: 1;
  }
`;
const TooltipText = styled.p`
  font-size: 10px;
  line-height: 10px;
  text-align: center;
  color: #ffffff;
  z-index: 10;
`;
