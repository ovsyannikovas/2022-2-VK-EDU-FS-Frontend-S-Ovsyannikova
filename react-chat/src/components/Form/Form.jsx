import React from "react";
import Message from '../../components/Message/Message';
import {Attachment} from "@mui/icons-material";
import {getMessage} from "@testing-library/jest-dom/dist/utils";

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        let message_list = []
        if (this.props.name !== 'Общий чат')
            message_list = JSON.parse(localStorage.getItem("chats"))[this.props.name]
        this.state = {
            name: this.props.name,
            myName: this.props.myName,
            messages: message_list,
            index: message_list.slice(-1)[0]['_id'],
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
        this.setState({
            text: '',
            index: this.state.index + 1
        })

        let message = {
            '_id': this.state.index,
            'author': this.state.myName,
            'timestamp': `${time.getHours()}:${time.getMinutes()}`,
            'text': this.state.text,
        }

        this.saveToLocalStorage(message)
    }

    saveToLocalStorage(message) {
        this.state.messages.push(message)

        let chats_dict = JSON.parse(localStorage['chats'])
        chats_dict[this.state.name] = this.state.messages
        localStorage.setItem("chats", JSON.stringify(chats_dict))
    }

    getMessages = () => {
        const API_URL = 'https://localhost:9000/messages'
        fetch(`${API_URL}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    messages: data.messages
                });
            });
    };

    restoreHistory(messages, myName) {
        return (
            <>
                {messages.map((message) =>
                    <Message
                        key={message._id}
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
                <div className="input-message">
                    <input className="form-input"
                           name="message-text"
                           placeholder="Cообщение"
                           onChange={this.handleChange}
                           type="text"
                           value={this.state.text}/>
                    <button>
                        <Attachment className={'icon'}/>
                    </button>
                </div>
            </form>
        )
    }
}
