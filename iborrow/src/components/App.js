import React from "react";
import { Router, Route } from "react-router-dom";
import Header from "./Header";
import history from "../history";
import Welcome from "./Welcome";
import ListItem from "./ListItem";
import SearchItem from "./SearchItem";
import CheckInsurance from "./CheckInsurance";
import BookSlot from "./BookSlot";

class App extends React.Component {
  
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <Header />
            <Route path="/" exact component={Welcome} />
            <Route path="/form" exact component={ListItem} />
            <Route path="/search" exact component={SearchItem} />
            <Route path="/insurance" exact component={CheckInsurance} />
            <Route path="/book" exact component={BookSlot} />


            {/* <Route path="" exact component={a} />
            <Route path="" exact component={b} />
            <Route path="" exact component={v} />
            <Route path="" exact component={c} />
            <Route path="" exact component={d} /> */}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
