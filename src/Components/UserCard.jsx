import React from 'react'
import image from '../images/image-jeremy.png';

const UserCard = () => {
    return (
        <div className="user-card">
            <div className="top">
                <img className="user-img" alt="user_img" src={image}/>
                <div className="info">
                    <p className="intro">Report for</p>
                    <h2 className="name">Jeremy Robson</h2>
                </div>
            </div>
            <div className="bottom">
                <ul className="duration-list">
                    <li><button className="button" value="daily">Daily</button></li>
                    <li><button className="button" value="weekly">Weekly</button></li>
                    <li><button className="button" value="monthly">Monthly</button></li>
                </ul>
            </div>
        </div>
    )
}

export default UserCard;
