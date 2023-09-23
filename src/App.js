import logo from './logo.svg';
import './App.css';
import TopBar from "../src/components/Topbar/TopBar"
import FullMenu from './menu/FullMenu';

function App() {
  return (
    <div className="App">
     
        <TopBar/>
        <FullMenu/>
     
    </div>
  );
}

export default App;
