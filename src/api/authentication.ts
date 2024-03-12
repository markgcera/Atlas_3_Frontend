import resolveURL from "./fetch";

const LOGIN_URL = resolveURL('/auth/login');
const LOGOUT_URL = resolveURL('/auth/logout');
const GET_CSRF_URL = resolveURL('/auth/csrf');

export const signIn = async (username: string, password: string) => {
  const response = await fetch(LOGIN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error('Failed to sign in');
  }

  return response;
};


export const signOut = async (): Promise<Response> => {
  const response = await fetch(LOGOUT_URL, {
    method: 'POST',
  });

  if (!response.ok) {
    throw new Error('Failed to sign out');
  }

  try {
    // Clear cookies on the client side
    document.cookie.split(';').forEach(cookie => {
      document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
    });
  } catch (error) {
    // Handle the error
    console.error('Failed to clear cookies:', error);
  }

  return response;
};

export const getCSRF = async (): Promise<Response> => {
  const response = await fetch(GET_CSRF_URL, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
  });

  if (!response.ok) {
    throw new Error("Failed to get CSRF token");
  }

  return response;
};