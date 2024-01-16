import './searchingPanel.styles.scss';
import Pointer from '../Pointer/pointer.component';
import Userlist from '../UserList/userList.component';
import { useState } from 'react';

const SearchingPanel = () => {
    return (
        <div className="SearchingPanel">
            <Pointer/>
            <Userlist/>
        </div>
    )
}


export default SearchingPanel;