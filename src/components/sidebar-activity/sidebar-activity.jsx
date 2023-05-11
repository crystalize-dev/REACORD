import React, {useEffect, useState} from 'react';
import cl from "./sidebar-activity.module.css";
import ImgWithStatus from "../imgWithStatus/imgWithStatus";


const SidebarActivity = ({friends, groups}) => {
    const [activities, setActivities] = useState([])

    useEffect(() => {
        let result = []

        friends.forEach(friend => {
            if (friend.activities) {
                let activeGroup = friend.activities

                let resultGroup = groups.filter(group => group.name === activeGroup.name)[0];
                let resultChannel = resultGroup.channels.filter(channel => channel.name === friend.activities.channel)[0]

                let activitySchema = {
                    friend: friend.name,
                    img: friend.img,
                    status: friend.status,
                    groupImg: resultGroup.img,
                    groupName: resultGroup.name,
                    channel: resultChannel,
                }

                result.push(activitySchema)
            }
        })

        setActivities([...result])
    }, [friends, groups])

    return (
        <div className={cl.activitySidebar}>
            <h1>Активные контакты</h1>
            {activities.length === 0
                ?
                <>
                    <h2>Пока что-то тут тихо...</h2>
                    <p>Если ваш друг начнёт чем-то заниматься — например, запустит игру или войдёт в
                        голосовой чат, — вы увидите это здесь!</p>
                </>
                :
                <>
                    <div className={cl.activities}>
                        {activities.map(activity =>
                            <div key={activity.friend} className={cl.activityElem}>
                                <div key={activity.friend} className={cl.whoWrapper}>
                                    <ImgWithStatus src={activity.img} status={activity.status} size={30}/>

                                    <div className={cl.namingWrapper}>
                                        <h1>{activity.friend}</h1>
                                        <p>В голосовом канале</p>
                                    </div>
                                </div>
                                <div key={activity.groupName} className={cl.groupWrapper}>
                                    <ImgWithStatus isGroup={true} src={activity.groupImg} size={30}
                                                   altText={activity.groupImg ? null : activity.groupName.replaceAll(" ", "")}/>

                                    <div className={cl.namingWrapper}>
                                        <h1>{activity.groupName}</h1>
                                        <p>{activity.channel.name}</p>
                                    </div>

                                    <ImgWithStatus src={activity.img} size={30}/>
                                </div>
                            </div>)}
                    </div>
                </>}
        </div>
    );
};

export default SidebarActivity;