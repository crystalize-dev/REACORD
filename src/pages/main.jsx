import React, {useEffect, useState} from 'react';
import cl from "./main.module.css";
import Sidebar1 from "../components/sidebar-1/Sidebar-1";
import Sidebar2 from "../components/sidebar-2/Sidebar-2";
import {groupsScheme} from "../hardcode/groupsScheme";
import {friendsScheme} from "../hardcode/friendsScheme";
import Friends from "./Friends";
import Groups from "./Groups";
import Header from "../components/header/header";
import meImg from "../img/randpics/avatars/me.jpg"


const Main = () => {
    const mainPage = {
        id: 0,
        name: 'Личные сообщения',
        img: null
    }
    const me = {
        id: 0,
        name: "zennitsu",
        fullId: '#1314',
        status: "online",
        img: meImg,
        messages: [],
    }
    const rawChannel = {
        id: 0,
        name: "",
        messages: []
    }

    // eslint-disable-next-line no-unused-vars
    const [groups, setGroups] = useState(groupsScheme)
    const [activeGroup, setActiveGroup] = useState(mainPage) // ChatsScheme

    const [activeChannel, setActiveChannel] = useState(rawChannel)

    const [friends, setFriends] = useState(friendsScheme)
    const [activeFriend, setActiveFriend] = useState(me) // friendsScheme

    const [filter, setFilter] = useState('all') // SearchOnlineFriends
    const [msgFilter, setMsgFilter] = useState("") //Search messages

    const deleteFriend = (id) => {
        setFriends([...friends.filter(friend => friend.id !== id)])
    }

    useEffect(() => {
        if (activeGroup.id !== 0) setActiveChannel(activeGroup.channels[0])
    }, [activeGroup])

    return (
        <div className={cl.wrapper}>
            <div className={cl.headerShadow}/>

            <Sidebar1 groups={groups}
                      active={activeGroup} setActive={setActiveGroup}
                      main={mainPage}/>

            <Sidebar2 me={me}
                      activeFriend={activeFriend} setActiveFriend={setActiveFriend}
                      activeGroup={activeGroup}
                      friends={friends} type={activeGroup.id === 0 ? 'friends' : 'groups'}
                      deleteFriend={deleteFriend} activeChannel={activeChannel}
                      setActiveChannel={setActiveChannel}/>

            <div className={cl.content}>
                <Header active={activeFriend} type={activeGroup.id === 0 ? 'friends' : 'groups'}
                        filter={filter} setFilter={setFilter}
                        msgFilter={msgFilter} setMsgFilter={setMsgFilter}
                        activeGroup={activeGroup}/>

                <div className={cl.messageAreaWrapper}>
                    {activeGroup.id === 0 ?
                        <Friends friends={friends} activeFriend={activeFriend}
                                 groups={groups}
                                 me={me}
                                 filter={filter} msgFilter={msgFilter}
                                 setActiveFriend={setActiveFriend} setActiveGroup={setActiveGroup}/>
                        :
                        <Groups activeChannel={activeChannel} msgFilter={msgFilter}/>
                    }
                </div>
            </div>
        </div>
    );
};

export default Main;