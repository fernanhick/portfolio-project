import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import {useState} from 'react';
import Topbar from './components/topbar/Topbar';
function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [isTbOpen, setTbIsOpen] = useState(true);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const toggleTb = () => {
    setTbIsOpen(!isTbOpen);
  };
  return (
    <Router>
      <div className='App'>
        <Topbar isTbOpen={isTbOpen} />
        <Navbar toggle={toggle} isTbOpen={isTbOpen} toggleTb={toggleTb} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
      </div>
    </Router>
  );
}

export default App;
