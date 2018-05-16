import React from 'react'

import "./styles/App.css"
import  loguser from './img/logo.png'

const UserProfile = () => (
    <div className="UserProfile">
        <div className="User">
            <div className="image">
                <img src={loguser} alt="profile"/>
            </div>
            <div className="name">Juan Carlos <strong className="arrow">↓</strong>
            </div>
        </div>
    </div>
)

export default UserProfile;