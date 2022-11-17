import React from "react";
import Message from '../../components/Message/Message';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            myName: this.props.myName,
            messages: JSON.parse(localStorage.getItem("chats"))[this.props.name],
            index: JSON.parse(localStorage.getItem("chats"))[this.props.name].slice(-1)[0]['id'],
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

    restoreHistory(messages, myName) {
        return (
            <>
                {messages.map((message) =>
                    <Message
                        key={message.id}
                        message={message}
                        myName={myName}
                    />
                )}
            </>)
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <div className="message-list">
                    {this.restoreHistory(this.state.messages, this.state.myName)}
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