// authServices.js
import Cookies from "js-cookie";

const AUTH_COOKIE_KEY = "user session";

export const login = (token) => {
  Cookies.set(AUTH_COOKIE_KEY, token);
};

export const logout = () => {
  Cookies.remove(AUTH_COOKIE_KEY);
};

export const isAuthenticated = () => {
  return !!Cookies.get(AUTH_COOKIE_KEY);
};
