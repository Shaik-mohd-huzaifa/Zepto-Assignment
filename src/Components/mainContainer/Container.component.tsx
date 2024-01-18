import './Container.styles.scss';
import { useContext } from 'react';
import SearchingPanel from '../SearchingPanel/searchingPanel.Component';
import { userListVisibility } from '../../Context/list.context';
import SelectedList from '../selectedList/selectedList.component';
import { SelectedListContext } from '../../Context/Selected.context';

const Container: React.FC = () => {
    const { setUserListVisible } = useContext(userListVisibility);
    const {selectedList} = useContext(SelectedListContext)
    
    // Stoping Event Bubbling/Propogation When Clicking on the Container
    const setUserListVisibleFalse = (e: React.MouseEvent) => {
        e.stopPropagation();
    setUserListVisible(false);    
    }
    
    return (
        <div className="Container" onClick={setUserListVisibleFalse}>
            <div className="toplist">
            {selectedList && <SelectedList />}
            <SearchingPanel />
            </div>
        </div>
    );
};

export default Container;
