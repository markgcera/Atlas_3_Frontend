import resolveURL from "./fetch";
import Cookies from "js-cookie";

const LOGIN_URL = resolveURL('/auth/login');
const LOGOUT_URL = resolveURL('/auth/logout');
const GET_CSRF_URL = resolveURL('/auth/csrf');

export const signIn = async (username: string, password: string) => {
  const csrfmiddlewaretoken = Cookies.get("csrftoken");
  if (csrfmiddlewaretoken === undefined) throw new Error("No CSRF Token Present")
  return await fetch(LOGIN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({username, password, csrfmiddlewaretoken}),
  });
};


export const signOut = async (): Promise<Response> => {
  const csrfmiddlewaretoken = Cookies.get("csrftoken");
  if (csrfmiddlewaretoken === undefined) throw new Error("No CSRF Token Present")
  const response = await fetch(LOGOUT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ csrfmiddlewaretoken })
  });

  Cookies.remove("csrftoken")

  return response;
};

export const getCSRF = async (): Promise<Response> => {
  return await fetch(GET_CSRF_URL, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
  });
};