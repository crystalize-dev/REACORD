import React from 'react';
import cl from "./main.module.css";
import Sidebar1 from "../components/sidebar-1/Sidebar-1";
import Sidebar2 from "../components/sidebar-2/Sidebar-2";
import Header from "../components/header/header";



const Main = () => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.headerShadow}/>
            <Sidebar1 />
            <Sidebar2 />

            <div className={cl.content}>
                <Header />
            </div>
        </div>
    );
};

export default Main;