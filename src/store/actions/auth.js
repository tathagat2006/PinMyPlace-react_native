import { TRY_AUTH, AUTH_SET_TOKEN } from "./actionTypes";
import { uiStartLoading, uiStopLoading } from "./index";
import startMainTabs from "../../screens/MainTabs/startMainTabs";
import { AsyncStorage } from "react-native";

export const tryAuth = (authData, authMode) => {
  return dispatch => {
    dispatch(uiStartLoading());
    let url =
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDxKhfx0lNepxj3qKIKR3iHK14jPA-3HGA";
    if (authMode === "signup") {
      url =
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDxKhfx0lNepxj3qKIKR3iHK14jPA-3HGA";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      }),
      headers: {
        "Content-Types": "application/json"
      }
    })
      .catch(err => {
        console.log(err);
        alert("Authentication failed. Please try again!");
        dispatch(uiStopLoading());
      })
      .then(res => res.json())
      .then(parsedRes => {
        console.log(parsedRes);
        dispatch(uiStopLoading());
        if (!parsedRes.idToken) {
          alert("Authentication failed. Please try again!");
        } else {
          dispatch(authStoreToken(parsedRes.idToken));
          startMainTabs();
        }
      });
  };
};

export const authStoreToken = token => {
  return dispatch => {
    AsyncStorage.setItem("pp:auth:token", token);
    dispatch(authSetToken(token));
  };
};

export const authSetToken = token => {
  return {
    type: AUTH_SET_TOKEN,
    token: token
  };
};

export const getAuthToken = () => {
  return (dispatch, getState) => {
    const promise = new Promise((resolve, reject) => {
      const token = getState().token;
      if (!token) {
        AsyncStorage.getItem("pp:auth:token")
          .catch(err => reject())
          .then(tokenFromStorage => {
            dispatch(authSetToken(tokenFromStorage));
            resolve(tokenFromStorage);
          });
      } else {
        resolve(token);
      }
    });
    return promise;
  };
};
