import { parse } from "url";

export function parseRequest(req) {
  console.log("HTTP " + req.url);

  const { pathname, query } = parse(req.url || "/", true);
  const { width, height } = query || {};
  const { voucher, conditions, type, color, message } = query || {};

  const arr = (pathname || "/").slice(1).split(".");

  let extension = "";
  let text = "";

  if (arr.length === 0) {
    text = "";
  } else if (arr.length === 1) {
    text = arr[0];
  } else {
    extension = arr.pop();
    text = arr.join(".");
  }

  const parsedRequest = {
    fileType: extension,
    voucher: decodeURIComponent(voucher),
    conditions: decodeURIComponent(conditions),
    type: decodeURIComponent(type),
    color: decodeURIComponent(color),
    message: decodeURIComponent(message),
    width: width,
    height: height,
  };

  return parsedRequest;
}
