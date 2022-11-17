import React from "react";

export default function ChatListHeader() {
    return (
        <header className="site-header-messenger">
            <div className="burger-label">
                <button className="burger-icon">
                    <i className="material-icons icon">menu</i>
                </button>
                <p className="messenger-label">Messenger</p>
            </div>
            <button>
                <i className="material-icons icon">search</i>
            </button>
        </header>
    )
}