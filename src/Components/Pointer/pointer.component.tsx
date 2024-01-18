import './pointer.styles.scss';
import { useContext, useEffect, useState } from "react";
import Userlist from "../UserList/userList.component";
import { userListVisibility } from "../../Context/list.context";
import { UserContext } from "../../Context/user.context";
import { SelectedListContext } from "../../Context/Selected.context";

const Pointer: React.FC = () => {
  const [values, setvalues] = useState("");
  // Sets the visibility of the userlist when click on the input field
  const { userListVisible, setUserListVisible } =
    useContext(userListVisibility);
  // Gets the userlist from the context
  const { userList, setUserList, filteredUser, setFilteredUser } =
    useContext(UserContext);
  // Gets the highlighted status from the context
  const { isHighlighted, setHighlighted } = useContext(SelectedListContext);

  const { selectedList } = useContext(SelectedListContext);
  const setUserListVisibleTrue = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setUserListVisible(true);
  };

  useEffect(() => {
    const filteredUserlist = userList.filter((user: any) =>
      user.name.toLowerCase().includes(values.toLowerCase()),
    );
    setFilteredUser(filteredUserlist);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values, userList]);

  const handleValue = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && values === "") {
      let updated = isHighlighted + 1;
      if (updated === 2) {
        setUserList([...userList, selectedList[selectedList.length - 1]]);
      }
      setHighlighted(updated);
    }
  };

  const handleBackSpace = (e: React.ChangeEvent<HTMLInputElement>) => {
    setvalues(e.target.value);
    setUserList(userList);
  };

  return (
    <div className="pointer" onClick={setUserListVisibleTrue}>
      <input
        type="text"
        className="user-input"
        placeholder="Add new user"
        value={values}
        onKeyDown={(e) => handleValue(e)}
        onChange={(e) => handleBackSpace(e)} // Pass the event to the function
      />
      {userListVisible ? <Userlist userList={filteredUser} /> : null}
    </div>
  );
};
export default Pointer;
