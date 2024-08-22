"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aws_cdk_lib_1 = require("aws-cdk-lib");
const DataStack_1 = require("./stacks/DataStack");
const LambdaStack_1 = require("./stacks/LambdaStack");
const ApiStack_1 = require("./stacks/ApiStack");
const app = new aws_cdk_lib_1.App();
const dataStack = new DataStack_1.DataStack(app, "deletemeDataStack");
const lambdaStack = new LambdaStack_1.LambdaStack(app, "deletemeLambdaStack", {
    spacesTable: dataStack.spacesTable,
});
new ApiStack_1.ApiStack(app, "deletemeApiStack", {
    helloLambdaIntegration: lambdaStack.helloLambdaIntegration,
});
