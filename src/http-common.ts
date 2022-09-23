import axios from "axios";

export default axios.create({
  baseURL: "https://newsapi.org/v2/",
  headers: {
    "Content-type": "application/json",
    "x-api-key": "301cbe699ebe423b8b50154825aba47f",
    "Access-Control-Allow-Origin": "*",
  },
});
