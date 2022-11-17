import React, {Component} from "react";
import PageChat from "./pages/PageChat/PageChat";
import PageChatList from "./pages/PageChatList/PageChatList";

export default class App extends Component {
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
                        <PageChat onClick={(page) => this.setState({page: page})} name={this.state.name}/> :
                        <PageChatList onClick={(page, name) => this.setState({page: page, name: name})}/>
                }
            </>
        )
    }
}