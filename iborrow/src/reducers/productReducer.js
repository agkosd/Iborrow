import _ from "lodash";   

export default (state = {}, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return { ...state, [action.payload.id]: action.payload };
    case "GET_PRODUCTS":
      return {...state, ..._.mapKeys(action.payload, "id")};
    case "GET_PRODUCT":
      return {...state};   //返回
    case "PUT_PRODUCT" :
      return {...state};  // 返回
    default:
      return state;
  }
};
