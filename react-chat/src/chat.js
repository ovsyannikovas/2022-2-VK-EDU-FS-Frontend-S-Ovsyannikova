import React from "react";
import {chats} from './chat_list'

function MessageItem(props) {
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

export class GetForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            myName: this.props.myName,
            messages: JSON.parse(localStorage.getItem("chats"))[this.props.name],
            index: 4,
            text: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            text: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()

        if (this.state.text === '') {
            return
        }

        let time = new Date()
        this.state.index++
        this.setState({
            text: '',
        })

        let message = {
            'id': this.state.index,
            'name': this.state.myName,
            'time': `${time.getHours()}:${time.getMinutes()}`,
            'content': this.state.text,
        }

        this.saveToLocalStorage(message)
    }

    saveToLocalStorage(message) {
        this.state.messages.push(message)

        let chats_dict = JSON.parse(localStorage['chats'])
        chats_dict[this.state.name] = this.state.messages
        localStorage.setItem("chats", JSON.stringify(chats_dict))
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <div className="message-list">
                    {restoreHistory(this.state.messages, this.state.myName)}
                </div>
                <div className="input">
                    <input className="form-input"
                           name="message-text"
                           placeholder="Cообщение"
                           onChange={this.handleChange}
                           type="text"
                           value={this.state.text}/>
                    <a href="#">
                        <i className="material-icons icon">attachment</i>
                    </a>
                </div>
            </form>
        )
    }

}


export default function ChatPage(props) {
    if (!localStorage.getItem("chats")) {
        localStorage.setItem("chats", JSON.stringify(chats))
    }

    return <>
        {getHeader(props)}
        <GetForm name={props.name} myName={"Мое имя"}></GetForm>
    </>
}