import React from "react";
import Message from '../../components/Message/Message';
import {Attachment} from "@mui/icons-material";

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        let message_list = JSON.parse(localStorage.getItem("chats"))[this.props.name]
        // if (this.props.name !== 'Общий чат')
        //     message_list = JSON.parse(localStorage.getItem("chats"))[this.props.name]
        this.state = {
            name: this.props.name,
            myName: this.props.myName,
            messages: message_list,
            index: message_list.slice(-1)[0]['_id'],
            text: '',
        }

        this.componentDidMount = this.componentDidMount.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        if (this.state.name === 'Общий чат')
            this.getMessages()
    }

    getMessages = () => {
        const API_URL = 'https://tt-front.vercel.app/messages'
        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                if (data !== undefined) {
                    this.setState({
                        messages: data
                    });
                }
            });
    };

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

        if (this.state.name === 'Общий чат') {
            let message = fetch('https://tt-front.vercel.app/message', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    'author': this.state.myName,
                    'text': this.state.text,
                }),
            })
        } else {
            let message = {
                '_id': this.state.index,
                'author': this.state.myName,
                'timestamp': `${time}`,
                'text': this.state.text,
            }

            this.saveToLocalStorage(message)
        }
    }

    saveToLocalStorage(message) {
        this.state.messages.push(message)

        let chats_dict = JSON.parse(localStorage['chats'])
        chats_dict[this.state.name] = this.state.messages
        localStorage.setItem("chats", JSON.stringify(chats_dict))
    }

    restoreHistory(messages, myName) {
        if (this.state.name === 'Общий чат')
            this.componentDidMount()
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
