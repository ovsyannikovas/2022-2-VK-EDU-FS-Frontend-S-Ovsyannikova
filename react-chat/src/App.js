import React, {Component} from "react";
import PageChat from "./pages/PageChat/PageChat";
import PageChatList from "./pages/PageChatList/PageChatList";
import {HashRouter as Router, Routes, Route, Link} from 'react-router-dom';
import PageProfile from "./pages/PageProfile/PageProfile";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: <Link to='/chat-list'/>,
            name: 'Дженнифер'
        }
    }

    render() {
        return (
            // <PageProfile></PageProfile>
            <Router>
                <Routes>
                    <Route path='/' element={
                        <PageChatList onClick={(page, name) => this.setState({page: <Link to='/chat/id'/>, name: name})}/>
                    }></Route>
                    <Route path='/chat/id' element={
                        <PageChat onClick={(page) => this.setState({page: <Link to='/chat-list'/>})} name={this.state.name}/>
                    }></Route>
                </Routes>
            </Router>
        )
    }
}