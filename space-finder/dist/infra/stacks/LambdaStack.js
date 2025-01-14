"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LambdaStack = void 0;
const cdk = __importStar(require("aws-cdk-lib"));
const FsUtils = __importStar(require("@bronifty/fs-utils"));
class LambdaStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const helloLambda = new cdk.aws_lambda_nodejs.NodejsFunction(this, "HelloLambda", {
            runtime: cdk.aws_lambda.Runtime.NODEJS_LATEST,
            handler: "index.handler",
            code: cdk.aws_lambda.Code.fromAsset(`${FsUtils.getProjectRoot()}/dist/services`),
            environment: {
                TABLE_NAME: props.spacesTable.tableName,
            },
        });
        this.helloLambdaIntegration = new cdk.aws_apigateway.LambdaIntegration(helloLambda);
        const functionUrl = helloLambda.addFunctionUrl({
            authType: cdk.aws_lambda.FunctionUrlAuthType.NONE,
        });
        new cdk.CfnOutput(this, "FunctionUrl", {
            value: functionUrl.url,
        });
    }
}
exports.LambdaStack = LambdaStack;
