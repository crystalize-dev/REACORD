import React, {useState} from 'react';
import cl from "./main.module.css";
import Sidebar1 from "../components/sidebar-1/Sidebar-1";
import Sidebar2 from "../components/sidebar-2/Sidebar-2";
import {groupsScheme} from "../hardcode/groupsScheme";
import {friendsScheme} from "../hardcode/friendsScheme";
import Friends from "./Friends/Friends";
import Groups from "./Groups/Groups";
import Header from "../components/header/header";


const Main = () => {
    const mainPage = {
        id: 0,
        name: 'Личные сообщения',
        img: null
    }
    const me = {
        id: 0,
        fullId: '#1314',
        messages: [],
    }

    const [groups, setGroups] = useState(groupsScheme)
    const [activeGroup, setActiveGroup] = useState(mainPage) // ChatsScheme

    const [friends, setFriends] = useState(friendsScheme)
    const [activeFriend, setActiveFriend] = useState(me) // friendsScheme

    const [filter, setFilter] = useState('all')

    const deleteFriend = (id) => {
        setFriends([...friends.filter(friend => friend.id !== id)])
    }

    return (
        <div className={cl.wrapper}>
            <div className={cl.headerShadow}/>

            <Sidebar1 groups={groups} setGroups={setGroups}
                      active={activeGroup} setActive={setActiveGroup}
                      main={mainPage}/>

            <Sidebar2 main={me}
                      active={activeFriend} setActive={setActiveFriend}
                      friends={friends} type={activeGroup.id === 0 ? 'friends' : 'groups'}
                      deleteFriend={deleteFriend}/>

            <div className={cl.content}>
                <Header active={activeFriend} type={activeGroup.id === 0 ? 'friends' : 'groups'} filter={filter} setFilter={setFilter}/>

                {activeGroup.id === 0 ?
                    <Friends friends={friends} activeFriend={activeFriend} groups={groups} me={me} filter={filter}/>
                    :
                    <Groups/>
                }
            </div>
        </div>
    );
};

export default Main;