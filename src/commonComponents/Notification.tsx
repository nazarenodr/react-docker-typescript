import styled from "styled-components";
import { useEffect, useContext } from "react";
import { notificationsContext } from "../context/notificationsContext";
import CloseNotificationIcon from "../assets/img/closeNotificationIcon.svg";

const colors: any = {
  success: "#78CD80",
  error: "#FF490F",
  warning: "#FFB953",
};

export default function Notification() {
  const { notification, setNotification } = useContext(notificationsContext);
  useEffect(() => {
    if (notification.isVisible) {
      setTimeout(() => {
        setNotification({
          ...notification,
          isVisible: false,
        });
      }, 3000);
    }
  }, [notification, setNotification]);

  function handleCloseNotification() {
    setNotification({
      ...notification,
      isVisible: false,
    });
  }

  return (
    <NotificationContainer
      style={{
        right: notification.isVisible ? "16px" : "-490px",
        backgroundColor: colors[notification.theme],
      }}
    >
      <NotificationText>
        <TitleContainer>{notification.titleNotification}</TitleContainer>
        <TitleContainer>-</TitleContainer>
        {notification.contentNotification}
      </NotificationText>
      <CloseNotificationIconContainer onClick={handleCloseNotification}>
        <img src={CloseNotificationIcon} alt="close notification" />
      </CloseNotificationIconContainer>
    </NotificationContainer>
  );
}

const NotificationContainer = styled.div`
  width: 480px;
  height: 44px;
  padding: 15px 15px;
  border-radius: 5px;
  top: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  z-index: 40;
  font-size: 14px;
  line-height: 14px;
  color: #ffffff;
  transition: right 0.3s ease-in-out;
  @media (max-width: 768px) {
    max-width: calc(100vw - 32px);
    padding: 6px 15px;
    height: auto;
  }
`;

const NotificationText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 6px;
  @media (max-width: 768px) {
    font-size: 10px;
    line-height: 10px;
    flex-direction: column;
    align-items: flex-start;
  }
`;
const TitleContainer = styled.p`
  font-size: 14px;
  line-height: 14px;
  color: #ffffff;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 12px;
    &:nth-child(2) {
      display: none;
    }
  }
`;
const CloseNotificationIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 16px;
  top: 18px;
  cursor: pointer;
`;
