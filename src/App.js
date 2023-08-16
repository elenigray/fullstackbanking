import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        <NavBar></NavBar>
        <Outlet></Outlet>
        </body>
    </div>
  );
}

export default App;
