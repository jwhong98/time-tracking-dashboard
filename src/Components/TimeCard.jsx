import React from 'react';
import image from '../images/icon-ellipsis.svg';

const TimeCard = (props) => {
    return (
        <div className="card">
            <div className="card-top" style={{backgroundColor: props.color, backgroundImage: `url(${props.img})`}}></div>
            <div className="card-bottom">
                <div className="text-wrapper">
                    <div className="text">
                        {props.title}
                        <img src={image} alt="ellipsis"/>
                    </div>
                    <div className="text">
                        <span className="hours">{props.current}</span>
                        <span className="past-time"><span className="message">{props.message}</span>{props.previous}hrs</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimeCard;
