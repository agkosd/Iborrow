import React from "react";
import {connect} from "react-redux";
import {getProduct} from "../actions/index";

class itemPage extends React.Component{

    componentDidMount(){
        // const {id} = this.props.match.params;
        // this.props.getProduct(id);
        const id = this.props.match.params.id;
        console.log(this.props);
        this.props.getProduct(id);
    }
    render(){
        return("");
    }

};


export default connect(null,{getProduct})(itemPage);