import { createContext, useState } from "react";

interface INotificationsContext {
  notification: {
    isVisible: boolean;
    titleNotification: string;
    contentNotification: string;
    theme: string;
  };
  setNotification: (notification: {
    isVisible: boolean;
    titleNotification: string;
    contentNotification: string;
    theme: string;
  }) => void;
}

const notificationsContext = createContext<INotificationsContext>({
  notification: {
    isVisible: false,
    titleNotification: "",
    contentNotification: "",
    theme: "",
  },
  setNotification: () => {},
});

const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
  const [notification, setNotification] = useState({
    isVisible: false,
    titleNotification: "",
    contentNotification: "",
    theme: "",
  });
  return (
    <notificationsContext.Provider
      value={{
        notification,
        setNotification,
      }}
    >
      {children}
    </notificationsContext.Provider>
  );
};

export { NotificationProvider, notificationsContext };
