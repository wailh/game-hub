import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ecf6c1c5963449a391ddc54a5aa6fe75"
  }
});
