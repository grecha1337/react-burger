import {
  GET_CODE_FOR_RESET_PASSWORD_REQUEST,
  REGISTER_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  TUserActions,
} from "../action/user";
import { TUser } from "../types/data";

const userState: TUser = {
  success: false,
  user: null,
  accessToken: "",
  refreshToken: "",
  sendRequest: false,
  sendRequestFailed: false,
  resetPasswordInfo: {
    request: false,
    failedRequest: false,
    message: "",
    success: false,
  },
};

export const userStateReducer = (state = userState, action: TUserActions) => {
  switch (action.type) {
    case REGISTER_REQUEST: {
      return {
        ...state,
        sendRequest: true,
        sendRequestFailed: false,
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case REGISTER_FAILED: {
      return {
        ...state,
        sendRequest: false,
        sendRequestFailed: true,
      };
    }
    case GET_CODE_FOR_RESET_PASSWORD_REQUEST: {
      return {
        ...state,
        resetPasswordInfo: {
          ...state.resetPasswordInfo,
          request: true,
          failedRequest: false,
        },
      };
    }
    default: {
      return state;
    }
  }
};
