import React from 'react';
import { BrowserRouter as Router, Route, Routes, NewLink, NavLink } from 'react-router-dom';
import Haqqında from './Components/Haqqında';
import İşNümunələri from './Components/İş nümunələri';
import Əlaqə from './Components/Əlaqə';
import './App.css'

const App = () => {
  return (
    <Router>
      <div>
        <div className='menu'>
          <NavLink to='/'>Haqqında</NavLink>
          <NavLink to='portfolio'>İş Nümunələri</NavLink>
          <NavLink to='contact'>Əlaqə</NavLink>
        </div>



        <Routes>
          <Route path="/" element={<Haqqında />} />
          <Route path="/portfolio" element={<İşNümunələri />} />
          <Route path="/contact" element={<Əlaqə />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
