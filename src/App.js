import React from 'react';
import logo from './logo.svg';
import {BrowserRouter,Route} from 'react-router-dom'

import './App.css';
import Navi from './components/navbar/Navi.js';
import AboutUs from './components/aboutus/AboutUs'
import Calendar from './components/calendar/Calendar'
import Membership from './components/membership/Membership'
import ContactUs from './components/contactus/ContactUs'

import HeaderCarousel from './components/headercarousel/HeaderCarousel.js';
import Body from './components/body/Body.js';
import FooterCarousel from './components/footercarousel/FooterCarousel.js';

class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state={
      error: null,
      isLoaded: false,
      calendarEvents:[]
    }
  }

  componentDidMount() {
    fetch("https://www.googleapis.com/calendar/v3/calendars/26phfmnvv0r3fi3eaunsnv13oo@group.calendar.google.com/events?orderBy=startTime&singleEvents=true&key=AIzaSyDGuNUOIbfmjWtUg5lexVuaFRgKrtAg2zQ")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            calendarEvents : result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render(){
    return (
      <div>
        <BrowserRouter>
          <Navi/>
          <Route path='/' render={() => <Body state={this.state}/>}/>
          <Route path='/aboutus' component={AboutUs}/>
          <Route path='/calendar' component={Calendar}/>
          <Route path='/membership' component={Membership}/>
          <Route path='/contactus' component={ContactUs}/>
        </BrowserRouter>
        <FooterCarousel/>
      </div>
    );
  }
}

export default App;
