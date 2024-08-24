import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as FsUtils from "@bronifty/fs-utils";

interface LambdaStackProps extends cdk.StackProps {
  spacesTable: cdk.aws_dynamodb.ITable;
}

export class LambdaStack extends cdk.Stack {
  public readonly helloLambdaIntegration: cdk.aws_apigateway.LambdaIntegration;
  constructor(scope: Construct, id: string, props: LambdaStackProps) {
    super(scope, id, props);

    const helloLambda = new cdk.aws_lambda_nodejs.NodejsFunction(
      this,
      "HelloLambda",
      {
        runtime: cdk.aws_lambda.Runtime.NODEJS_LATEST,
        handler: "handler",
        entry: `${FsUtils.getProjectRoot()}/src/services/index.ts`,
        environment: {
          TABLE_NAME: props.spacesTable.tableName,
        },
      }
    );
    this.helloLambdaIntegration = new cdk.aws_apigateway.LambdaIntegration(
      helloLambda
    );
    const functionUrl = helloLambda.addFunctionUrl({
      authType: cdk.aws_lambda.FunctionUrlAuthType.NONE,
    });
    new cdk.CfnOutput(this, "FunctionUrl", {
      value: functionUrl.url,
    });
  }
}
