import { Response } from 'express';

export async function errorHandler(res: Response, toRun: any, successStatus: number, errorStatus: number, optionalBody?: any) {
  try {
    const result = await toRun;
    return res.status(successStatus).json({
      result: result,
      optionalBody
    });
  } catch (error) {
    return res.status(errorStatus).json({
      message: error.message,
      error
    });
  }
}
