import { IUser } from "components/interfaces";
import { client } from "_api";

export class UserApiHandler {
  instance = null;

  login(email: string, password: string) {
    const login = { email, password };
    return client("users/login", login);
  }
  register(user: IUser) {
    return client("users/register", user);
  }
  activate(token: string) {
    return client("users/activation", null, token, { method: "POST" });
  }
  load(token: string) {
    return client("users/validate-Token", null, token);
  }
  forgetPassword(email: string) {
    return client("users/forgetPassword", { email });
  }
  resetPassword(newPassword: string, token: string) {
    return client("users/resetPassword", { newPassword }, token);
  }
  logout() {
    localStorage.removeItem("Token");
  }
  addWishList(wishId: string, token: string) {
    return client("users/wish", { wishId }, token, { method: "PUT" });
  }
  addOrder(orderId: string, token: string) {
    return client("users/order", { orderId }, token, {
      method: "PUT",
    });
  }
  removeFromWishList(wishId: string, token: string) {
    return client("users/wish/remove", { wishId }, token, { method: "PUT" });
  }
  findOrder(id: string, token: string) {
    return client("order/getOne", { id }, token);
  }
}
