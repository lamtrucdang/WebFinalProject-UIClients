import logo from './logo.svg';
import './App.css';
import Login from './screens/Login';
import Register from './screens/Register';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Register />
    </div>
  );
}

export default App;
