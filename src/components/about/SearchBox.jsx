import React from 'react';
import { Link } from 'react-router-dom';
import './SearchBox.css';
import About2 from './About2';
import About3 from './About3';
import About4 from './About4';
import About5 from './About5';
import About6 from './About6';
import About7 from './About7';
import About8 from './About8';
import About9 from './About9';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(category) {
    switch (category) {
      case 'Kid':
        window.location.href = '/about2';
        break; 
      case 'Baby':
        window.location.href = '/about9';
        break;
      case 'Adult':
        window.location.href = '/about3';
        break;
      case 'Senior':
        window.location.href = '/about4';
        break;
      case 'Mission':
        window.location.href = '/about5';
        break;
      case 'Event':
        window.location.href = '/about6';
        break;
      case 'Male':
        window.location.href = '/about7';
        break;
      case 'Female':
        window.location.href = '/about8';
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="SearchBox">
        <button onClick={() => this.handleButtonClick('Kid')}>Kid</button>
        <button onClick={() => this.handleButtonClick('Baby')}>Baby</button>
        <button onClick={() => this.handleButtonClick('Adult')}>Adult</button>
        <button onClick={() => this.handleButtonClick('Senior')}>Senior</button>
        <button onClick={() => this.handleButtonClick('Mission')}>Mission</button>
        <button onClick={() => this.handleButtonClick('Event')}>Event</button>
        <button onClick={() => this.handleButtonClick('Male')}>Male</button>
        <button onClick={() => this.handleButtonClick('Female')}>Female</button>
      </div>
    );
  }
}

export default SearchBox;
