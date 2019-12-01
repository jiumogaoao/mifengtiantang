import Cookies from "js-cookie";
var config = require("../common/config.js");
export const getCookies = (name) => {
  let dataString = Cookies.get(name)?Cookies.get(name):null;
  return dataString;
};
export const setCookies = (name,data = "") => {
  return Cookies.set(name, data,{ expires: 7 });
};
