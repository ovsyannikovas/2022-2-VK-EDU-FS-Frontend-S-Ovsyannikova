import React from "react";

export default function PageProfileBody () {
    return (
        <div className="container">
            <div className="edit-form">
                <div className="edit-form-photo">
                    <div className="edit-form-photo-background">
                        <i className="material-icons icon">photo_camera</i>
                    </div>
                    <button></button>
                </div>
                <label>
                    <span className="input-desc">Full name</span>
                    <input className="text-input" placeholder="" type="text"/>
                </label>
                <label>
                    <span className="input-desc">Username</span>
                    <input className="text-input" placeholder="" type="text" value="@"/>
                        <span className="input-limit">Minimum length is 5 characters</span>
                </label>
                <label>
                    <span className="input-desc">Bio</span>
                    <input className="text-input" placeholder="" type="text"/>
                        <span className="input-limit">Any details about you</span>
                </label>
            </div>
        </div>
    )
}