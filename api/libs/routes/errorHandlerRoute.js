import { HttpStatusCodes } from "../constants";

export default (stack = false) => (err, req, res, next) =>
  res.status(err.status).json({
    message: "error"
  });
