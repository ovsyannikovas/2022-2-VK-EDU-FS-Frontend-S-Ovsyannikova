import React from 'react';

const chats = {
    'Дженнифер': [
        {
            "name": "Дженнифер",
            "time": "10:40",
            "content": "Я тут кое-что нарисовала. Напиши, как освободишься."
        },
        {
            "name": "Мое имя",
            "time": "10:50",
            "content": "Хорошо. Освобожусь где-то через час."
        },
        {
            "name": "Дженнифер",
            "time": "10:55",
            "content": "Жду!"
        },
    ],
    'Сара': [
        {
            "name": "Сара",
            "time": "10:39",
            "content": "Привет. Можешь мне немного помочь?"
        },
        {
            "name": "Мое имя",
            "time": "10:40",
            "content": "Да, конечно. Что такое?"
        },
        {
            "name": "Сара",
            "time": "10:45",
            "content": "Рассказываю"
        },
    ]
}

function DialogueItem(props) {
    const value = props.value
    const name = props.name

    return (
        <a href="index.html?name=${key}" className="dialogue">
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

function restoreDialogues() {
    if (!localStorage.getItem("chats")) {
        localStorage.setItem("chats", JSON.stringify(chats))
    }

    // const chatHistory = JSON.parse(localStorage.getItem("chats"))
    const chatHistory = chats

    return (
        <>
            {Object.keys(chatHistory).map((key) =>
                <DialogueItem
                    name={key}
                    value={chatHistory[key]}
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

function getBody() {
    return (
        <div>
            <a href="#">
                <div className="new-message-btn">
                    <i className="material-icons">edit</i>
                </div>
            </a>
            <div className="message-list messages">
                {restoreDialogues()}
            </div>
        </div>
    )
}

export function chatList() {
    return <>
        {getHeader()}
        {getBody()}
    </>

    // рабочий localstorage
    // добавить иконки
    // вынести переменную chats ?
    // почему не работают анимации?
}