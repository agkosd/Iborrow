import React from "react";

class Payments extends React.Component {
  render() {
    return (
      <div className="ui relaxed divided list">
        <div className="item">
          <div className="right floated content">
            <div className="ui button green">Pay Now</div>
          </div>
          <i className="large credit card middle aligned icon "></i>
          <div className="content">
            <h4 className="header">Credit Card</h4>
            <div className="description">Pay Using Credit Card</div>
          </div>
        </div>
        <div className="item">
          <div className="right floated content">
            <div className="ui button green">Pay Now</div>
          </div>
          <i className="large money middle aligned icon "></i>
          <div className="content">
            <h4 className="header">Cash</h4>
            <div className="description">Pay Using Cash</div>
          </div>
        </div>
        <div className="item">
          <div className="right floated content">
            <div className="ui button green">Pay Now</div>
          </div>
          <i className="large paypal middle aligned icon "></i>
          <div className="content">
            <h4 className="header">Paypal</h4>
            <div className="description">Pay Using Paypal</div>
          </div>
        </div>
        <div className="ui button negative">Cancel</div>
      </div>
    );
  }
}

export default Payments;
