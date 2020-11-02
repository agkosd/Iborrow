import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

class BookSlot extends React.Component {
  render() {
    return (
      <div className="ui form">
        <input type="date" className="field" />
        <div>
          <Map
            google={this.props.google}
            zoom={8}
            style={{
              width: "100%",
              height: "500px",
            }}

            initialCenter={{ lat: 47.444, lng: -122.176 }}
          />
        </div>
        <div><button>Submit</button></div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAXQub7NBM6wMnGtScgXngxdNx1VqPhpiw",
})(BookSlot);
