import './App.css';
import TimeCard from './Components/TimeCard';
import UserCard from './Components/UserCard';

function createCard() {
  
};

function App() {
  return (
    <div className="page-container">
      <div className="page-wrapper">
        <UserCard />
        <TimeCard />
      </div>
    </div>
  );
}

export default App;
