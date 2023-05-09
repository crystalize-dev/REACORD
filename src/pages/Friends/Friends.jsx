import React, {useEffect, useState} from 'react';
import cl from "./Friends.module.css";
import noActivity from "../../img/randpics/noActivity.jpg";
import Icon from "../../components/icon/Icon";
import logo from "../../img/logoRaw.png";
import {getStatus, getStatusHint} from "../../utility/status";
import SidebarProfile from "../../components/sidebar-profile/sidebar-profile";


const Friends = ({me, groups, friends, activeFriend, filter}) => {
    const [activities, setActivities] = useState([])

    const [onlineFriends, setOnlineFriend] = useState([])
    const [onlineFriendsToView, setOnlineFriendsToView] = useState([...onlineFriends])
    const [search, setSearch] = useState('')


    useEffect(() => {
        let result = []

        friends.forEach(friend => {
            if (friend.activities) {
                let activeGroup = friend.activities

                let resultGroup = groups.filter(group => group.name === activeGroup.name)[0];
                let resultChannel = resultGroup.channels.filter(channel => channel.name === friend.activities.channel)[0]

                let activitySchema = {
                    friend: friend.name,
                    img: friend.img,
                    status: friend.status,
                    groupImg: resultGroup.img,
                    groupName: resultGroup.name,
                    channel: resultChannel,
                }

                result.push(activitySchema)
            }
        })

        setActivities([...result])
    }, [friends, groups])

    useEffect(() => {
        let result = []

        friends.forEach(friend => {
            let condition = [];

            switch (filter) {
                case 'all': {
                    condition.push('online', 'sleep')
                    break
                }
                case 'online': {
                    condition.push('online')
                    break
                }
                case 'sleep': {
                    condition.push('sleep')
                    break
                }
                default: break
            }

            if (condition.length === 0) return;

            if (condition.length === 1) {
                if (friend.status === condition[0])
                    result.push({
                        name: friend.name,
                        fullId: friend.fullId,
                        img: friend.img,
                        status: friend.status,
                        statusHint: getStatusHint(friend.status)
                    })
            } else if (friend.status === condition[0] || friend.status === condition[1])
                result.push({
                    name: friend.name,
                    fullId: friend.fullId,
                    img: friend.img,
                    status: friend.status,
                    statusHint: getStatusHint(friend.status)
                })
        })

        setOnlineFriend([...result])
    }, [filter, friends, groups])

    useEffect(() => {
        setOnlineFriendsToView([...onlineFriends])
    }, [onlineFriends])

    useEffect(() => {
        if (search.length === 0) setOnlineFriendsToView([...onlineFriends])

        setOnlineFriendsToView([...onlineFriends.filter(friend => friend.name.toLowerCase().includes(search.toLowerCase()))])
    }, [search])

    return (
        <div className={cl.messageAreaWrapper}>
                {activeFriend.id === me.id ?
                    <div className={cl.onlineFriendsWrapper}>
                        {onlineFriends.length === 0 ? <img alt={""} src={noActivity} draggable={false}/> :
                            <div className={cl.onlineFriends}>
                                <div className={cl.inputWrapper}>
                                    <input placeholder={"Поиск"}
                                           value={search} onChange={(e) => setSearch(e.target.value)}/>

                                    <Icon>search</Icon>
                                </div>

                                {onlineFriendsToView.filter(friend => friend.status === 'online').length !== 0 && <>
                                    <h1>В СЕТИ
                                        — {onlineFriendsToView.filter(friend => friend.status === 'online').length}</h1>
                                    <hr/>
                                    {onlineFriendsToView.map(friend => {
                                        if (friend.status === 'online') return (
                                            <div key={friend.name} className={cl.friendElem}>
                                                <div className={cl.imgWrapper}>
                                                    <img alt={""} src={friend.img ? friend.img : logo}
                                                         draggable={false} className={friend.img ? cl.img : null}/>

                                                    <div className={getStatus(cl, friend.status)}/>
                                                </div>

                                                <div className={cl.nameWrapper}>
                                                    <h1>{friend.name} <span>{friend.fullId}</span></h1>
                                                    <p>{friend.statusHint}</p>
                                                </div>

                                                <div className={cl.options}>
                                                    <div className={cl.option}>
                                                        <Icon>chat_bubble</Icon>

                                                        <div className={cl.hint}>Сообщение</div>
                                                    </div>
                                                    <div className={cl.option}>
                                                        <Icon>more_vert</Icon>

                                                        <div className={cl.hint}>Ещё</div>
                                                    </div>
                                                </div>

                                            </div>)
                                        else return null
                                    })}
                                </>}

                                {onlineFriendsToView.filter(friend => friend.status === 'sleep').length !== 0 && <>
                                    <h1>ОЖИДАНИЕ
                                        — {onlineFriendsToView.filter(friend => friend.status === 'sleep').length}</h1>
                                    <hr/>
                                    {onlineFriendsToView.map(friend => {
                                        if (friend.status === 'sleep') return (
                                            <div key={friend.name} className={cl.friendElem}>
                                                <div className={cl.imgWrapper}>
                                                    <img alt={""} src={friend.img ? friend.img : logo}
                                                         draggable={false} className={friend.img ? cl.img : null}/>

                                                    <div className={getStatus(cl, friend.status)}/>
                                                </div>

                                                <div className={cl.nameWrapper}>
                                                    <h1>{friend.name} <span>{friend.fullId}</span></h1>
                                                    <p>{friend.statusHint}</p>
                                                </div>

                                                <div className={cl.options}>
                                                    <div className={cl.option}>
                                                        <Icon>chat_bubble</Icon>

                                                        <div className={cl.hint}>Сообщение</div>
                                                    </div>
                                                    <div className={cl.option}>
                                                        <Icon>more_vert</Icon>

                                                        <div className={cl.hint}>Ещё</div>
                                                    </div>
                                                </div>

                                            </div>)
                                        else return null
                                    })}
                                </>}
                            </div>}
                    </div>
                    :
                    <div className={cl.messageArea}>

                    </div>}

                {activeFriend.id !== me.id
                    ?
                    <SidebarProfile active={activeFriend}/>
                    :
                    <div className={cl.activitySidebar}>
                        <h1>Активные контакты</h1>
                        {activities.length === 0
                            ?
                            <>
                                <h2>Пока что-то тут тихо...</h2>
                                <p>Если ваш друг начнёт чем-то заниматься — например, запустит игру или войдёт в
                                    голосовой чат, — вы увидите это здесь!</p>
                            </>
                            :
                            <>
                                <div className={cl.activities}>
                                    {activities.map(activity =>
                                        <>
                                            <div key={activity.friend} className={cl.whoWrapper}>
                                                <div className={cl.imgWrapper}>
                                                    <img alt={""} src={activity.img ? activity.img : logo}
                                                         draggable={false} className={activity.img ? cl.img : null}/>

                                                    <div className={getStatus(cl, activity.status)}/>
                                                </div>

                                                <div className={cl.namingWrapper}>
                                                    <h1>{activity.friend}</h1>
                                                    <p>В голосовом канале</p>
                                                </div>
                                            </div>
                                            <div key={activity.groupName} className={cl.groupWrapper}>
                                                <div className={cl.imgWrapper}>
                                                    {activity.groupImg ?
                                                        <img alt={""}
                                                             src={activity.groupImg}
                                                             draggable={false} className={cl.img}/> : activity.groupName.replaceAll(" ", "")}
                                                </div>

                                                <div className={cl.namingWrapper}>
                                                    <h1>{activity.groupName}</h1>
                                                    <p>{activity.channel.name}</p>
                                                </div>

                                                <div className={cl.imgWrapper}>
                                                    <img alt={""} src={activity.img ? activity.img : logo}
                                                         draggable={false} className={activity.img ? cl.img : null}/>
                                                </div>
                                            </div>
                                        </>)}
                                </div>
                            </>}
                    </div>}
            </div>
    );
};

export default Friends;