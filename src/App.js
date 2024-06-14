import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import AddBus from './components/AddBus';

function App() {
  return (
    <div className="App">
      <Login/>
      <Signup/>
      <AddBus/>
    </div>
  );
}

export default App;
