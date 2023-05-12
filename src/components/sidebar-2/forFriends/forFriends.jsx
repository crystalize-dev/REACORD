import React from 'react';
import classNames from "classnames";
import Icon from "../../icon/Icon";
import ImgWithStatus from "../../imgWithStatus/imgWithStatus";
import cl from "./forFriends.module.css"


const ForFriends = ({active, main, setActive, deleteFriend, filter, setFilter, friends}) => {
    return (
        <>
            <input value={filter} onChange={(e) => setFilter(e.target.value)} placeholder={'Найти или начать беседу'}/>

            <div className={active.id === main.id ? classNames(cl.special, cl.current) : cl.special}
                 onClick={() => setActive(main)}>
                <Icon>emoji_people</Icon>
                <p>Друзья</p>
            </div>
            <div className={cl.special}>
                <Icon>speed</Icon>
                <p>Nitro</p>
            </div>

            <div className={cl.messages}>
                <p>ЛИЧНЫЕ СООБЩЕНИЯ</p>
                <Icon>add</Icon>

                <div className={cl.hint}>Создать ЛС</div>
            </div>

            {friends.map(friend =>
                <div key={friend.id}
                     className={friend.id === active.id ? classNames(cl.friendElem, cl.active) : cl.friendElem}
                     onClick={() => setActive(friend)}>
                    <ImgWithStatus status={friend.status} src={friend.img} size={30} color={friend.color}/>

                    <p>{friend.name}</p>
                    <Icon onClick={() => deleteFriend(friend.id)}>close</Icon>
                </div>)}
        </>
    );
};

export default ForFriends;