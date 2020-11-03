import React from "react";
import { Router, Route } from "react-router-dom";
import Header from "./Header";
import history from "../history";
import Welcome from "./Welcome";
import ListItem from "./ListItem";
import SearchItem from "./SearchItem";
import CheckInsurance from "./CheckInsurance";
import BookSlot from "./BookSlot";
import Payments from "./Payments";

class App extends React.Component {
  
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <Header />
            <Route path="/" exact component={Welcome} />
            <Route path="/item/new" exact component={ListItem} />
            <Route path="/item/search" exact component={SearchItem} />
            <Route path="/item/insurance/:id" exact component={CheckInsurance} />
            <Route path="/item/book/:id" exact component={BookSlot} />
            <Route path="/item/payments/:id" exact component={Payments} />


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
