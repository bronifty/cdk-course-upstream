import * as Lambda from "aws-lambda";
async function handler(
  event: Lambda.APIGatewayProxyEvent,
  context: Lambda.Context
) {
  return {
    statusCode: 200,
    body: JSON.stringify({ TABLE_NAME: `${process.env.TABLE_NAME}` }),
  };
}

export { handler };
