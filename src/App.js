import './App.css';
//common components
import TopBar from './components/TopBar';
import Display from './components/Display';
import BotBar from './components/BotBar';


function App() {
  return (
    <div className="App">
      <TopBar/>
      <Display/>
      <BotBar/>
    </div>
  );
}

export default App;