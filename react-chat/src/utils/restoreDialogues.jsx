import Dialogue from "../components/Dialogue/Dialogue";
import React from "react";

export default function restoreDialogues(props) {
    const chatHistory = JSON.parse(localStorage.getItem("chats"))

    return (
        <>
            {Object.keys(chatHistory).map((key) =>
                <Dialogue
                    key = {key}
                    name={key}
                    value={chatHistory[key]}
                    onClick={props.onClick}
                />
            )}
        </>
    )
}