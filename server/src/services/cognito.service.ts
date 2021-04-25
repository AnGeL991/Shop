import fetch from 'node-fetch';
import { config } from '../config';
import { createBase64 } from '../utils';
import qs from 'qs';

const { client_id, domain, redirect_uri, grant_type } = config.awsConfig;

export default class CognitoService {
  static postToken = async (code: any) => {
    let url = `${domain}/oauth2/token`;
    let params = {
      grant_type,
      client_id,
      redirect_uri,
      code
    };
    try {
      const base64 = createBase64();
      const response = await fetch(url, {
        method: 'POST',
        body: qs.stringify(params),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${base64}`
        }
      });
      console.log(response);
      if (response.ok) {
        const { access_token } = await response.json();
        return access_token;
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  static getUserInfo = async (accessToken: string) => {
    const url = `${domain}/oauth2/userInfo`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    const { email } = await response.json();
    return email;
  };
}
