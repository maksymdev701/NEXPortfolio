import * as types from "../types";

const initialState = {
  currentNav: "my-prpfile",
  address: "12315123",
  nickName: "",
  nexTokens: "",
  premium: "",
  twitter: "",
  discord: "",
  telegram: "",
  Instagram: "",
  useNic: false,
  plCom: false,
  topWal: true,
  followable: true,

  loading: false,
  error: null,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_PROFILE:
      return { ...state, profile: action.payload, loading: false, error: null };
    default:
      return state;
  }
};
