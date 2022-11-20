import React, {Component} from "react";
import PageChat from "./pages/PageChat/PageChat";
import PageChatList from "./pages/PageChatList/PageChatList";
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import PageProfile from "./pages/PageProfile/PageProfile";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Дженнифер'
        }
    }

    render() {
        return (
            <Router>
                <Routes>
                    <Route path='/' element={
                        <PageChatList onClick={(name) => this.setState({name: name})}/>
                    }></Route>
                    <Route path='/chat/:username' element={
                        <PageChat name={this.state.name}/>
                    }></Route>
                    <Route path='/profile' element={
                        <PageProfile/>
                    }></Route>
                </Routes>
            </Router>
        )
    }
}