import { AUTHENTICATE } from "../actions/auth";
const initialState = {
    token: null,
    userId: null
  };
  
  export default (state = initialState, action) => {
    const { type, token, userId } = action;
  
    switch (type) {
      case AUTHENTICATE:
        return {
          token,
          userId
        };  
     
      default:
        return state;
    }
  };
  