import React from "react";
import {chats} from './chat_list'

// function chat_page(name) {
//     const form = document.querySelector('form')
//     const input = document.querySelector('.form-input')
//     const message_list = document.querySelector('.message-list')
//
//
//     form.addEventListener('submit', handleSubmit)
//     form.addEventListener('keypress', handleKeyPress)
//
//     function handleSubmit(event) {
//         event.preventDefault();
//         if (input.value === "")
//             return
//
//         const message = {
//             name: myName,
//             time: new Date().toLocaleTimeString().slice(0, -3),
//             content: input.value,
//         }
//         chatHistory[name].push(message)
//         document.querySelector('.form-input').value = ""
//
//         localStorage.setItem("chats", JSON.stringify(chatHistory))
//         let localData = JSON.parse(localStorage.getItem("chats"))[name]
//         let last = localData.length - 1
//         const templateDiv = `
//             <div class='message-bubble my-message'>
//                 <div class='message'>
//                      <p>${localData[last].content}</p>
//                       <div class="info">
//                          <time>${localData[last].time}</time>
//                         <i class="material-icons">done_all</i>
//                      </div>
//                  </div>
//             </div>`
//         message_list.innerHTML += templateDiv
//     }
//
//     function handleKeyPress(event) {
//         if (event.keyCode === 13) {
//             form.dispatchEvent(new Event('submit'));
//         }
//     }
// }

function MessageItem(props) {
    const message = props.message
    const myName = props.myName

    let className = "message-bubble"
    if (message.name === myName)
        className += " my-message"
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


function restoreHistory(messages, myName) {
    return (
        <>
            {messages.map((message) =>
                <MessageItem
                    key={message.id}
                    message={message}
                    myName={myName}
                />
            )}
        </>)
}

function getHeader(props) {
    return (
        <header className="site-header">
            <a href="#" onClick={() => props.onClick('chat-list')} className="logo arrow">
                <i className="material-icons icon">arrow_back</i>
            </a>
            <a href="#">
                <div className="user-info">
                    <i className="material-icons avatar">account_circle</i>
                    <div className="user-text">
                        <p className="name">{props.name}</p>
                        <p className="time">была 2 часа назад</p>
                    </div>
                </div>
            </a>
            <div className="buttons">
                <a href="#">
                    <i className="material-icons icon">search</i>
                </a>
                <a href="#">
                    <i className="material-icons icon">menu</i>
                </a>
            </div>
        </header>
    )
}

function getForm(name, myName) {
    const chatHistory = JSON.parse(localStorage.getItem("chats"))
    let messages = chatHistory[name]

    return (
        <form className="form" action="/">
            <div className="message-list">
                {restoreHistory(messages, myName)}
            </div>
            <div className="input">
                <input className="form-input" name="message-text" placeholder="Сообщение" type="text"/>
                <a href="#">
                    <i className="material-icons icon">attachment</i>
                </a>
            </div>
        </form>
    )
}


export default function ChatPage(props) {
    if (!localStorage.getItem("chats")) {
        localStorage.setItem("chats", JSON.stringify(chats))
    }

    const name = props.name
    const myName = "Мое имя"
    return <>
        {getHeader(props)}
        {getForm(name, myName)}
    </>
}