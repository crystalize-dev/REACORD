import React from 'react';
import cl from "./sidebar-profile.module.css";
import logo from "../../img/logoRaw.png"
import {getStatus} from "../../utility/status";
import Icon from "../icon/Icon";


const SidebarProfile = ({active}) => {
    return (
        <div className={cl.sidebar}>
            <div className={cl.colorArea}/>

            <div className={cl.imgWrapper}>
               <img alt={""} src={active.img ? active.img : logo}/>

                <div className={getStatus(cl, active.status)}/>
            </div>

            <div className={cl.infoCard}>
                <h1>{active.name}<span>{active.fullId}</span></h1>
                <hr/>

                {active.description && <>
                <h2>ОБО МНЕ</h2>
                <p>{active.description}</p></>}

                <h2>В ЧИСЛЕ УЧАТСНИКОВ DISCORD С</h2>
                <p>{active.enterDate}</p>

                {active.note && <>
                <hr/>
                <h2>ЗАМЕТКА</h2>
                <p>{active.note}</p></>}
            </div>

            {(active.mutual.friends || active.mutual.groups) &&
            <div className={cl.addInfo}>
                {active.mutual.groups &&
                <div className={cl.mutualElem}>
                    <p>{active.mutual.groups} {active.mutual.groups === 1 ? "общий сервер" : "общих сервера"}</p>
                    <Icon>chevron_right</Icon>
                </div>}

                {active.mutual.friends && <>
                <hr/>
                <div className={cl.mutualElem}>
                    <p>{active.mutual.friends} {active.mutual.groups === 1 ? "общий друг" : "общих друга"}</p>
                    <Icon>chevron_right</Icon>
                </div></>}
            </div>}
        </div>
    );
};

export default SidebarProfile;