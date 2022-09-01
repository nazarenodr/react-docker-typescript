import styled from "styled-components";
import { Outlet, useNavigate } from "react-router-dom";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import Logo from "../src/assets/img/logo.svg";
import { THEME } from "../src/helpers/theme";

const urls: object[] = [
  {
    name: "Inicio",
    path: "/",
  },
  {
    name: "Link 1",
    path: "/link1",
  },
  {
    name: "Link 2",
    path: "/link2",
  },
  {
    name: "Link 3",
    path: "/link3",
  },
  {
    name: "Link 4",
    path: "/link4",
  },
];

export default function Home() {
  const path = window.location.pathname;
  const navigation = useNavigate();
  return (
    <Container>
      <SideBar>
        <BackgroundContainer></BackgroundContainer>
        <ContentContainer>
          <LogoContainer onClick={() => navigation("/")}>
            <img src={Logo} alt="Logo" />
          </LogoContainer>
          <OptionsContainer>
            {urls.map((url: any, index) => {
              return (
                <Item
                  theme={path === url.path ? "active" : "inactive"}
                  onClick={() => navigation(url.path)}
                  key={index}
                >
                  <PeopleAltIcon />
                  <TextItem
                    color={
                      path === url.path
                        ? THEME.colors.primary
                        : THEME.colors.white
                    }
                  >
                    {url.name}
                  </TextItem>
                </Item>
              );
            })}
            <Item theme={"inactive"}>
              <LogoutIcon />
              <TextItem color={THEME.colors.white}>{"Cerrar Sesión"}</TextItem>
            </Item>
          </OptionsContainer>
        </ContentContainer>
      </SideBar>
      <Main>
        <Outlet />
      </Main>
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
const SideBar = styled.div`
  width: 261px;
  min-width: 60px;
  height: 100%;
  overflow-x: hidden;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 6;
  @media (max-width: 768px) {
    display: none;
  }
`;
const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${THEME.colors.bgSideBar};
  position: absolute;
  z-index: -1;
  filter: brightness(0.6);
  @media (max-width: 768px) {
    width: 230px;
  }
`;
const ContentContainer = styled.div`
  width: 230px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 768px) {
    padding: 0px 10px;
  }
`;
const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 29px 15px 20px;
  border-bottom: 1px solid rgba(181, 181, 181, 0.3);
  cursor: pointer;
  @media (max-width: 768px) {
    width: 230px;
    padding: 15px 15px 15px;
  }
`;
const Main = styled.div`
  width: calc(100% - 261px);
  display: flex;
  flex-direction: column;
  margin-left: 261px;
  position: relative;
  justify-content: space-between;
  min-height: 100vh;
  padding: 20px;
  @media (max-width: 768px) {
    width: 100vw;
    margin-left: 0;
    padding: 0px;
  }
`;
const OptionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 9px;
  margin-top: 14px;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 46px;
  color: ${(props) =>
    props.theme === "active" ? THEME.colors.primary : THEME.colors.white};
  padding: 16px 10px;
  background-color: ${(props) =>
    props.theme === "active" ? THEME.colors.white : "rgba(255, 255, 255, 0)"};
  gap: 22px;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    background: ${(props) =>
      props.theme === "active"
        ? THEME.colors.white
        : "rgba(255, 255, 255, 0.2)"};
  }
`;
const TextItem = styled.p`
  font-size: 14px;
  line-height: 14px;
  color: ${(props) => props.color};
  user-select: none;
`;
