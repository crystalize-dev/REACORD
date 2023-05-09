// noinspection JSDeprecatedSymbols
import React, {useState} from 'react';
import cl from "./Sidebar-2.module.css";
import Icon from "../icon/Icon";
import classNames from "classnames";
import logo from "../../img/logoRaw.png"
import me from '../../img/me.jpg'


const Sidebar2 = ({main, friends, setFriends, active, setActive}) => {
    const [mic, setMic] = useState(true)
    const [head, setHead] = useState(true)

    const getStatus = (status) => {
        switch (status) {
            case 'online':
                return classNames(cl.status, cl.online)
            case 'sleep':
                return classNames(cl.status, cl.sleep)
            default:
                return classNames(cl.status, cl.offline)
        }
    }

    const copyText = () => {
        let copyTextarea = document.createElement("textarea");
        copyTextarea.style.position = "absolute";
        copyTextarea.style.opacity = "0";
        copyTextarea.textContent = main.fullId;

        document.body.appendChild(copyTextarea);
        copyTextarea.select();
        document.execCommand("copy");
        document.body.removeChild(copyTextarea);

        console.log('copied!')
    }

    return (
        <div className={cl.sidebar}>
            <input placeholder={'Найти или начать беседу'}/>

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
                    <div className={cl.imgWrapper}>
                        <img alt={""} src={friend.img ? friend.img : logo} draggable={"false"}/>
                        <div className={getStatus(friend.status)}/>
                    </div>

                    <p>{friend.name}</p>
                    <Icon>close</Icon>
                </div>)}

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

                    <div className={cl.optionHint}>Настройки пользователя</div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar2;