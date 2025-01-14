import { App } from "aws-cdk-lib";
import { DataStack } from "./stacks/DataStack";
import { LambdaStack } from "./stacks/LambdaStack";
import { ApiStack } from "./stacks/ApiStack";

const app = new App();
const dataStack = new DataStack(app, "deletemeDataStack");
const lambdaStack = new LambdaStack(app, "deletemeLambdaStack", {
  spacesTable: dataStack.spacesTable,
});
new ApiStack(app, "deletemeApiStack", {
  helloLambdaIntegration: lambdaStack.helloLambdaIntegration,
});
