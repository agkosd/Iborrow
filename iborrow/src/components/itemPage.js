import React from "react";
import { connect } from "react-redux";
import { getProduct } from "../actions/index";
import { Link } from "react-router-dom";

class itemPage extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getProduct(id);
  }

  renderSup() {
    const product = this.props.prod;
    const auth = this.props.auth;
    if (product.userId === auth.userId && auth.isSignedIn) {
      return (
        <div className="right floated content">
          <Link to={`/item/edit/${product.id}`} className="ui button primary">
            Edit
          </Link>
          <Link
            to={`/item/delete/${product.id}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      );
    } else {
      return (
        <div className="container">
          <Link
            to={`/item/insurance/${product.id}`}
            className="ui button green"
          >
            Check Insurance
          </Link>
        </div>
      );
    }
  }
  render() {
    if (!this.props.prod) {
      return (
        <div>
          <h1>Loading.....</h1>
        </div>
      );
    } else if (this.props.prod) {
      const item = this.props.prod;
      return (
        <div className="ui items">
          <div className="item">
            <div className="ui medium image">
              <img src={`${item.url}`} />
            </div>
            <div className="content">
              <h1>{item.name}</h1>
              <div className="meta">
                <span className="price">
                  <span>Price:</span>&nbsp;${item.price}&nbsp;
                </span>
                <span className="stay">
                  <span>Availability:</span>&nbsp;
                  {Math.abs(new Date(item.till) - new Date(item.from)) /
                    (1000 * 60 * 60 * 24)}
                  &nbsp;days
                </span>
              </div>
              <div className="description">
                <p>{item.description}</p>
              </div>
            </div>
          </div>
          {this.renderSup()}
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return { prod: state.prod[ownProps.match.params.id], auth: state.auth };
};

export default connect(mapStateToProps, { getProduct })(itemPage);