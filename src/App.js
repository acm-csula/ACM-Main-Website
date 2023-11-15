import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Home from "./components/home/home";
import Config from "./config";
import Navi from "./components/navbar/Navi.js";
import AboutUs from "./components/aboutus/AboutUs";
import Calendar from "./components/calendar/Calendar";
import Sponsor from "./components/sponsor/Sponsor";
import Membership from "./components/membership/Membership";
import ContactUs from "./components/contactus/ContactUs";
import FAQ from "./components/faq/FAQ";
import Events from "./components/events/Events";
import Projects from "./components/projects/Projects";
import Professional from "./components/professional-events/Professional";
import Board from "./components/board/Board";
import Programs from "./components/programs/Programs";
import FooterCarousel from "./components/footercarousel/FooterCarousel.js";
import Success from "./components/membership/CheckoutComponents/Success.js";
import Portal from "./components/portal/Portal.js";
import NewBoard from "./components/board/NewBoard";
import ACM_Login from "./components/login/ACM_Login.js";
import Admin from "./components/admin/Admin";
import { Navbar } from "react-bootstrap";

import ProjectsAdmin from "./components/admin/projectsAdmin/ProjectsAdmin";
import BoardAdmin from "./components/admin/boardAdmin/BoardAdmin";
import EventsAdmin from "./components/admin/eventsAdmin/EventsAdmin";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      calendarEvents: [],
    };
  }

  componentDidMount() {
    // TODO: Make this configurable and change the "timeMin" parameter dynamically.
    fetch(
      "https://www.googleapis.com/calendar/v3/calendars/acm.calstatela%40gmail.com/events?orderBy=startTime&singleEvents=true&timeMin=2019-08-22T15%3A17%3A00%2B00%3A00&key=" +
        Config.api_key
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            calendarEvents: result.items,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    const SuccessPage = () => <Route path="/Success" component={Success} />;

    const AdminContainer = () => (
      <>
        <Route exact path="/admin" component={Admin} />
        <Route path="/login" component={ACM_Login} />
        <Route path="/admin/projects" component={ProjectsAdmin} />
        <Route path="/admin/events" component={EventsAdmin} />
        <Route path="/admin/board" component={BoardAdmin} />
      </>
    );
    const DefaultContainer = () => (
      <>
        <Navi />
        <Route exact path="/" component={Home} />
        {/*<Route exact path='/' render={() => <Body state={this.state}/>}/>*/}
        {/*<Route path="/sponsor" component={Sponsor} />*/}

        <Route path="/aboutus" component={AboutUs} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/membership" component={Membership} />
        <Route path="/faq" component={FAQ} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/events" component={Events} />
        <Route path="/projects" component={Projects} />
        <Route path="/professional" component={Professional} />
        <Route path="/board" component={NewBoard} />
        <Route path="/programs" component={Programs} />
        <Route path="/portal" component={Portal} />
        <Route path="/Success" component={SuccessPage} />
        <Route
          path="/discord"
          component={() => {
            window.location = "https://discord.com/invite/wX58JRv";
            return null;
          }}
        />

        <FooterCarousel />
      </>
    );
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path={["/login", "/admin*"]}
              component={AdminContainer}
            />
            <Route component={DefaultContainer} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
