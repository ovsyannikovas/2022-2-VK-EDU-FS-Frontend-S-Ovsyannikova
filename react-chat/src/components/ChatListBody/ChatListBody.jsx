import React from "react";
import restoreDialogues from '../../utils/restoreDialogues';

export default function ChatListBody(props) {
    return (
        <div>
            <button>
                <div className="new-message-btn">
                    <i className="material-icons">edit</i>
                </div>
            </button>
            <div className="message-list messages">
                {restoreDialogues(props.props)}
            </div>
        </div>
    )
}

