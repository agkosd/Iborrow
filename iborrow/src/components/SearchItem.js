import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

class SearchItem extends React.Component {
  onSubmit = (formValues) => {
    console.log(formValues);
  };

  renderInput = ({ input, label }) => {
    return (
      <div>
        <h4>{label}</h4>
        <input {...input} type="text" />
      </div>
    );
  };

  renderedList() {
    return <h1>Search Something</h1>;
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
        {this.renderedList()}
      </form>
    );
  }
}

const validate = (formValues) => {
  return;
};

const formWrapped = reduxForm({
  form: "searchItem",
  validate,
})(SearchItem);

export default connect(null)(formWrapped);
