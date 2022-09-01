import styled from "styled-components";
import { THEME } from "../helpers/theme";

export default function Button({
  children,
  onClick,
  type,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  type: string;
}) {
  return (
    <ButtonContainer color={type} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
}

const ButtonContainer = styled.button`
  background-color: ${({ color }: { color: string }) => {
    switch (color) {
      case "primary":
        return THEME.colors.primary;
      case "secondary":
        return THEME.colors.white;
      case "disabled":
        return THEME.colors.disabled;
      case "back":
        return THEME.colors.backButton;
      default:
        return THEME.colors.primary;
    }
  }};
  color: ${({ color }: { color: string }) => {
    switch (color) {
      case "primary":
        return THEME.colors.white;
      case "secondary":
        return THEME.colors.primary;
      default:
        return THEME.colors.white;
    }
  }};
  border: ${({ color }: { color: string }) => {
    switch (color) {
      case "primary":
        return "none";
      case "secondary":
        return `1px solid ${THEME.colors.primary}`;
      default:
        return "none";
    }
  }};
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 15px;
  line-height: 15px;
  padding: 20px 30px;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s;
  :focus {
    outline: none;
  }
  @media (max-width: 768px) {
    padding: 15px 30px;
    font-size: 13px;
    line-height: 13px;
  }
`;
