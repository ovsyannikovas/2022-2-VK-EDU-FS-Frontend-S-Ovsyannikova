import {chats} from "../../chat_list";
import React from "react";
import ChatListHeader from '../../components/ChatListHeader/ChatListHeader';
import ChatListBody from '../../components/ChatListBody/ChatListBody';

export default function PageChatList(props) {
    if (!localStorage.getItem("chats")) {
        localStorage.setItem("chats", JSON.stringify(chats))
    }

    return <>
        <ChatListHeader></ChatListHeader>
        <ChatListBody props={props}></ChatListBody>
    </>
}