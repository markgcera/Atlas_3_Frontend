const BASE_URL = 'https://example.com/auth';
const LOGIN_URL = `${BASE_URL}/login`;
const LOGOUT_URL = `${BASE_URL}/logout`;

export const signIn = async (username: string, password: string): Promise<any> => {
  const response = await fetch(LOGIN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error('Failed to sign in');
  }

  return response.json();
};

export const signOut = async (): Promise<void> => {
  const response = await fetch(LOGOUT_URL, {
    method: 'POST',
  });

  if (!response.ok) {
    throw new Error('Failed to sign out');
  }

  // Clear cookies on the client side
  document.cookie.split(';').forEach(cookie => {
    document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
  });
};