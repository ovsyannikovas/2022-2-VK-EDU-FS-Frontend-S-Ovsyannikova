import Dialogue from "../components/Dialogue/Dialogue";
import React from "react";
import {Link} from "react-router-dom";

export default function restoreDialogues(props) {
    const chatHistory = JSON.parse(localStorage.getItem("chats"))

    return (
        <>
            {Object.keys(chatHistory).map((key) =>
                <Link to='chat/id'>
                    <Dialogue
                        key = {key}
                        name={key}
                        value={chatHistory[key]}
                        onClick={props.onClick}
                    />
                </Link>
            )}
        </>
    )
}