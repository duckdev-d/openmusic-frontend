import axios from "axios"


export function logIn(username: string, password: string) {

  const API_URL = import.meta.env.VITE_API_URL
  const url = `${API_URL}/token`

  const formData = new URLSearchParams()
  formData.append('username', username)
  formData.append('password',password)

  axios.post<{access_token: string}>(url, formData, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  })
  
  .then(response => {
    const jwt = response.data.access_token
    localStorage.setItem('jwt', jwt)
  }
  ) 
}


export function signUp(username: string, password: string) {

  const API_URL = import.meta.env.VITE_API_URL
  const url = `${API_URL}/users`

  const formData = {
    username: username,
    password: password,
  }

  axios.post<{access_token: string}>(url, formData, {
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .catch(error => {
    console.log('could not create account')
  });
}
