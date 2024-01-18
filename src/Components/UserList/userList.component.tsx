import './userList.styles.scss';    
import User from "../user/user.component";
interface IuserListProps {
  userList: any;
}

const Userlist = ({ userList }: IuserListProps) => {
  return (
    <div className="userlist">
      {userList.map((user: any) => (
        <User userObj={user} />
      ))}
    </div>
  );
};


export default Userlist;