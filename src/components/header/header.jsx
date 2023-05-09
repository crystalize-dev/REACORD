import React, {useState} from 'react';
import cl from "./header.module.css";
import Icon from "../icon/Icon";
import classNames from "classnames";


const Header = ({active}) => {
    const [input, setInput] = useState('')

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

    const getStatusHint = (status) => {
        switch (status) {
            case 'online':
                return 'В сети'
            case 'sleep':
                return 'Отошёл'
            default:
                return 'Не в сети'
        }
    }

    return (
        <header className={cl.header}>
            {active.id !== 0 ?
                <div className={cl.friend}>
                    <div className={cl.nameWrapper}>
                        <Icon>alternate_email</Icon>
                        {active.name}
                        <div className={cl.statusWrapper}>
                            <div className={getStatus(active.status)}/>

                            <div className={cl.statusHint}>{getStatusHint(active.status)}</div>
                        </div>
                    </div>
                </div>
                :
                <div className={cl.main}>
                    <div className={cl.firstMain}>
                        <Icon>emoji_people</Icon>
                        <p>Друзья</p>
                    </div>

                    <hr/>

                    <button>В сети</button>
                    <button>Все</button>
                    <button>Ожидание</button>
                    <button>Заблокированные</button>
                    <button className={cl.addFriend}>Добавить в друзья</button>
                </div>}

            <div className={cl.staticWrapper}>
                {active.id !== 0 &&
                    <>
                        <div className={cl.optionWrapper}>
                            <Icon>call</Icon>

                            <div className={cl.statusHint}>Начать голосовой звонок</div>
                        </div>
                        <div className={cl.optionWrapper}>
                            <Icon>videocam</Icon>

                            <div className={cl.statusHint}>Начать видеозвонок</div>
                        </div>
                        <div className={cl.optionWrapper}>
                            <Icon>push_pin</Icon>

                            <div className={cl.statusHint}>Закреплённые сообщения</div>
                        </div>
                        <div className={cl.optionWrapper}>
                            <Icon>person_add</Icon>

                            <div className={cl.statusHint}>Добавить друзей в беседу</div>
                        </div>
                        <div className={cl.optionWrapper}>
                            <Icon>account_circle</Icon>

                            <div className={cl.statusHint}>Скрыть профиль пользователя</div>
                        </div>
                        <div className={cl.inputWrapper}>
                            <input placeholder={"Поиск"}
                                   value={input} onChange={(e) => setInput(e.target.value)}/>

                            <Icon>search</Icon>
                        </div>
                    </>}

                {active.id === 0 &&
                    <>
                        <div className={classNames(cl.optionWrapper, cl.toDelete)}>
                            <Icon>chat_bubble</Icon>

                            <div className={cl.statusHint}>Новый групповой чат</div>
                        </div>
                        <hr className={cl.toDelete}/>
                    </>}
                <div className={cl.optionWrapper}>
                    <Icon>mail</Icon>

                    <div className={cl.statusHint}>Почта</div>
                </div>
                <div className={cl.optionWrapper}>
                    <Icon>help</Icon>

                    <div className={cl.statusHint}>Помощь</div>
                </div>
            </div>
        </header>
    );
};

export default Header;