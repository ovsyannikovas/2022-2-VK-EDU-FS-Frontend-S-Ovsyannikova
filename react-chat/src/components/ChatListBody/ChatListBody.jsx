import React from "react";
import restoreDialogues from '../../utils/restoreDialogues';

export default function ChatListBody(props) {
    return (
        <div>
            <button className="new-message-btn pulse">
                <i className="material-icons">edit</i>
            </button>
            <div className="message-list messages">
                {restoreDialogues(props.props)}
            </div>
        </div>
    )
}

