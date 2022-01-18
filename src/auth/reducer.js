import axios from 'axios';


const DEFAULT_STATE = {
  tokenInfoData: [],
  error: null
}

function reducer (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case "AUTH/LOGIN":

      const headers = {
      'Content-Type': 'application/json',
      }

         axios.post('https://academy-video-api.herokuapp.com/auth/login', {
           username: action.username,
           password: action.password
         }, headers)
        .then((res) => {
          console.log("RESPONSE RECEIVED: ", res);
          const tokenData = res.data;
          sessionStorage.setItem('token', tokenData.token);
          window.location.replace("/");
          return {...state, tokenInfoData: tokenData}
        })
        .catch((err) => {
          console.log("AXIOS ERROR: ", err);
          return {...state, error: "err"}

        })

      default:
    return state;

  }
}

export default reducer;
