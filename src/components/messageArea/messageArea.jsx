import React, {useEffect, useState} from 'react';
import cl from './messageArea.module.css';
import Icon from "../icon/Icon";
import MessageElem from "../messagesElem/messageElem";


const MessageArea = ({activeFriend, msgFilter, array, activeChannel}) => {
    const [messages, setMessages] = useState([...array])
    const [value, setValue] = useState('')

    const messageBox = document.getElementById('messages');

    const submit = async (e) => {
        e.preventDefault();

        if (!value) return

        await setMessages([...messages, {who: 'me', text: value, date: Date.now()}])
        setValue('')
        messageBox.scrollTop = messageBox.scrollHeight
    }

    useEffect(() => {
        if (msgFilter) setMessages([...messages.filter(message => message.text.toLowerCase().includes(msgFilter.toLowerCase()))])
        else setMessages([...array])
    }, [array, msgFilter])

    const deleteMsg = (date) => {
        setMessages([...messages.filter(message => message.date !== date)])
    }

    return (
        <form className={cl.wrapper} onSubmit={(e) => submit(e)} onMouseDown={null}>
            <div className={cl.messageArea} id={"messages"}>
                {activeFriend ?
                    messages.map(message => <MessageElem key={message.date}
                                                                  activeFriend={activeFriend}
                                                                  message={message}
                                                                  deleteMsg={deleteMsg}/>)
                    :
                    messages.map(message => <MessageElem key={message.date}
                                                         activeChannel={activeChannel}
                                                         message={message}
                                                         deleteMsg={deleteMsg}/>)
                }
            </div>
            <div className={cl.inputArea}>
                <div className={cl.inputWrapper}>
                    <Icon>add_circle</Icon>

                    <input placeholder={`Написать ${activeFriend ? "@" + activeFriend.name : "#" + activeChannel.name}`}
                           value={value} onChange={(e) => setValue(e.target.value)} autoFocus autoComplete={"off"}/>

                    <Icon>gif_box</Icon>
                    <Icon>note_add</Icon>
                    <Icon>mood</Icon>
                </div>
            </div>
        </form>
    );
};

export default MessageArea;