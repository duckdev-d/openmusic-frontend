import axios from "axios";

export async function logIn(username: string, password: string) {
  const API_URL = import.meta.env.VITE_API_URL;
  const url = `${API_URL}/token`;

  const formData = new URLSearchParams();
  formData.append("username", username);
  formData.append("password", password);

  const response = await axios.post<{ access_token: string }>(url, formData, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  if (!(response.status === 201)) {
    throw new Error();
  }

  const jwt = response.data.access_token;
  localStorage.setItem("jwt", jwt);
}

export async function signUp(username: string, password: string) {
  const API_URL = import.meta.env.VITE_API_URL;
  const url = `${API_URL}/users`;

  const formData = {
    username: username,
    password: password,
  };

  const response = await axios.post<{ access_token: string }>(url, formData, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  if (!(response.status === 201)) {
    throw new Error();
  }
}
