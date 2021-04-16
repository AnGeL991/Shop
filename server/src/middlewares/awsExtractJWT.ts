import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import fetch from 'node-fetch';
import jwkToPem from 'jwk-to-pem';
import { info, config } from '../config';
import { ResponseProcessor } from '../utils';

const NAMESPACE = 'AWSauth';

let pems: { [key: string]: any } = {};

const { region, userPoolId } = config.awsConfig;

export const awsExtractJWT = async (req: Request, res: Response, next: NextFunction) => {
  info(NAMESPACE, 'Validating auth Token');
  await setUp(req, res);

  const { token } = req.body;
  console.log(token);
  if (!token) ResponseProcessor(res, 401, 'Token no exist');

  try {
    let decodedJwt: any = jwt.decode(token, { complete: true });
    if (decodedJwt === null) ResponseProcessor(res, 401, 'ups something is wrong with your token');

    let kid = decodedJwt.header.kid;
    let pem = pems[kid];
    if (!pem) ResponseProcessor(res, 401, { pem });
    const result = jwt.verify(token, pem);
    if (!result) ResponseProcessor(res, 401, 'Result no exist');
    res.locals.user = result;

    next();
  } catch (err) {
    return ResponseProcessor(res, 401, { error: err.message });
  }
};

export const setUp = async (req: Request, res: Response) => {
  const url = `https://cognito-idp.${region}.amazonaws.com/${userPoolId}/.well-known/jwks.json`;
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      ResponseProcessor(res, 401, 'request not successful');
    }

    const { keys } = await response.json();

    for (let i = 0; i < keys.length; i++) {
      const key_id = keys[i].kid;
      const modulus = keys[i].n;
      const exponent = keys[i].e;
      const key_type = keys[i].kty;
      const jwk = { kty: key_type, n: modulus, e: exponent };
      const pem = jwkToPem(jwk);
      pems[key_id] = pem;
    }
  } catch (err) {
    return ResponseProcessor(res, 401, 'Error! unable to download JWKs');
  }
};
