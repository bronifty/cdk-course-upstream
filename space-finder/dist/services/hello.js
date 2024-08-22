"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
async function handler(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({ TABLE_NAME: `${process.env.TABLE_NAME}` }),
    };
}
exports.handler = handler;
