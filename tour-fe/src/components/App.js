import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Header from '../containers/HeaderContainer';
import Article from './Article';
import Footer from './Footer';
import moment from "moment";
import "moment/locale/zh-tw";

moment.locale("zh-tw");

function App() {
  return (
    <Router>
      <div className="App" id="App">
        <Header />
        <Article />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
