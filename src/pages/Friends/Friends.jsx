import React from 'react';
import cl from "./Friends.module.css";
import SidebarProfile from "../../components/sidebar-profile/sidebar-profile";
import SidebarActivity from "../../components/sidebar-activity/sidebar-activity";
import OnlineFriends from "./onlineFriends/OnlineFriends";
import MessageArea from "./messageArea/messageArea";


const Friends = ({me, groups, friends, activeFriend, filter, msgFilter}) => {
    return (
        <div className={cl.messageAreaWrapper}>
                {activeFriend.id === me.id ?
                    <>
                        <OnlineFriends filter={filter} friends={friends} groups={groups}/>
                        <SidebarActivity friends={friends} groups={groups}/>
                    </>
                    :
                    <>
                        <MessageArea msgFilter={msgFilter} activeFriend={activeFriend}/>
                        <SidebarProfile active={activeFriend}/>
                    </>}
            </div>
    );
};

export default Friends;