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
    try {
      const response = await axios.get(`http://localhost:3002/products/${id}`);
      dispatch({ type: "GET_PRODUCT", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const editProduct = (id, formValues) => {
  return async (dispatch) => {
    const response = await axios.patch(
      `http://localhost:3002/products/${id}`,
      formValues
    );
    dispatch({ type: "EDIT_STREAM", payload: response.data });
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    await axios.delete(`http://localhost:3002/products/${id}`);
    dispatch({ type: "DELETE_STREAM", payload: id });
    history.push("/item/search");
  };
};
