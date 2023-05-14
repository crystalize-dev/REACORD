import React from 'react';
import MessageArea from "../components/messageArea/messageArea";


const Groups = ({activeChannel, msgFilter}) => {
    return (
        <>
            <MessageArea activeChannel={activeChannel} array={activeChannel.messages} msgFilter={msgFilter}/>
        </>
    );
};

export default Groups;