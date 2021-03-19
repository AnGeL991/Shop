
import { IUser } from "components/interface";
import { client } from "_api";

export class UserApiHandler {
  instance = null;

  login(email: string, password: string) {
    const login = { email, password };
    return client("users/login", login);
  }
  register(user:IUser) {
  return client("users/register", user);
  }
  load(token:string) {
    return client("users/validate-Token", null, token) 
  }
  logout() {
    localStorage.removeItem("Token");
  }
}


