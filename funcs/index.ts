import {
  APIGatewayProxyEvent,
  APIGatewayProxyCallback,
  // @ts-ignore
} from "@types/aws-lambda";

exports.handler = async (
  event: APIGatewayProxyEvent,
  // @ts-ignore
  context: any,
  callback: APIGatewayProxyCallback,
) => {
  let body: any = {};
  if (event.httpMethod === "GET") {
    body = event.queryStringParameters;
  } else if (event.httpMethod === "POST") {
    body = JSON.parse(event.body as any);
  }

  // do something...

  const response = {
    ...body,
  };

  callback(null, {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(response),
  });
};
