import { createContext, useEffect, useState } from "react";

export const userListVisibility = createContext({
  userListVisible: false,
  setUserListVisible: (userListVisible: boolean) => {},
});

interface IUserListVisibilityProviderProps {
  children: React.ReactNode;
}

export const UserListVisibilityProvider = ({
  children,
}: IUserListVisibilityProviderProps) => {
  const [userListVisible, setUserListVisible] = useState(false);

  const value = {
    userListVisible: userListVisible,
    setUserListVisible: (userListVisible: boolean) =>
      setUserListVisible(userListVisible),
  };

  return (
    <userListVisibility.Provider value={value}>
      {children}
    </userListVisibility.Provider>
  );
};
