import React from "react";

export default function ChatHeader(props) {
    return (
        <header className="site-header">
            <button onClick={() => props.props.onClick('chat-list')} className="logo arrow">
                <i className="material-icons icon">arrow_back</i>
            </button>
            <button>
                <div className="user-info">
                    <i className="material-icons avatar">account_circle</i>
                    <div className="user-text">
                        <p className="name">{props.props.name}</p>
                        <p className="time">была 2 часа назад</p>
                    </div>
                </div>
            </button>
            <div className="buttons">
                <button>
                    <i className="material-icons icon">search</i>
                </button>
                <button>
                    <i className="material-icons icon">menu</i>
                </button>
            </div>
        </header>
    )
}