import React from 'react';
import cl from "./messageElem.module.css";
import ImgWithStatus from "../../../../components/imgWithStatus/imgWithStatus";
import Icon from "../../../../components/icon/Icon";
import classNames from "classnames";
import dateFormat from "dateformat";
import meAvatar from "../../../../img/randpics/avatars/me.jpg";


const MessageElem = ({message, activeFriend, deleteMsg}) => {
    const me = {
        name: "Zennitsu",
        img: meAvatar
    }

    const convertToNormalDate = (date) => {
        return dateFormat(new Date(date), "dd.mm.yyyy H:MM");
    }
    convertToNormalDate(1683642105960)

    return (
        <div key={message.date} className={cl.elem}>
            <ImgWithStatus size={40} src={message.who === 'me' ? me.img : activeFriend.img}/>

            <div className={cl.textArea}>
                <h1>{message.who === "me" ? me.name :  activeFriend.name}<span>{convertToNormalDate(message.date)}</span></h1>
                <p>{message.text}</p>
            </div>

            <div className={cl.onHover}>
                <div className={cl.option}>
                    <Icon>face</Icon>

                    <div className={cl.hint}>Добавить реакцию</div>
                </div>
                <div className={cl.option}>
                    <Icon>face_retouching_natural</Icon>

                    <div className={cl.hint}>Добавить суперреакцию</div>
                </div>
                <div className={cl.option}>
                    <Icon>{message.who === "me" ? "edit" : "reply"}</Icon>

                    <div className={cl.hint}>{message.who === "me" ? "Изменить" : "Ответить"}</div>
                </div>
                <div className={classNames(cl.option, cl.trigModal)}>
                    <Icon>more_horiz</Icon>

                    <div className={cl.hint}>Ещё</div>

                    <div className={cl.modal}>
                        <div className={cl.modalElem}>Добавить реакцию <Icon>chevron_right</Icon></div>
                        <div className={cl.modalElem}>Добавить суперреакцию <Icon>chevron_right</Icon></div>
                        {message.who === "me" && <div className={cl.modalElem}>Редактировать <Icon>edit</Icon></div>}
                        <div className={cl.modalElem}>Закрепить сообщение <Icon>push_pin</Icon></div>
                        <div className={cl.modalElem}>Ответить <Icon>reply</Icon></div>
                        <div className={cl.modalElem}>Скопировать текст <Icon>content_copy</Icon></div>
                        <div className={cl.modalElem}>Отметить как непрочитанное <Icon>filter_alt</Icon></div>
                        <div className={cl.modalElem}>Скопировать ссылку на сообщение <Icon>share</Icon></div>
                        <div className={cl.modalElem}>Зачитать сообщение <Icon>voice_chat</Icon></div>
                        <div onClick={() => deleteMsg(message.date)} className={classNames(cl.modalElem, cl.special)}>Удалить сообщение <Icon>delete</Icon></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageElem;