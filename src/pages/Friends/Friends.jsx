import React from 'react';
import cl from "./Friends.module.css";
import SidebarProfile from "../../components/sidebar-profile/sidebar-profile";
import SidebarActivity from "../../components/sidebar-activity/sidebar-activity";
import OnlineFriends from "./onlineFriends/OnlineFriends";
import MessageArea from "./messageArea/messageArea";


const Friends = ({me, groups, friends, activeFriend, filter, msgFilter, setActiveFriend, setActiveGroup}) => {
    return (
        <div className={cl.messageAreaWrapper}>
                {activeFriend.id === me.id ?
                    <>
                        <OnlineFriends filter={filter}
                                       friends={friends} groups={groups}
                                       setActiveFriend={setActiveFriend}/>

                        <SidebarActivity friends={friends} groups={groups}
                                         setActiveFriend={setActiveFriend} setActiveGroup={setActiveGroup}/>
                    </>
                    :
                    <>
                        <MessageArea msgFilter={msgFilter}
                                     activeFriend={activeFriend}/>

                        <SidebarProfile active={activeFriend}/>
                    </>}
            </div>
    );
};

export default Friends;