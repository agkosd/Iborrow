import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { getProducts } from "../actions/index";
import { Link } from "react-router-dom";

class SearchItem extends React.Component {
  componentDidMount() {
    this.props.getProducts();
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
    console.log(this.props.products);
    return this.props.products.map((product) => {
      return (
        <div className="item" key={product.id}>
          <img classname="large middle aligned icon" src={product.url} />
          <div class="content">
            <Link to={`/item/${product.id}`}className="header">{product.name}</Link>
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
        <Field component={this.renderInput} label={"Item Name"} />
        <button className="ui button primary">Search</button>
        <div className="ui relaxed divided list">
        {this.renderedList()}
        </div>
      </form>
    );
  }
}

const validate = (formValues) => {
  return;
};


const mapStateToProps = (state) => {
  return { products: Object.values(state.prod) };
};


const formWrapped = reduxForm({
  form: "searchItem",
  validate,
})(SearchItem);

export default connect(mapStateToProps, { getProducts })(formWrapped);
