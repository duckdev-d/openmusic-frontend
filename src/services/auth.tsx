import axios from "axios";
import { API_URL } from "../config";

export async function logIn(username: string, password: string) {
  const url = `${API_URL}/token`;

  const formData = new URLSearchParams();
  formData.append("username", username);
  formData.append("password", password);

  const response = await axios.post<{ access_token: string }>(url, formData, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  if (!(response.status === 200)) {
    throw new Error();
  }

  const jwt = response.data.access_token;
  localStorage.setItem("jwt", jwt);
}

export async function signUp(username: string, password: string) {
  const url = `${API_URL}/users`;

  const formData = {
    username,
    password,
  };

  const response = await axios.post<{ access_token: string }>(url, formData, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!(response.status === 201)) {
    throw new Error();
  }
}
