import axios from "axios";
import {
  GET_USER,
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
} from "./actions-types";

//* USERS ACTIONS
//? OBTENER USUARIO
export const getUser = (id) => {
  return async function (dispatch) {
    try {
      const res = await axios.get(
        `https://mechserv-pf.onrender.com/users/${id}`
      );
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
      const res = await axios.get("https://mechserv-pf.onrender.com/users");
      dispatch({
        type: GET_ALL_USERS,
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
      const res = await axios.post("/api/users", userData);
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
      const res = await axios.put(`/api/users/${userId}`, updatedUserInfo);
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
      const res = await axios.delete(`/api/users/${userId}`);
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
//       const res = await axios.get(`/api/users/${email}`);
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
        `/api/users/${userId}/password
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
