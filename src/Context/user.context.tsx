import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({
  userList: [],
  setUserList: (userList: any) => {},
  filteredUser: [],
  setFilteredUser: (filteredUser: any) => {},
});

interface IUserContextProviderProps {
  children: React.ReactNode;
}

export const UserContextProvider = ({
  children,
}: IUserContextProviderProps) => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUserList(json))
      //   sets the userList to an empty array if the fetch fails
      .catch((err) => setUserList([]));
  }, []);

  const [filteredUser, setFilteredUser] = useState(userList);

  const value = {
    userList: userList,
    setUserList: (userList: any) => setUserList(userList),
    filteredUser: filteredUser,
    setFilteredUser: (filteredUser: any) => setFilteredUser(filteredUser),
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
