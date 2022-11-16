import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ChatList from "./chats";
import ChatPage from "./chat";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'chat-list',
            name: 'Дженнифер'
        }
    }

    render() {
        return (
            <>
                {
                    this.state.page === 'chat' ?
                        <ChatPage onClick={(page) => this.setState({page: page})} name={this.state.name}/> :
                        <ChatList onClick={(page, name) => this.setState({page: page, name: name})}/>
                }
            </>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

