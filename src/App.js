import React from 'react';
import Navigator from './layout/navigator';
import Footer from './layout/footer';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import RouterHook from './router';

function App() {
  return (
    <Router>
      <Navigator />
      <RouterHook />
      <Footer />
    </Router>
  );
}

export default App;
