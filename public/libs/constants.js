"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HttpStatusCodes = exports.EnvVars = exports.HttpMethods = void 0;

/**
 * List of HTTP Methods
 */
var HttpMethods = {
  GET: 'GET',
  DELETE: 'DELETE',
  POST: 'POST',
  PUT: 'PUT'
};
/**
 * List of Environment Variables
 */

exports.HttpMethods = HttpMethods;
var EnvVars = {
  DEV: 'dev',
  LOCAL: 'local',
  PROD: 'production',
  TEST: 'test'
};
/**
* List of Status Codes
*/

exports.EnvVars = EnvVars;
var HttpStatusCodes = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  UNPROCESSABLE: 422,
  INTERNAL_SERVER_ERROR: 500
};
exports.HttpStatusCodes = HttpStatusCodes;