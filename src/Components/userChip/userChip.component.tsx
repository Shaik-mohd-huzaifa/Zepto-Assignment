import { useContext } from "react";
import { SelectedListContext } from "../../Context/Selected.context";
import { UserContext } from "../../Context/user.context";
interface IUserProps {
  user?: any;
  highlightedStatus?: boolean;
}

const Userchip = ({ user, highlightedStatus }: IUserProps) => {
  const { selectedList, setSelectedList } = useContext(SelectedListContext);
  const { userList, setUserList } = useContext(UserContext);
  const imageUrl = process.env.PUBLIC_URL + "/remove-icon.png";

  // Removes the user from the selected list and adds it to the user list if the user clicks on the remove icon
  const removeUser = () => {
    const updated = selectedList.filter((item: any) => item.id !== user.id);
    setUserList([...userList, user]);
    setSelectedList(updated);
  };

  return (
    <div className={`selectedUser ${highlightedStatus && "highlighted"}`}>
      <img
        src={`https://robohash.org/${user.name}?set=set1&size=50x50`}
        alt="user"
        className="user-img"
      />
      <div className="user-name">{user.name}</div>
      <div className="remove" onClick={removeUser}>
        <img src={imageUrl} alt="no" />
      </div>
    </div>
  );
};

export default Userchip;
