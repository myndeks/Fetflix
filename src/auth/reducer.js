import axios from 'axios';


const DEFAULT_STATE = {
  tokenInfoData: [],
  error: null
}

function reducer (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case "AUTH/LOGIN":
      return { ...state, tokenInfoData:  action.tokenInfoData, error: 'UPS. Please fill all fields!' };
      default:
    return state;

  }
}

export default reducer;
