"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const uuid_1 = require("uuid");
async function handler(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            TABLE_NAME: `${process.env.TABLE_NAME}`,
            uuid: (0, uuid_1.v4)(),
            message: "yes hello this is dog",
        }),
    };
}
exports.handler = handler;
