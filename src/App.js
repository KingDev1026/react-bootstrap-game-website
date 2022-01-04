import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import Header from './components/header/Header';
import Topbanner from './components/topbanner/Topbanner';
import Lore from './components/lore/Lore';
import About from './components/about/About';
import Club from './components/club/Club';
import Roadmap from './components/roadmap/Roadmap';
import Team from './components/team/Team';
import Faqs from './components/faqs/Faqs';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Topbanner/>
      <Lore/>
      <About/>
      <Club/>
      <Roadmap/>
      <Team/>
      <Faqs/>
      <Footer/>
    </div>
  );
}

export default App;
