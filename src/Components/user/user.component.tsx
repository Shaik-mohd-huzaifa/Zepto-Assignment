import React, { useContext, useEffect } from "react";
import "./user.styles.scss";
import { SelectedListContext } from "./../../Context/Selected.context";
import { UserContext } from "../../Context/user.context";

interface UserProps {
  userObj?: any;
}

const User: React.FC<UserProps> = ({ userObj }) => {
  const { selectedList, setSelectedList } = useContext(SelectedListContext);
  const { userList, setUserList } = useContext(UserContext);

  // Removes the user from the userlist and adds it to the selected list that displays the selected users
  const handleUserClick = () => {
    const update = userList.filter((user: any) => user.id !== userObj.id);
    setUserList(update);
    setSelectedList([...selectedList, userObj]);
  };

  return (
    <div>
      <div className="user" onClick={handleUserClick}>
        <img
          src={`https://robohash.org/${userObj.name}?set=set1&size=50x50`}
          alt="user"
          className="user-img"
        />
        <div className="user-info">
          <div className="user-name">{userObj.name}</div>
          <div className="user-email">{userObj.email}</div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default User;
