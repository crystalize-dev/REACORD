import React, {useState} from 'react';
import cl from "./main.module.css";
import Sidebar1 from "../components/sidebar-1/Sidebar-1";
import Sidebar2 from "../components/sidebar-2/Sidebar-2";
import Header from "../components/header/header";
import {chats} from "../hardcode/chats";
import {friendsSchema} from "../hardcode/friends";



const Main = () => {
    const mainPage = {
        id: 0,
        name: 'Личные сообщения',
        img: null
    }
    const me = {
        id: 0,
        fullId: '#1314'
    }

    const [groups, setGroups] = useState(chats)
    const [activeGroup, setActiveGroup] = useState(mainPage) // ChatsScheme

    const [friends, setFriends] = useState(friendsSchema)
    const [activeChat, setActiveChat] = useState(me) // friendsScheme


    return (
        <div className={cl.wrapper}>
            <div className={cl.headerShadow}/>

            <Sidebar1 groups={groups} setGroups={setGroups}
                      active={activeGroup} setActive={setActiveGroup}
                      main={mainPage}/>

            <Sidebar2 main={me}
                      active={activeChat} setActive={setActiveChat}
                      friends={friends} setFriends={setFriends}/>

            <div className={cl.content}>
                <Header active={activeChat}/>
            </div>
        </div>
    );
};

export default Main;