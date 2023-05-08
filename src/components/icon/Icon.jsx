import React from 'react';
import "./icon.css";
import classes from "classnames";


const Icon = ({children, className, ...props}) => {
    return (
        <span {...props} className={classes("material-symbols-rounded", className)}>
            {children}
        </span>
    );
};

export default Icon;