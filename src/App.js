import './App.css';
import { useState } from 'react';
import TimeCard from './Components/TimeCard';
import image from './images/image-jeremy.png';
// import UserCard from './Components/UserCard';
import data from './data.json';

const App = () => {

  const [length, setLength] = useState("weekly");
    const setLengths = (e) => {
        setLength(e.target.value);
    };

    console.log(length);

  function createCard(stats) {
    //  TEMPORARY SOLUTION
    if(length === "weekly") {
    return (
      <TimeCard 
        key={stats.id}
        color={stats.color}
        img={stats.img}
        title={stats.title}
        current={stats.timeframes.weekly.previous}
        previous={stats.timeframes.weekly.previous}
        message={stats.timeframes.weekly.message}
      />
    )
  } else if (length === "daily") {
    return (
      <TimeCard 
        key={stats.id}
        color={stats.color}
        img={stats.img}
        title={stats.title}
        current={stats.timeframes.daily.previous}
        previous={stats.timeframes.daily.previous}
        message={stats.timeframes.daily.message}
      />
    )
  } else if(length === "monthly") {
    return (
      <TimeCard 
        key={stats.id}
        color={stats.color}
        img={stats.img}
        title={stats.title}
        current={stats.timeframes.monthly.previous}
        previous={stats.timeframes.monthly.previous}
        message={stats.timeframes.monthly.message}
      />
    )
  }
  };

  return (
    <div className="page-container">
      <div className="page-wrapper">
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
              <li><button className="button" value="daily" onClick={e => setLengths(e, "value")}>Daily</button></li>
              <li><button className="button" value="weekly" onClick={e => setLengths(e, "value")}>Weekly</button></li>
              <li><button className="button" value="monthly" onClick={e => setLengths(e, "value")}>Monthly</button></li>
            </ul>
          </div>
        </div>
        {data.map(createCard)}
      </div>
    </div>
  );
}

export default App;
