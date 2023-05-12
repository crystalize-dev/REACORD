import React, {useEffect, useState} from 'react';
import cl from "./Sidebar-2.module.css";
import ForFriends from "./forFriends/forFriends";
import ForGroups from "./forGroups/forGroups";
import me from "../../img/randpics/avatars/me.jpg";
import classNames from "classnames";
import Icon from "../icon/Icon";
import {friendsScheme} from "../../hardcode/friendsScheme";


const Sidebar2 = ({main, activeFriend, setActiveFriend, type, deleteFriend, activeGroup}) => {

    const [filter, setFilter] = useState('')

    useEffect(() => {
        if (filter) setFriends([...friends.filter(friend => friend.name.toLowerCase().includes(filter.toLowerCase()))])
        else setFriends(friends)
    }, [filter, friendsScheme])

    const [friends, setFriends] = useState(friendsScheme)
    const [mic, setMic] = useState(true)
    const [head, setHead] = useState(true)

    const copyText = () => {
        let copyTextarea = document.createElement("textarea");
        copyTextarea.style.position = "absolute";
        copyTextarea.style.opacity = "0";
        copyTextarea.textContent = main.fullId;

        document.body.appendChild(copyTextarea);
        copyTextarea.select();
        document.execCommand("copy");
        document.body.removeChild(copyTextarea);
    }

    return (
        <div className={cl.sidebar}>
            {type === 'friends' ?
                <ForFriends active={activeFriend} setActive={setActiveFriend} main={main}
                            deleteFriend={deleteFriend}
                            friends={friends}
                            setFilter={setFilter} filter={filter}/>
                :
                <ForGroups activeGroup={activeGroup}/>
            }

            <div className={cl.meBlock}>
                <div className={cl.me} onClick={() => copyText()}>
                    <div className={cl.imgWrapper}>
                        <img alt={""} src={me} draggable={"false"}/>
                        <div className={classNames(cl.status, cl.online)}/>
                    </div>

                    <div className={cl.name}>
                        <p>Zennitsu</p>
                        <div className={cl.idWrapper}>
                            <span>У аппарата</span>
                            <span className={cl.id}>{main.fullId}</span>
                        </div>
                    </div>
                </div>

                <div className={cl.optionWrapper}>
                    <Icon onClick={() => setMic(!mic)}>{mic ? "mic" : "mic_off"}</Icon>

                    <div className={cl.optionHint}>{mic ? "Выкл. микрофон" : "Вкл. микрофон"}</div>
                </div>
                <div className={cl.optionWrapper}>
                    <Icon onClick={() => setHead(!head)}>{head ? "headset_mic" : "headset_off"}</Icon>

                    <div className={cl.optionHint}>{head ? "Откл. звук" : "Вкл. звук"}</div>
                </div>
                <div className={cl.optionWrapper}>
                    <Icon>settings</Icon>
                </div>
            </div>
        </div>
    );
};

export default Sidebar2;