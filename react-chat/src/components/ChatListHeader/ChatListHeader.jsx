import React from "react";

export default function ChatListHeader() {
    return (
        <header className="site-header-messenger">
            <div className="burger-label">
                <a className="burger-icon">
                    <i className="material-icons icon">menu</i>
                </a>
                <p className="messenger-label">Messenger</p>
            </div>
            <a>
                <i className="material-icons icon">search</i>
            </a>
        </header>
    )
}