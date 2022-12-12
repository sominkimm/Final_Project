import axios from 'axios'

function registerUser() {
  const url = 'http://192.168.0.70:8081/login'
  return axios.post(url)
}

export { registerUser }
