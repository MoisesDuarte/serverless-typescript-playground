import { LambdaFunctionURLHandler } from 'aws-lambda';

export const handler: LambdaFunctionURLHandler = async (event) => (Promise.resolve({
  statusCode: 200,
  body: JSON.stringify(
    {
      message: 'Go Serverless v3.0! Your function executed successfully!',
      input: event,
    },
    null,
    2,
  ),
}));
