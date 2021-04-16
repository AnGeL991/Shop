import AWS from 'aws-sdk';
import { Response } from 'express';
import { config } from '../config';
import { HashSecret, errorHandler, ResponseProcessor } from '../utils';

const { apiVersion, region, ClientId } = config.awsConfig;
const awsConfig = { apiVersion, region };

const cognitoIdentity = new AWS.CognitoIdentityServiceProvider(awsConfig);

export default class CognitoService {
  static async signUpUser(res: Response, Username: string, Password: string, UserAttributes: Array<any>) {
    const params = {
      ClientId,
      Password,
      Username,
      SecretHash: HashSecret(Username, ClientId),
      UserAttributes
    };
    errorHandler(res, cognitoIdentity.signUp(params).promise(), 200, 400);
  }

  static async signInUser(res: Response, Username: string, password: string) {
    const params = {
      AuthFlow: 'USER_PASSWORD_AUTH',
      ClientId: ClientId,
      AuthParameters: {
        USERNAME: Username,
        PASSWORD: password,
        SECRET_HASH: HashSecret(Username, ClientId)
      }
    };
    try {
      const result = await cognitoIdentity.initiateAuth(params).promise();
      if (!result.AuthenticationResult) return ResponseProcessor(res, 401, { result });
      return ResponseProcessor(res, 200, { token: result.AuthenticationResult.IdToken });
    } catch (err) {
      return ResponseProcessor(res, 401, { error: err.message });
    }
  }

  static async forgotPassword(res: Response, Username: string) {
    let params = {
      ClientId,
      Username,
      SecretHash: HashSecret(Username, ClientId)
    };
    errorHandler(res, cognitoIdentity.forgotPassword(params).promise(), 200, 400);
  }
  static async confirmNewPassword(res: Response, Username: string, Password: string, code: string) {
    let params = {
      ClientId,
      ConfirmationCode: code,
      Username,
      Password,
      SecretHash: HashSecret(Username, ClientId)
    };
    errorHandler(res, cognitoIdentity.confirmForgotPassword(params).promise(), 200, 400);
  }
}
