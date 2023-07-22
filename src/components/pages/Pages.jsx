import React from 'react';
import Header from '../common/header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../home/Home';
import Footer from '../common/footer/Footer';
import About from '../about/About';
import ceremony from '../ceremony/ceremony';
import Blog from '../blog/Blog';
import Services from '../services/Services';
import Contact from '../contact/Contact';
import About2 from '../about/About2';
import About3 from '../about/About3';
import About4 from '../about/About4';
import About5 from '../about/About5';
import About6 from '../about/About6';
import About7 from '../about/About7';
import About8 from '../about/About8';
import About9 from '../about/About9';
import HomeFrench from '../home/HomeFrench';
import Booking from '../booking/booking'; 
import thank from '../thank/thank'; 
import Home1 from '../home/Home1';

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/Project2FINALCalebXPRIENCE" component={Home} />
          <Route exact path="/" component={Home1} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/ceremony" component={ceremony} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about2" component={About2} />
          <Route exact path="/about3" component={About3} />
          <Route exact path="/about4" component={About4} />
          <Route exact path="/about5" component={About5} />
          <Route exact path="/about6" component={About6} />
          <Route exact path="/about7" component={About7} />
          <Route exact path="/about8" component={About8} />
          <Route exact path="/about9" component={About9} />
          <Route exact path="/homefrench" component={HomeFrench} />
          <Route exact path="/booking" component={Booking} /> 
          <Route exact path="/thank" component={thank} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default Pages;

