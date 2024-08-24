import * as Lambda from "aws-lambda";
import { v4 as uuidv4 } from "uuid";
async function handler(
  event: Lambda.APIGatewayProxyEvent,
  context: Lambda.Context
) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      TABLE_NAME: `${process.env.TABLE_NAME}`,
      uuid: uuidv4(),
      message: "yes hello this is dog!",
    }),
  };
}

export { handler };
