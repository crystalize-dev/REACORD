import React from 'react';
import SidebarProfile from "../components/sidebar-profile/sidebar-profile";
import SidebarActivity from "../components/sidebar-activity/sidebar-activity";
import OnlineFriends from "../components/onlineFriends/OnlineFriends";
import MessageArea from "../components/messageArea/messageArea";


const Friends = ({me, groups, friends, activeFriend, filter, msgFilter, setActiveFriend, setActiveGroup}) => {
    return (
        <>
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
                                     activeFriend={activeFriend} array={activeFriend.messages}/>

                        <SidebarProfile active={activeFriend}/>
                    </>}
            </>
    );
};

export default Friends;