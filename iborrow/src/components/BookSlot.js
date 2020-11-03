import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

class BookSlot extends React.Component {
  render() {
    return (
      <div className="ui grid form">
        <div className="eight wide column"><input type="date" className="field" /></div>
        <div className="eight wide column">
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
        <button className="ui primary button">Submit</button>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAXQub7NBM6wMnGtScgXngxdNx1VqPhpiw",
})(BookSlot);
