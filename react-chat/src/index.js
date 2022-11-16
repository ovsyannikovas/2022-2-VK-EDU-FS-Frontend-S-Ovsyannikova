import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ChatList from "./chats";
import ChatPage from "./chat";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'chat-list',
            name: 'Дженнифер'
        }
    }

    render() {
        return (
            <>
                {
                    // this.state.currentPage === 'chat' ?
                        <ChatPage /*onClick={(page) => this.setState({currentPage: page})}*/ name={this.state.name}/> //:
                        // <ChatList onClick={(page, name) => this.setState({currentPage: page, name: name})}/>
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

