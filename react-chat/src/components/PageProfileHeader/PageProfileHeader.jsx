import React from "react";

export default function PageProfileHeader () {
    return (
        <header className="site-header-messenger">
            <div className="burger-label">
                <button className="burger-icon">
                    <i className="material-icons icon">arrow_back</i>
                </button>
                <p className="messenger-label">Edit profile</p>
            </div>
            <button>
                <i className="material-icons icon">check</i>
            </button>
        </header>
    )
}