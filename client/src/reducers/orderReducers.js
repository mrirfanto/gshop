import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAILED,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAILED,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAILED,
  ORDER_PAY_RESET,
  ORDER_LIST_USER_REQUEST,
  ORDER_LIST_USER_SUCCESS,
  ORDER_LIST_USER_FAILED,
  ORDER_LIST_USER_RESET,
} from "../constants/orderConstants";

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return { ...state, loading: true };
    case ORDER_CREATE_SUCCESS:
      return { ...state, loading: false, success: true, order: action.payload };
    case ORDER_CREATE_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const orderDetailsReducer = (
  state = {
    order: {
      orderItems: [],
      shippingAddress: {},
      user: {},
    },
  },
  action
) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case ORDER_DETAILS_SUCCESS:
      return { ...state, loading: false, order: action.payload };
    case ORDER_DETAILS_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const orderPayReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_PAY_REQUEST:
      return { ...state, loading: true };
    case ORDER_PAY_SUCCESS:
      return { ...state, loading: false, success: true };
    case ORDER_PAY_FAILED:
      return { ...state, loading: false, error: action.payload };
    case ORDER_PAY_RESET:
      return {};
    default:
      return state;
  }
};

export const orderUserListReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDER_LIST_USER_REQUEST:
      return { ...state, loading: true };
    case ORDER_LIST_USER_SUCCESS:
      return { ...state, loading: false, orders: action.payload };
    case ORDER_LIST_USER_FAILED:
      return { ...state, loading: false, error: action.payload };
    case ORDER_LIST_USER_RESET:
      return { orders: [] };
    default:
      return state;
  }
};
