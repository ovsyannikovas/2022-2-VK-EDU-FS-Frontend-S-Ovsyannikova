import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function ChatHeader(props) {
    return (
        <header className="site-header">
            <button onClick={() => props.props.onClick('chat-list')} className="logo arrow">
                <ArrowBackIcon className={'icon'}/>
            </button>
            <button>
                <div className="user-info">
                    <AccountCircleIcon className={'avatar'}/>
                    <div className="user-text">
                        <p className="name">{props.props.name}</p>
                        <p className="time">была 2 часа назад</p>
                    </div>
                </div>
            </button>
            <div className="buttons">
                <button>
                    <SearchIcon className={'icon'}/>
                </button>
                <button>
                    <MenuIcon className={'icon'}/>
                </button>
            </div>
        </header>
    )
}