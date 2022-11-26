import Dialogue from "../components/Dialogue/Dialogue";
import React from "react";
import {Link} from "react-router-dom";
import {chats, usernames} from "../chat_list";

export default function restoreDialogues(props) {
    if (!localStorage.getItem("chats")) {
        localStorage.setItem("chats", JSON.stringify(chats))
    }
    const chatHistory = JSON.parse(localStorage.getItem("chats"))
    console.log(chatHistory)

    return (
        <>
            {Object.keys(chatHistory).map((key) =>
                <Link to={`chat/${usernames[key]}`}>
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