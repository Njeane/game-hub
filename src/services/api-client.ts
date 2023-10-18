import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f1d542c2492f487dbe26932963a53602",
  },
});
