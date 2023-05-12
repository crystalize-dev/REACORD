import React from 'react';
import cl from "./imgWithStatus.module.css";
import logo from "../../img/logoRaw.png";
import {getStatus} from "../../utility/status";
import classNames from "classnames";


const ImgWithStatus = ({src, status, altText, isGroup, size=30, statSize=10, className, color}) => {
    const getClassForGroup = () => {
        let result = [cl.imgWrapper, className];

        if (isGroup && altText) result.push(cl.altText)
        else result.push(cl.noBackground)

        return classNames(...result)
    }

    return (
        <div className={(isGroup) ? getClassForGroup() : classNames(cl.imgWrapper, className)} style={{width: size, minWidth: size, height: size, minHeight: size, backgroundColor: color}}>
            {(altText && !src) ?
                altText :
                <img alt={""} src={src ? src : logo} draggable={false} className={src ? cl.img : null}/>}

            <div className={getStatus(cl, status)} style={{width: statSize, minWidth: statSize,height: statSize,minHeight: statSize,}}/>
        </div>
    );
};

export default ImgWithStatus;