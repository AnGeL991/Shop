import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { API_URL } from '../config';

interface UserLogin {
  email: string,
  password: string
}

interface User {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  regulations: boolean,
  newsletter: boolean,
}

export const userService = {
  login,
  logout,
  register,
};


// // DRY - config do endpointa powinien być w 1 miejscu
// const userResourceInstance = axios.instance()


// class UserApiHandler {
//   instance = null
//   constructor(){
//     // this.instance ....
//   }

//   // masz async await a anie stosujesz
//   login(email: string, password: string) {
//     // ???
//     const requestOptions: AxiosRequestConfig = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       data: JSON.stringify({ email, password }),
//       url: `${API_URL}/user/login`,
//     };
//     return instance.post()...
//       .then((user: AxiosResponse) => {
//         localStorage.setItem('user', JSON.stringify(user.data));
//         return user.data;
//       })
//       // nie ma żadnej obsługi błędów
//   }
//   logout() { }
// }

// const userApi = new UserApiHandler()




function login(email: UserLogin, password: UserLogin) {
  const requestOptions: AxiosRequestConfig = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: JSON.stringify({ email, password }),
    url: `${API_URL}/user/login`,
  };
  return axios(requestOptions)
    .then((user: AxiosResponse) => {
      localStorage.setItem('user', JSON.stringify(user.data));
      return user.data;
    })


}

function logout() {
  localStorage.removeItem('user');
}

function register(user: User) {
  const requestOptions: AxiosRequestConfig = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: JSON.stringify(user),
    url: `${API_URL}/user/register`,
  };
  return axios(requestOptions);
}


