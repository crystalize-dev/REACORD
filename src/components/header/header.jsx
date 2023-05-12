import React from 'react';
import cl from "./header.module.css";
import Icon from "../icon/Icon";
import {getStatus, getStatusHint} from "../../utility/status";
import classNames from "classnames";


const Header = ({active, type, filter, setFilter, msgFilter, setMsgFilter, activeGroup}) => {
    return (
        <header className={cl.header}>
            {
                type === 'friends' ?
                    active.id !== 0 ?
                        <div className={cl.friend}>
                            <div className={cl.nameWrapper}>
                                <Icon>alternate_email</Icon>
                                {active.name}
                                <div className={cl.statusWrapper}>
                                    <div className={getStatus(cl, active.status)}/>

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

                            <button className={filter === 'online' ? cl.active : null}
                                    onClick={() => setFilter('online')}>В сети
                            </button>
                            <button className={filter === 'all' ? cl.active : null}
                                    onClick={() => setFilter('all')}>Все
                            </button>
                            <button className={filter === 'sleep' ? cl.active : null}
                                    onClick={() => setFilter('sleep')}>Ожидание
                            </button>
                            <button className={filter === '' ? cl.active : null}
                                    onClick={() => setFilter('')}>Заблокированные
                            </button>
                            <button className={cl.addFriend}>Добавить в друзья</button>
                        </div>
                    :
                    <>
                        <div className={cl.friend}>
                            <div className={cl.nameWrapper}>
                                <Icon>tag</Icon>
                                {activeGroup.name}
                            </div>
                        </div>
                    </>
            }

            <div className={cl.staticWrapper}>
                {(active.id !== 0 || type === 'groups') &&
                    <>
                        {type !== 'groups' ?
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
                            </> :
                            <>
                                <div className={cl.optionWrapper}>
                                    <Icon>account_tree</Icon>

                                    <div className={cl.statusHint}>Ветки</div>
                                </div>
                                <div className={cl.optionWrapper}>
                                    <Icon>notifications</Icon>

                                    <div className={cl.statusHint}>Параметры уведомлений</div>
                                </div>
                                <div className={cl.optionWrapper}>
                                    <Icon>push_pin</Icon>

                                    <div className={cl.statusHint}>Закреплённые сообщения</div>
                                </div>
                                <div className={cl.optionWrapper}>
                                    <Icon>group</Icon>

                                    <div className={cl.statusHint}>Показать список участников</div>
                                </div>
                            </>}

                        <div className={cl.inputWrapper}>
                            <input placeholder={"Поиск"}
                                   value={msgFilter} onChange={(e) => setMsgFilter(e.target.value)}/>

                            <Icon>search</Icon>
                        </div>
                    </>}

                {(active.id === 0 && type === 'friends') &&
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