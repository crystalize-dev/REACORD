import React, {useEffect, useState} from 'react';
import cl from "./forGroups.module.css";
import Icon from "../../icon/Icon";
import classNames from "classnames";


const ForGroups = ({activeGroup}) => {
    const [active, setActive] = useState({id: 0})

    const [textExpand, setTextExpand] = useState(true)
    const [voiceExpand, setVoiceExpand] = useState(true)

    const [textChannels, setTextChannels] = useState([])
    const [voiceChannels, setVoiceChannels] = useState([])

    useEffect(() => {
        setTextChannels(activeGroup.channels.filter(channel => channel.type === "text"))

        setVoiceChannels(activeGroup.channels.filter(channel => channel.type === "voice"))

        setActive({id: 0})
    }, [activeGroup])

    const getClassForChannel = (channel) => {
        let result = [cl.channel];

        if (active.id === channel.id) result.push(cl.active)
        else if (!textExpand) result.push(cl.hideList)

        return classNames(...result)
    }

    return (
        <>
            <div className={cl.header}>
                <h1>{activeGroup.name}</h1>
                <Icon>expand_more</Icon>
            </div>

            <div className={cl.content}>
                <div className={cl.expandList}>
                    <div className={cl.expandHeader} onClick={() => setTextExpand(!textExpand)}>
                        <Icon className={textExpand ? cl.arrow : classNames(cl.arrow, cl.hide)}>expand_more</Icon>
                        <h2>ТЕКСТОВЫЕ КАНАЛЫ</h2>
                    </div>

                    <div className={cl.list}>

                        {textChannels.map((channel, index) =>
                            <div key={channel.id} className={(active.id === 0 && index === 0) ? classNames(cl.channel, cl.active) : getClassForChannel(channel)}
                                 onClick={() => setActive(channel)}>

                                <Icon>tag</Icon>
                                <p>{channel.name}</p>

                                <div className={cl.inviteWrapper}>
                                    <Icon>person_add</Icon>

                                    <div className={cl.inviteHint}>Создание приглашения</div>
                                </div>
                            </div>)}

                    </div>
                </div>

                <div className={cl.expandList}>
                    <div className={cl.expandHeader} onClick={() => setVoiceExpand(!voiceExpand)}>
                        <Icon className={voiceExpand ? cl.arrow : classNames(cl.arrow, cl.hide)}>expand_more</Icon>
                        <h2>ГОЛОСОВЫЕ КАНАЛЫ</h2>
                    </div>

                    <div className={voiceExpand ? cl.list : classNames(cl.list, cl.hideList)}>

                        {voiceChannels.map(channel =>
                            <div key={channel.id} className={classNames(cl.channel, cl.voice)}>
                                <Icon>volume_up</Icon>
                                <p>{channel.name}</p>

                                <div className={cl.inviteWrapper}>
                                    <Icon>chat_bubble</Icon>

                                    <div className={cl.inviteHint}>Открыть чат</div>
                                </div>
                                <div className={cl.inviteWrapper}>
                                    <Icon>person_add</Icon>

                                    <div className={cl.inviteHint}>Создание приглашения</div>
                                </div>
                            </div>)}

                    </div>
                </div>
            </div>
        </>
    );
};

export default ForGroups;