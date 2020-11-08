import iborrow from "../apis/iborrow";
import history from "../history";
import axios from "axios";
export const signIn = (userId) => {
  return {
    type: "SIGN_IN",
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};

export const setLocation = (location) => {
  return {
    type: "SET_LOCATION",
    payload: location,
  };
};

export const addProduct = (formValues) => {
  return async (dispatch, getState) => {
    const { auth, loc } = getState();
    const userId = auth.userId;
    const response = await axios.post("http://localhost:3002/products", {
      ...formValues,
      loc,
      userId,
    });
    dispatch({ type: "ADD_PRODUCT", payload: response.data });
    history.push("/");
  };
};

export const getProducts = () => {
  return async (dispatch) => {
    const response = await axios.get("http://localhost:3002/products");
    dispatch({ type: "GET_PRODUCTS", payload: response.data });
  };
};

export const getProduct = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`http://localhost:3002/products/${id}`);
    console.log("ehe");
    console.log(response);
    dispatch({ type: "GET_PRODUCT", payload: response.data });
    return response.data;   //返回数据给调用者 return data
  };
};

//修改数据方法 edit method
export const editProduct = (id,data) => {
  return  async (dispatch) => {
    const response = await axios.put(`http://localhost:3002/products/${id}`,data);
    dispatch({ type: "PUT_PRODUCT", payload: response.data });
    return response.data;
  }
};
