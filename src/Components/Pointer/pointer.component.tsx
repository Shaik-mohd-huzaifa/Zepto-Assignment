import './pointer.styles.scss';
import Userlist from '../UserList/userList.component';
import { useState } from 'react';



const Pointer  = () => {
    const [userListVisible, setUserListVisible] = useState(false);
    
    function showUserList() {
        setUserListVisible(true);
    }

    function hideList(){
        setUserListVisible(false);
    }

    return (
        <div className="pointer">
            <input type="text" className='user-input' placeholder='Add new user' onFocus={showUserList} onBlur={hideList}/>
            {userListVisible ? <Userlist/> : null}
        </div>
    )
}

export default Pointer;