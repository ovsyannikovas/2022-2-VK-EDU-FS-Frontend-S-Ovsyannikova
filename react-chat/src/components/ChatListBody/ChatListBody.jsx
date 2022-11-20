import React from "react";
import restoreDialogues from '../../utils/restoreDialogues';
import EditIcon from '@mui/icons-material/Edit';

export default function ChatListBody(props) {
    return (
        <div>
            <button className="new-message-btn pulse">
                <EditIcon/>
            </button>
            <div className="message-list messages">
                {restoreDialogues(props.props)}
            </div>
        </div>
    )
}

