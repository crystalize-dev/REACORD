import React, {useEffect, useState} from 'react';
import cl from "./forGroups.module.css";
import Icon from "../../icon/Icon";
import classNames from "classnames";
import {friendsScheme} from "../../../hardcode/friendsScheme";


const ForGroups = ({activeGroup, active, setActive, me, meChannelId, setMeChannelId, mic, setMic}) => {

    const [textExpand, setTextExpand] = useState(true)
    const [voiceExpand, setVoiceExpand] = useState(true)

    const [textChannels, setTextChannels] = useState([])
    const [voiceChannels, setVoiceChannels] = useState([])

    useEffect(() => {
        setTextChannels(activeGroup.channels.filter(channel => channel.type === "text"))

        setVoiceChannels(activeGroup.channels.filter(channel => channel.type === "voice"))
        
    }, [activeGroup])

    const getClassForChannel = (channel) => {
        let result = [cl.channel];

        if (active.id === channel.id) result.push(cl.active)
        else if (!textExpand) result.push(cl.hideList)

        return classNames(...result)
    }

    const getVoiceChatFriends = (channel) => {
        let friends = []
        let result = []

        channel.members.forEach((friendId) => {
            if (friendId === 0) {
                friends.push(me)
            } else friends.push(friendsScheme.filter(friend => friend.id === friendId)[0])
        })

        friends.forEach(friend => {
            result.push(
            <div className={cl.voiceElem} key={friend.id}>
                <img alt={""} src={friend.img} draggable={false}/>
                <p>{friend.name}</p>
                <Icon onClick={friend.id === 0 ? () => setMic(!mic) : (e) => turnOffSound(e)}>{friend.id === 0 ? mic ? "mic" : "mic_off" : "mic"}</Icon>
            </div>)
        })

        return result
    }

    const deleteMeFromVoiceChat = (channelId) => {
        setVoiceChannels(voiceChannels.map(channel => {
            if (channel.id === channelId) {
                return {
                    id: channel.id,
                    name: channel.name,
                    members: channel.members.filter(member => member !== 0),
                    type: channel.type}
            } else
                return channel
        }))
    }

    const changeVoiceChat = (channel) => {
        if (meChannelId === channel) return

        if (meChannelId) deleteMeFromVoiceChat(meChannelId, channel)

        setMeChannelId(channel)
    }

    const turnOffSound = (e) => {
        if (e.target.textContent === "mic") e.target.textContent = "mic_off"
        else e.target.textContent = "mic"
    }

    useEffect(() => {
        if (meChannelId) setVoiceChannels(voiceChannels.map(channel => {
            if (channel.id === meChannelId) return {id: channel.id, name: channel.name, members: [...channel.members, me.id], type: channel.type}
            else return channel
        }))
        else
            setVoiceChannels(activeGroup.channels.filter(channel => channel.type === "voice"))
    }, [meChannelId])

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
                            <div key={channel.id}
                                 className={(active.id === 1 && index === 0) ? classNames(cl.channel, cl.active) : getClassForChannel(channel)}
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

                    <div className={cl.list}>

                        {voiceChannels.map(channel =>
                            <div key={channel.id} className={(!voiceExpand && (meChannelId !== channel.id)) ? classNames(cl.gap, cl.hideList) : cl.gap}>
                                <div onClick={() => changeVoiceChat(channel.id)}
                                     className={meChannelId === channel.id ? classNames(cl.channel, cl.voice, cl.activeVoice) : classNames(cl.channel, cl.voice)}>
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
                                </div>
                                {getVoiceChatFriends(channel)}
                            </div>)}

                    </div>
                </div>
            </div>
        </>
    );
};

export default ForGroups;