import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

export default function ChatListHeader() {
    return (
        <header className="site-header-messenger">
            <div className="burger-label">
                <button className="burger-icon">
                    <MenuIcon className={'icon'}/>
                </button>
                <p className="messenger-label">Messenger</p>
            </div>
            <button>
                <SearchIcon className={'icon'}/>
            </button>
        </header>
    )
}