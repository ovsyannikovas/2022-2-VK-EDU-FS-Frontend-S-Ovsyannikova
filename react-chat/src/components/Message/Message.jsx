import React from "react";
import {DoneAll} from "@mui/icons-material";

export default function Message(props) {
    const message = props.message
    const myName = props.myName

    let className = "message-bubble"
    if (message.name === myName) {
        className += " my-message"
    }

    return (
        <div className={className}>
            <div className='message'>
                <p>{message.content}</p>
                <div className="info">
                    <time>{message.time}</time>
                    {checkMark(message.name, myName)}
                </div>
            </div>
        </div>
    )
}

function checkMark(name, myName) {
    if (name === myName)
        return <DoneAll/>
}