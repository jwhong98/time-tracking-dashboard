// import React, { useState } from 'react'
// import image from '../images/image-jeremy.png';

// const UserCard = () => {

//     const [length, setLength] = useState("weekly");
//     const setLengths = (e) => {
//         setLength(e.target.value);
//     };
//     console.log(length);
//     return (
//         <div className="user-card">
//             <div className="top">
//                 <img className="user-img" alt="user_img" src={image}/>
//                 <div className="info">
//                     <p className="intro">Report for</p>
//                     <h2 className="name">Jeremy Robson</h2>
//                 </div>
//             </div>
//             <div className="bottom">
//                 <ul className="duration-list">
//                     <li><button className="button" value="daily" onClick={e => setLengths(e, "value")}>Daily</button></li>
//                     <li><button className="button" value="weekly" onClick={e => setLengths(e, "value")}>Weekly</button></li>
//                     <li><button className="button" value="monthly" onClick={e => setLengths(e, "value")}>Monthly</button></li>
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default UserCard;
