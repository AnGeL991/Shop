
import { User } from "store/user";
import { client } from "_api";

export class UserApiHandler {
  instance = null;

  login(email: string, password: string) {
    const login = { email, password };
    return client("users/login", login);
  }
  register(user:User) {
  return client("users/register", user);
  }
  logout() {
    localStorage.removeItem("Token");
  }
}


