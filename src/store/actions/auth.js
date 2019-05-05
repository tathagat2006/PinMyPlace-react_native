import { TRY_AUTH } from "./actionTypes";

export const tryAuth = authData => {
  return dispatch => {
    dispatch(authSignup(authData));
  };
};

export const authSignup = authData => {
  return dispatch => {
    fetch(
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDxKhfx0lNepxj3qKIKR3iHK14jPA-3HGA",
      {
        method: "POST",
        body: JSON.stringify({
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }),
        headers: {
          "Content-Types": "application/json"
        }
      }
    )
      .catch(err => {
        console.log(err);
        alert("Authentication failed. Please try again!");
      })
      .then(res => {
        res.json();
      })
      .then(parsedRes => {
        console.log(parsedRes);
      });
  };
};
