import { createContext, useState } from "react";

interface IUserContext {
  userState: {
    user: any | undefined;
  };
  setUserState: (userState: any) => void;
}

const userContext = createContext<IUserContext>({
  userState: {
    user: undefined,
  },
  setUserState: () => {},
});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userState, setUserState] = useState({
    user: undefined,
  });
  return (
    <userContext.Provider
      value={{
        userState,
        setUserState,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export { UserProvider, userContext };
