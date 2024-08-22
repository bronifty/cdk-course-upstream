import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as FsUtils from "@bronifty/fs-utils";

interface ApiStackProps extends cdk.StackProps {
  helloLambdaIntegration: cdk.aws_apigateway.LambdaIntegration;
}

export class ApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: ApiStackProps) {
    super(scope, id, props);
    const api = new cdk.aws_apigateway.RestApi(this, "SpaceFinderApi");
    const spacesResource = api.root.addResource("spaces");
    spacesResource.addMethod("GET", props.helloLambdaIntegration);

    new cdk.CfnOutput(this, "apiUrl", {
      value: api.url,
    });
  }
}
