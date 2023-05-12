import React, {useEffect, useState} from 'react';
import cl from "./OnlineFriends.module.css";
import {getStatusHint} from "../../../utility/status";
import noActivity from "../../../img/randpics/noActivity.jpg";
import Icon from "../../../components/icon/Icon";
import ImgWithStatus from "../../../components/imgWithStatus/imgWithStatus";


const OnlineFriends = ({filter, friends, groups, setActiveFriend}) => {
    const [onlineFriends, setOnlineFriend] = useState([])
    const [onlineFriendsToView, setOnlineFriendsToView] = useState([...onlineFriends])
    const [search, setSearch] = useState('')

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
                    result.push({...friend,
                        statusHint: getStatusHint(friend.status)
                    })
            } else if (friend.status === condition[0] || friend.status === condition[1])
                result.push({...friend,
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
                                <div key={friend.name} className={cl.friendElem} onClick={() => setActiveFriend(friend)}>
                                    <ImgWithStatus status={friend.status} src={friend.img} size={30} color={friend.color}/>

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
                                <div key={friend.name} className={cl.friendElem} onClick={() => setActiveFriend(friend)}>
                                    <ImgWithStatus status={friend.status} src={friend.img} size={30} color={friend.color}/>

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
    );
};

export default OnlineFriends;