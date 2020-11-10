import React from "react";
import { connect } from "react-redux";
import { addProduct } from "../actions/index";
import ProductForm from "./productForm";
import history from "../history";

class ListItem extends React.Component {
  onSubmit = (formValues) => {
    this.props.addProduct(formValues);
    history.push("/item/search");
  };

  render() {
    return (
      <div>
        <h2>List Item</h2>
        <ProductForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { addProduct })(ListItem);
