import React from "react";

export default function ChatHeader(props) {
    return (
        <header className="site-header">
            <a href='\' onClick={() => props.props.onClick('chat-list')} className="logo arrow">
                <i className="material-icons icon">arrow_back</i>
            </a>
            <a href='\'>
                <div className="user-info">
                    <i className="material-icons avatar">account_circle</i>
                    <div className="user-text">
                        <p className="name">{props.props.name}</p>
                        <p className="time">была 2 часа назад</p>
                    </div>
                </div>
            </a>
            <div className="buttons">
                <a href='\'>
                    <i className="material-icons icon">search</i>
                </a>
                <a href='\'>
                    <i className="material-icons icon">menu</i>
                </a>
            </div>
        </header>
    )
}