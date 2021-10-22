import './App.css';
import TimeCard from './Components/TimeCard';
import UserCard from './Components/UserCard';
import data from './data.json';

function createCard(stats) {
  return (
    <TimeCard 
      key={stats.id}
      title={stats.title}
      current={stats.timeframes.weekly.current}
      previous={stats.timeframes.weekly.previous}
    />
  )
};

function App() {
  return (
    <div className="page-container">
      <div className="page-wrapper">
        <UserCard />
        {data.map(createCard)}
      </div>
    </div>
  );
}

export default App;
