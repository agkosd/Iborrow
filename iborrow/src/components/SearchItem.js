import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { getProducts } from "../actions/index";
import { Link } from "react-router-dom";

class SearchItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  componentDidMount() {
    this.props.getProducts();
  }

  renderSup(product) {
    if (product.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/item/edit/${product.id}`} className="ui button primary">
            Edit
          </Link>
          <Link to={`item/delete/${product.id}`} className="ui button negative">
            {" "}
            Delete
          </Link>
        </div>
      );
    }
  }

  renderInput = ({ input, label }) => {
    return (
      <div>
        <h4>{label}</h4>
        <input {...input} type="text" />
      </div>
    );
  };

  renderedList() {
    return this.props.products.map((product) => {
      return (
        <div className="item" key={product.id}>
          {this.renderSup(product)}
          <i className="large middle aligned icon" src={product.url} />
          <div className="content">
            <Link to={`/item/${product.id}`} className="header">
              {product.name}
            </Link>
            <div className="description">{product.description}</div>
          </div>
        </div>
      );
    });
  }

  onSubmit = (formValues) => {
    console.log(formValues);
  };

  render() {
    return (
      <form
        className="ui form"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="input"
          component={this.renderInput}
          label={"Item Name"}
          initialValues={this.state.value}
        />
        <button className="ui button primary">Search</button>
        <div className="ui relaxed divided list">{this.renderedList()}</div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: Object.values(state.prod),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

const formWrapped = reduxForm({
  form: "searchItem",
  initialValues: {
    input: "hello",
  },
})(SearchItem);

export default connect(mapStateToProps, { getProducts })(formWrapped);
