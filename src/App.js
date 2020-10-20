import React from 'react';
import Header from './layout/header';
import Navigator from './layout/navigator';
import Footer from './layout/footer';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Navigator />
      <Header />
      <div className='container'>

      </div>
      <Footer />
    </Router>
  );
}

export default App;
