import axios from "axios";

const KEY = "AIzaSyCyXYzH-iLG3OE8thhxIojkclutKhn7i4s";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
