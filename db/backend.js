import Axios from "axios";

const AxiosBase = Axios.create({
  baseURL: "https://ig-task-app-backend.herokuapp.com",
});

export default AxiosBase;
