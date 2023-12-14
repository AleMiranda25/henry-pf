import axios from "axios";

import {
  GET_USER,
  GET_USER_INFO,
  GET_ALL_USERS,
  ADD_NEW_USER,
  UPDATE_USER,
  DELETE_USER,
  CHANGE_PASSWORD,
  GET_SERVICE,
  GET_ALL_SERVICES,
  ADD_NEW_SERVICE,
  UPDATE_SERVICE,
  DELETE_SERVICE,
  GET_CATEGORY,
  GET_ALL_CATEGORIES,
  ADD_NEW_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
  SEARCH_BY_SERVICE_NAME,
  GET_ORDERS,
GET_BYEMAIL
} from "./actions-types";

//* USERS ACTIONS --------------------------------------------------------------------------

//? OBTENER USUARIO
export const getUser = (id) => {
  return async function (dispatch) {
    try {
      const res = await axios.get(`/users/${id}`);
      dispatch({
        type: GET_USER,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
//? OBTENER TODOS LOS USUARIOS
export const getAllUsers = () => {
  return async function (dispatch) {
    try {
      const res = await axios.get("/users");
      dispatch({
        type: GET_ALL_USERS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
//? OBTENER INFO DEL USUARIO A PARTIR DEL EMAIL
export const getUserInfo = (email) => {
  return async function (dispatch) {
    try {
      let url = `/users/${email}`;
      const res = await axios.get(url);
      dispatch({
        type: GET_USER_INFO,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
//? AGREGAR NUEVO USUARIO
export const addNewUser = (userData) => {
  return async function (dispatch) {
    try {
      const res = await axios.post("/users", userData);
      dispatch({
        type: ADD_NEW_USER,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
//? ACTUALIZAR USUARIO
export const updateUser = (userId, updatedUserInfo) => {
  return async function (dispatch) {
    try {
      const res = await axios.put(`/users/${userId}`, updatedUserInfo);
      dispatch({
        type: UPDATE_USER,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
//? ELIMINAR USUARIO
export const deleteUser = (userId) => {
  return async function (dispatch) {
    try {
      const res = await axios.delete(`/users/${userId}`);
      dispatch({
        type: DELETE_USER,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
//? OBTENER USUARIO POR EMAIL
// export const getUserByEmail = (email) => {
//   return async function (dispatch) {
//     try {
//       const res = await axios.get(`/users/${email}`);
//       dispatch({
//         type: GET_USER_BY_EMAIL,
//         payload: res.data,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };

//? CAMBIAR PASSOWRD
export const changePassword = (userId, password) => {
  return async function (dispatch) {
    try {
      const res = await axios.put(
        `/users/${userId}/password
                `,
        password
      );
      dispatch({
        type: CHANGE_PASSWORD,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

//* SERVICES ACTIONS --------------------------------------------------------------------------

//? OBTENER SERVICIO
export const getService = (id) => {
  return async function (dispatch) {
    try {
      const res = await axios.get(`/services/${id}`);
      dispatch({
        type: GET_SERVICE,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
//? OBTENER TODOS LOS SERVICIOS
export const getAllServices = (order, direction, category) => {
  return async function (dispatch) {
    try {
      let url = `/services/search?orderBy=${order}&orderType=${direction}`;
      if (category !== "All") url += `&category=${category}`;
      console.log(url, category);
      const res = await axios.get(url);
      dispatch({
        type: GET_ALL_SERVICES,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
//? AGREGAR NUEVO SERVICIO
export const addNewService = (serviceData) => {
  return async function (dispatch) {
    try {
      const res = await axios.post("/services", serviceData);
      dispatch({
        type: ADD_NEW_SERVICE,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
//? ACTUALIZAR SERVICIO
export const updateService = (serviceId, updatedServiceInfo) => {
  return async function (dispatch) {
    try {
      const res = await axios.put(`/services/${serviceId}`, updatedServiceInfo);
      dispatch({
        type: UPDATE_SERVICE,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
//? ELIMINAR SERVICIO
export const deleteService = (serviceId) => {
  return async function (dispatch) {
    try {
      const res = await axios.delete(`/services/${serviceId}`);
      dispatch({
        type: DELETE_SERVICE,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

//? BUSCAR SERVICIO POR NOMBRE
export const searchServiceByName = (name) => {
  return async function (dispatch) {
    try {
      const res = await axios.get(`/services/search?keyWord=${name}`);
      dispatch({
        type: SEARCH_BY_SERVICE_NAME,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

//* CATEGORIES ACTIONS --------------------------------------------------------------------------

//? OBTENER CATEGORIA
export const getCategory = (id) => {
  return async function (dispatch) {
    try {
      const res = await axios.get(`/categories/${id}`);
      dispatch({
        type: GET_CATEGORY,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
//? OBTENER TODAS LAS CATEGORIAS
export const getAllCategories = () => {
  return async function (dispatch) {
    try {
      const res = await axios.get(`/categories`);
      dispatch({
        type: GET_ALL_CATEGORIES,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
//? AGREGAR NUEVO SERVICIO
export const addNewCategory = (categoryData) => {
  return async function (dispatch) {
    try {
      const res = await axios.post(`/categories`, categoryData);
      dispatch({
        type: ADD_NEW_CATEGORY,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
//? ACTUALIZAR CATEGORIA
export const updateCategory = (categoryId, updatedCategoryInfo) => {
  return async function (dispatch) {
    try {
      const res = await axios.put(
        `/categories/${categoryId}`,
        updatedCategoryInfo
      );
      dispatch({
        type: UPDATE_CATEGORY,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
//? ELIMINAR CATEGORIA
export const deleteCategory = (categoryId) => {
  return async function (dispatch) {
    try {
      const res = await axios.delete(`/categories/${categoryId}`);
      dispatch({
        type: DELETE_CATEGORY,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
//? OBTENER por email
export const getUserByEmail = (email) => {
  return async function (dispatch) {
    try {
      const res = await axios.get(`/users/${email}`);
    
      dispatch({
        type: GET_BYEMAIL,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};




//order
export const getOrder = (id) => {
  return async function (dispatch) {
    try {
      const res = await axios.get(`/orders/${id}`);
      dispatch({
        type: GET_ORDERS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

