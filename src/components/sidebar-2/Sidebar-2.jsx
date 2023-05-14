import React, {useEffect, useState} from 'react';
import cl from "./Sidebar-2.module.css";
import ForFriends from "./forFriends/forFriends";
import ForGroups from "./forGroups/forGroups";
import Icon from "../icon/Icon";
import {friendsScheme} from "../../hardcode/friendsScheme";
import ImgWithStatus from "../imgWithStatus/imgWithStatus";
import classNames from "classnames";


const Sidebar2 = ({
                      me,
                      activeFriend,
                      setActiveFriend,
                      type,
                      deleteFriend,
                      activeGroup,
                      activeChannel,
                      setActiveChannel
                  }) => {

    const [filter, setFilter] = useState('')

    const [meChannelId, setMeChannelId] = useState(null)

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
        copyTextarea.textContent = me.fullId;

        document.body.appendChild(copyTextarea);
        copyTextarea.select();
        document.execCommand("copy");
        document.body.removeChild(copyTextarea);
    }

    return (
        <div className={cl.sidebar}>
            {type === 'friends' ?
                <ForFriends active={activeFriend} setActive={setActiveFriend} me={me}
                            deleteFriend={deleteFriend}
                            friends={friends}
                            setFilter={setFilter} filter={filter}/>
                :
                <ForGroups activeGroup={activeGroup}
                           active={activeChannel} setActive={setActiveChannel}
                           me={me}
                           meChannelId={meChannelId} setMeChannelId={setMeChannelId}
                           mic={mic} setMic={setMic}/>
            }
            {meChannelId !== null &&
                <div className={cl.voiceBlock}>
                    <div className={cl.voiceBlockUpper}>
                        <div className={cl.signal}>
                            <div className={cl.signalName}>
                                <Icon>signal_cellular_alt</Icon>
                                <h1>Голосовая связь подключена</h1>
                            </div>
                            <p>{activeChannel.name}/{activeGroup.name}</p>
                        </div>
                        <div className={cl.voiceOptionWrapper} onClick={() => setMeChannelId(null)}>
                            <Icon>phone_disabled</Icon>

                            <div className={cl.voiceHint}>Отключиться</div>
                        </div>
                    </div>
                    <div className={cl.voiceBlockLower}>
                        <div className={classNames(cl.lowerBlock, cl.inactive)}>
                            <Icon>videocam</Icon>
                            <div className={cl.voiceHint}>Камера недоступна</div>
                        </div>
                        <div className={cl.lowerBlock}>
                            <Icon>screen_share</Icon>
                            <div className={cl.voiceHint}>Продемонстрируйте свой экран</div>
                        </div>
                        <div className={cl.lowerBlock}>
                            <Icon>rocket</Icon>
                            <div className={cl.voiceHint}>Начать активность</div>
                        </div>
                        <div className={cl.lowerBlock}>
                            <Icon>library_music</Icon>
                            <div className={cl.voiceHint}>Открыть звуковую панель</div>
                        </div>
                    </div>
                </div>}
            <div className={cl.meBlock}>
                <div className={cl.me} onClick={() => copyText()}>
                    <ImgWithStatus status={me.status} src={me.img} size={30}/>

                    <div className={cl.name}>
                        <p>Zennitsu</p>
                        <div className={cl.idWrapper}>
                            <span>У аппарата</span>
                            <span className={cl.id}>{me.fullId}</span>
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