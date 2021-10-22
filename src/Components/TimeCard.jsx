import React from 'react';
import image from '../images/icon-ellipsis.svg';

const TimeCard = (props) => {
    return (
        <div className="card">
            <div className="card-top">

            </div>
            <div className="card-bottom">
                <div className="text-wrapper">
                    <div className="text">
                        Work
                        <img src={image} alt="ellipsis"/>
                    </div>
                    <div className="text">
                        <span className="hours">32hrs</span>
                        <span className="past-time">Last Week - 36hrs</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimeCard;
