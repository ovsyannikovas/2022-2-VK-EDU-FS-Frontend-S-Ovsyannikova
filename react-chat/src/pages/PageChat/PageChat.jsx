import {chats} from "../../chat_list";
import React from "react";
import ChatHeader from '../../components/ChatHeader/ChatHeader';
import Form from '../../components/Form/Form'

export default function PageChat(props) {
    if (!localStorage.getItem("chats")) {
        localStorage.setItem("chats", JSON.stringify(chats))
    }

    return (<>
        <ChatHeader props={props}></ChatHeader>
        <Form name={props.name} myName={"sveta"}></Form>
    </>)
}

