import React from 'react';
import cl from "./Sidebar-2.module.css";
import ForFriends from "./forFriends/forFriends";
import ForGroups from "./forGroups/forGroups";


const Sidebar2 = ({main, friends, active, setActive, type, deleteFriend}) => {
    return (
        <div className={cl.sidebar}>
            {type === 'friends' ?
                <ForFriends friendsSchema={friends} active={active} setActive={setActive} main={main} deleteFriend={deleteFriend}/>
                :
                <ForGroups />
            }
        </div>
    );
};

export default Sidebar2;