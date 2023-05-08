import React from 'react';
import cl from "./Sidebar-2.module.css";
import Icon from "../icon/Icon";
import classNames from "classnames";



const Sidebar2 = () => {
    return (
        <div className={cl.sidebar}>
            <input placeholder={'Найти или начать беседу'}/>

            <div className={classNames(cl.special, cl.current)}>
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
                <div className={cl.hint}/>
            </div>
        </div>
    );
};

export default Sidebar2;