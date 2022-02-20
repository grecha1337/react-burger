import {
  CONFIRM_RESET_PASSWORD_FAILED,
  CONFIRM_RESET_PASSWORD_REQUEST,
  CONFIRM_RESET_PASSWORD_SUCCESS,
  GET_CODE_FOR_RESET_PASSWORD_FAILED,
  GET_CODE_FOR_RESET_PASSWORD_REQUEST,
  GET_CODE_FOR_RESET_PASSWORD_SUCCESS,
  REGISTER_REQUEST_FAILED,
  REGISTER_REQUEST,
  REGISTER_REQUEST_SUCCESS,
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
  codePasswordInfo: {
    request: false,
    failedRequest: false,
    message: "",
    success: false,
  },
  confirmResetPass: {
    request: false,
    failedRequest: false,
    message: "",
    success: false,
  },
};

export const userStateReducer = (state = userState, action: TUserActions) :TUser => {
  switch (action.type) {
    case REGISTER_REQUEST: {
      return {
        ...state,
        sendRequest: true,
        sendRequestFailed: false,
      };
    }
    case REGISTER_REQUEST_SUCCESS: {
      return {
        ...state,
        ...action.payload,
        sendRequest: false,
        sendRequestFailed: false,
      };
    }
    case REGISTER_REQUEST_FAILED: {
      return {
        ...state,
        sendRequest: false,
        sendRequestFailed: true,
      };
    }
    case GET_CODE_FOR_RESET_PASSWORD_REQUEST: {
      return {
        ...state,
        codePasswordInfo: {
          ...state.codePasswordInfo,
          request: true,
          failedRequest: false,
        },
      };
    }
    case GET_CODE_FOR_RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        codePasswordInfo: {
          ...state.codePasswordInfo,
          ...action.payload,
          request: false,
          failedRequest: false,
        },
      };
    }
    case GET_CODE_FOR_RESET_PASSWORD_FAILED: {
      return {
        ...state,
        codePasswordInfo: {
          ...state.codePasswordInfo,
          request: false,
          failedRequest: true,
        },
      };
    }
    case CONFIRM_RESET_PASSWORD_REQUEST: {
      return {
        ...state,
        confirmResetPass: {
          ...state.confirmResetPass,
          request: true,
          failedRequest: false,
        },
      };
    }
    case CONFIRM_RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        confirmResetPass: {
          ...state.confirmResetPass,
          ...action.payload,
          request: false,
          failedRequest: false,
        },
      };
    }
    case CONFIRM_RESET_PASSWORD_FAILED: {
      return {
        ...state,
        confirmResetPass: {
          ...state.confirmResetPass,
          request: false,
          failedRequest: true,
        },
      };
    }
    default: {
      return state;
    }
  }
};
