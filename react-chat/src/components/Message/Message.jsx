import React from "react";

export default function Message(props) {
    const message = props.message
    const myName = props.myName

    let className = "message-bubble"
    if (message.name === myName) {
        className += " my-message"
    }
    let check = message.name === myName ? "done_all" : ""

    return (
        <div className={className}>
            <div className='message'>
                <p>{message.content}</p>
                <div className="info">
                    <time>{message.time}</time>
                    <i className="material-icons">{check}</i>
                </div>
            </div>
        </div>
    )
}