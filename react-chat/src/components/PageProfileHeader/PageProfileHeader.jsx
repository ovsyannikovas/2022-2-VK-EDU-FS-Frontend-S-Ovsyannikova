import React from "react";
import {Link} from "react-router-dom";

export default function PageProfileHeader () {
    return (
        <header className="site-header-messenger">
            <div className="burger-label">
                <Link to='/'>
                    <button className="burger-icon">
                        <i className="material-icons icon">arrow_back</i>
                    </button>
                </Link>
                <p className="messenger-label">Edit profile</p>
            </div>
            <button>
                <i className="material-icons icon">check</i>
            </button>
        </header>
    )
}