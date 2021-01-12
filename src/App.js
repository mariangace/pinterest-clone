import Header from './components/Header/Header';
import Mainboard from './components/Mainboard/Mainboard';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <Header />  
      </div>
      <div className="app__body">
        <Mainboard />
      </div>
    </div>
  );
}

export default App;
