import React from "react";

export default function Dialogue(props) {
    const value = props.value
    const name = props.name

    return (
        <a href="#" onClick={() => props.onClick('chat', name)} className="dialogue">
            <i className="material-icons">account_circle</i>
            <div className="dialogue-text">
                <div className="dialogue-user-text">
                    <p className="dialogue-name">{name}</p>
                    <p className="dialogue-message">{value.slice(-1)[0]["content"]}</p>
                </div>
                <div className="dialogue-nums">
                    <p className="dialogue-time">{value.slice(-1)[0]["time"]}</p>
                    <i className="material-icons">done_all</i>
                    {/*<p class="dialogue-counter">99</p>*/}
                </div>
            </div>
        </a>
    )
}