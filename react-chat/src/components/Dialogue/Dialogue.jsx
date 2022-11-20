import React from "react";
import {DoneAll} from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Dialogue(props) {
    const value = props.value
    const name = props.name

    return (
        <button onClick={() => props.onClick(name)} className="dialogue">
            <AccountCircleIcon className={'ava'}/>
            <div className="dialogue-text">
                <div className="dialogue-user-text">
                    <p className="dialogue-name">{name}</p>
                    <p className="dialogue-message">{value.slice(-1)[0]["content"]}</p>
                </div>
                <div className="dialogue-nums">
                    <p className="dialogue-time">{value.slice(-1)[0]["time"]}</p>
                    <DoneAll/>
                    {/*<p class="dialogue-counter">99</p>*/}
                </div>
            </div>
        </button>
    )
}