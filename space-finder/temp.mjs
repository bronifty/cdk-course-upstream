import {
  CloudFrontClient,
  GetOriginAccessControlCommand,
} from "@aws-sdk/client-cloudfront"; // ES Modules import
// const { CloudFrontClient, GetOriginAccessControlCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
const client = new CloudFrontClient();
const input = {
  // GetOriginAccessControlRequest
  Id: "E2G7FI60CHJVEW", // required
};
const command = new GetOriginAccessControlCommand(input);
const response = await client.send(command);
console.log(response);
// { // GetOriginAccessControlResult
//   OriginAccessControl: { // OriginAccessControl
//     Id: "STRING_VALUE", // required
//     OriginAccessControlConfig: { // OriginAccessControlConfig
//       Name: "STRING_VALUE", // required
//       Description: "STRING_VALUE",
//       SigningProtocol: "sigv4", // required
//       SigningBehavior: "never" || "always" || "no-override", // required
//       OriginAccessControlOriginType: "s3" || "mediastore" || "mediapackagev2" || "lambda", // required
//     },
//   },
//   ETag: "STRING_VALUE",
// };
