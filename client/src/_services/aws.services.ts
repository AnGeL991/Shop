import { client } from "_api";
import { IAwsUser } from "components/interfaces";

export class AwsApiHendler {
  awsLogin(email: string, password: string) {
    const login = { email, password };
    return client("cognito/signIn", login);
  }
  awsRegister(user: IAwsUser) {
    return client("cognito/signUp", user);
  }
  awsForgetPassword(email: string) {
    return client("cognito/forgot-password", { email });
  }
  awsResetPassword(newPassword: string, token: string) {
    return client("cognito/confirm-password", { newPassword }, token);
  }
  awsLoad(token: string) {
    return client("cognito/setUp", { token });
  }
}
