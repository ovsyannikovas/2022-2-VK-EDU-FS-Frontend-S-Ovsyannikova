import React from 'react';
import {chats} from './chat_list'

function DialogueItem(props) {
    const value = props.value
    const name = props.name

    return (
        <a href="#" onClick={() => props.onClick('chat', name)} className="dialogue">
            <i className="material-icons">account_circle</i>
            <div className="dialogue-text">
                <div className="dialogue-user-text">
                    <p className="dialogue-name">{name}</p>
                    <p className="dialogue-message">{value.slice(-1)[0]["content"]}</p>
                </div>
                <div className="dialogue-nums">
                    <p className="dialogue-time">{value.slice(-1)[0]["time"]}</p>
                    <i className="material-icons">done_all</i>
                    {/*<p class="dialogue-counter">99</p>*/}
                </div>
            </div>
        </a>
    )
}

function restoreDialogues(props) {
    const chatHistory = JSON.parse(localStorage.getItem("chats"))

    return (
        <>
            {Object.keys(chatHistory).map((key) =>
                <DialogueItem
                    key = {key}
                    name={key}
                    value={chatHistory[key]}
                    onClick={props.onClick}
                />
            )}
        </>
    )
}

function getHeader() {
    return (
        <header className="site-header-messenger">
            <div className="burger-label">
                <a href="#" className="burger-icon">
                    <i className="material-icons icon">menu</i>
                </a>
                <p className="messenger-label">Messenger</p>
            </div>
            <a href="#">
                <i className="material-icons icon">search</i>
            </a>
        </header>
    )
}

function getBody(props) {
    return (
        <div>
            <a href="#">
                <div className="new-message-btn">
                    <i className="material-icons">edit</i>
                </div>
            </a>
            <div className="message-list messages">
                {restoreDialogues(props)}
            </div>
        </div>
    )
}

export default function ChatList(props) {
    if (!localStorage.getItem("chats")) {
        localStorage.setItem("chats", JSON.stringify(chats))
    }

    return <>
        {getHeader()}
        {getBody(props)}
    </>
}