import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { getSuffixFromStack } from "../../utils";
export class DataStack extends cdk.Stack {
  public readonly spacesTable: cdk.aws_dynamodb.Table;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const suffix = getSuffixFromStack(this);

    const table = new cdk.aws_dynamodb.Table(this, "spacestable", {
      partitionKey: {
        name: "id",
        type: cdk.aws_dynamodb.AttributeType.STRING,
      },
      tableName: `spacestable-${suffix}`,
      billingMode: cdk.aws_dynamodb.BillingMode.PAY_PER_REQUEST,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    this.spacesTable = table;

    new cdk.CfnOutput(this, "tableName", {
      value: table.tableName,
    });
  }
}
