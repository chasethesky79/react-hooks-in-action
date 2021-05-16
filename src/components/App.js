import logo from './logo.svg';
import '../App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaCalendarAlt, FaDoorOpen, FaUsers } from 'react-icons/fa';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
             <li>
               <Link to='/bookings' className='btn btn-header'>
                 <FaCalendarAlt/>
                 <span>Bookings</span>
               </Link>
             </li>
             <li>
               <Link to='/bookabless' className='btn btn-header'>
                 <FaDoorOpen/>
                 <span>Bookables</span>
               </Link>
             </li>
             <li>
               <Link to='/bookings' className='btn btn-header'>
                 <FaUsers/>
                 <span>Users</span>
               </Link>
             </li>
            </ul>
          </nav>
        </header>
      </div>
    </Router>
  );
}

export default App;
