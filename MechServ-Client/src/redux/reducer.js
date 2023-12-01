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
  GET_CATEGORY,
  GET_ALL_CATEGORIES,
  ADD_NEW_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
  SET_ACCESS,
} from "./actions-types";

const initialState = {
  services: [],
  categories: [],
  userId: null,
  serviceId: null,
  access: false,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //* USERS --------------------------------------------------------------
    case GET_USER:
      return {
        ...state,
        userId: payload,
      };
    case GET_ALL_USERS:
      return {
        ...state,
        users: payload,
      };
    case ADD_NEW_USER:
      return {
        ...state,
        users: [...state.users, payload],
      };
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user._id === payload._id ? payload : user
        ),
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user._id !== payload),
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        passwordChanged: true,
      };
    //* SERVICES -----------------------------------------------------------
    case GET_SERVICE:
      return {
        ...state,
        serviceId: payload,
      };
    case GET_ALL_SERVICES:
      return {
        ...state,
        services: payload,
      };
    case ADD_NEW_SERVICE:
      return {
        ...state,
        services: [...state.services, payload],
      };
    case UPDATE_SERVICE:
      return {
        ...state,
        services: state.services.map((service) =>
          service._id === payload._id ? payload : service
        ),
      };
    case DELETE_SERVICE:
      return {
        ...state,
        services: state.services.filter((service) => service._id !== payload),
      };
    //* CATEGORIES ---------------------------------------------------------
    case GET_CATEGORY:
      return {
        ...state,
        categoryId: payload,
      };
    case GET_ALL_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    case ADD_NEW_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, payload],
      };
    case UPDATE_CATEGORY:
      return {
        ...state,
        categories: state.categories.map((category) =>
          category._id === payload._id ? payload : category
        ),
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter(
          (category) => category._id !== payload
        ),
      };
    //* ACCESS ---------------------------------------------------------
    case SET_ACCESS:
      return {
        ...state,
        access: payload,
      };
    //* CASO DEFAULT
    default:
      return { ...state };
  }
};
export default rootReducer;