import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Home from './components/home/home';
import Config from './config';
import Navi from './components/navbar/Navi.js';
import AboutUs from './components/aboutus/AboutUs'
import Calendar from './components/calendar/Calendar'
import Sponsor from './components/sponsor/Sponsor'
import Membership from './components/membership/Membership'
import ContactUs from './components/contactus/ContactUs'
import Events from './components/events/Events';
import Projects from './components/projects/Projects'
import Professional from './components/professional/Professional';
import Board from './components/board/Board';
import Programs from './components/programs/Programs';
import FooterCarousel from './components/footercarousel/FooterCarousel.js';
import Success from './components/membership/CheckoutComponents/Success.js';
import Portal from './components/portal/Portal.js'


class App extends React.Component {

  //test
  constructor(props){
    super(props)
    this.state={
      error: null,
      isLoaded: false,
      calendarEvents:[]
    }
  }

  componentDidMount() {
    // TODO: Make this configurable and change the "timeMin" parameter dynamically.
    fetch("https://www.googleapis.com/calendar/v3/calendars/acm.calstatela%40gmail.com/events?orderBy=startTime&singleEvents=true&timeMin=2019-08-22T15%3A17%3A00%2B00%3A00&key=" + Config.api_key)
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
    const SuccessPage = () => (
      <Route path='/Success' component={Success}/>
    )
    return (
      <div>
        <BrowserRouter>
          <Navi/>
          <Route exact path='/' component={Home}/>
          {/*<Route exact path='/' render={() => <Body state={this.state}/>}/>*/}
          <Route path='/sponsor' component={Sponsor}/>
          <Route path='/aboutus' component={AboutUs}/>
          <Route path='/calendar' component={Calendar}/>
          <Route path='/membership' component={Membership}/>
          <Route path='/contactus' component={ContactUs}/>
          <Route path='/events' component={Events}/>
          <Route path='/projects' component={Projects}/>
          <Route path='/professional' component={Professional}/>
          <Route path='/board' component={Board}/>
          <Route path='/programs' component={Programs}/>
          <Route path='/portal' component={Portal}/>
          <Route path='/Success' component={SuccessPage}/>
          <Route path='/discord' component={() => { window.location = 'https://discord.com/invite/wX58JRv'; return null;} }/>
        </BrowserRouter>
        <FooterCarousel/>
      </div>
    );
  }
}

export default App;
