import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { connect } from "react-redux";
import { getProduct } from "../actions/index";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

class BookSlot extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getProduct(id);
  }

  renderMap() {
    if (this.props.loc) {
      console.log("here");
      return (
        <Map
          google={this.props.google}
          zoom={8}
          style={{
            width: "100%",
            height: "500px",
          }}
          initialCenter={{ lat: this.props.loc.lat, lng: this.props.loc.long }}
        >
          <Marker
            position={{ lat: this.props.loc.lat, lng: this.props.loc.long }}
          />
        </Map>
      );
    } else {
      return <h1>Loading....</h1>;
    }
  }

  renderDates() {
    if (this.props.from) {
      return (
        <div className="container">
          <h3>Availability</h3>
          <Calendar />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="ui grid form">
        <div className="eight wide column">{this.renderDates()}</div>
        <div className="eight wide column">{this.renderMap()}</div>
        <button className="ui green button">Buy Now</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  if (!state["prod"][ownProps.match.params.id]) {
    return "";
  } else {
    return {
      loc: state["prod"][ownProps.match.params.id]["loc"],
      from: state["prod"][ownProps.match.params.id]["from"],
      till: state["prod"][ownProps.match.params.id]["till"],
    };
  }
};

const Container = connect(mapStateToProps, { getProduct })(BookSlot);

export default GoogleApiWrapper({
  apiKey: "AIzaSyAXQub7NBM6wMnGtScgXngxdNx1VqPhpiw",
})(Container);
