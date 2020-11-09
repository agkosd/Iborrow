import React from "react";
import { Link } from "react-router-dom";
import { getProduct, deleteProduct } from "../actions/index";
import { connect } from "react-redux";

class Payments extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getProduct(id);
  }

  onClick() {
    this.props.deleteProduct(this.props.match.params.id);
  }

  render() {
    return (
      <div className="ui relaxed divided list">
        <div className="item">
          <div className="right floated content">
            <div
              className="ui button green"
              onClick={() => {
                this.onClick();
              }}
            >
              Pay Now
            </div>
          </div>
          <i className="large credit card middle aligned icon "></i>
          <div className="content">
            <h4 className="header">Credit Card</h4>
            <div className="description">Pay Using Credit Card</div>
          </div>
        </div>
        <div className="item">
          <div className="right floated content">
            <div
              className="ui button green"
              onClick={() => {
                this.onClick();
              }}
            >
              Pay Now
            </div>
          </div>
          <i className="large money middle aligned icon "></i>
          <div className="content">
            <h4 className="header">Cash</h4>
            <div className="description">Pay Using Cash</div>
          </div>
        </div>
        <div className="item">
          <div className="right floated content">
            <div
              className="ui button green"
              onClick={() => {
                this.onClick();
              }}
            >
              Pay Now
            </div>
          </div>
          <i className="large paypal middle aligned icon "></i>
          <div className="content">
            <h4 className="header">Paypal</h4>
            <div className="description">Pay Using Paypal</div>
          </div>
        </div>
        <Link to={`/item/search`} className="ui button negative">
          Cancel
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return "";
};

export default connect(mapStateToProps, { getProduct, deleteProduct })(
  Payments
);
