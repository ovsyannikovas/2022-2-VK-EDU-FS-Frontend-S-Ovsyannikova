import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {chatList} from "./chats";

class App extends Component {
    render () {
        return (
            <>
                {chatList()}
            </>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

