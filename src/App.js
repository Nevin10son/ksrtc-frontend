import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import AddBus from './components/AddBus';
import SearchBus from './components/SearchBus';
import Viewall from './components/Viewall';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Login/>
      <Signup/>
      <AddBus/>
      <SearchBus/>
      <Viewall/>
      <NavBar/>
    </div>
  );
}

export default App;
