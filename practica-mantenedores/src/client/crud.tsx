import { config } from "../utils/config";
import client from "./client";

class Crud {
  public route: string;

  constructor(route: string) {
    this.route = route;
  }

  get = async (endPoint: string) => {
    try {
      const res = await client.get(`${this.route}/${endPoint}`, { headers: config.headers });
      if (res.status === 200) {
        return res;
      }
      console.log("get request: >> ", res);
    } catch (error) {
      console.log("GET request error: ", error);
    }
  };

  post = async (endPoint: string, values: any) => {
    try {
      const res = await client.post(`${this.route}/${endPoint}`, values, { headers: config.headers });
      if (res.status === 200) {
        return res;
      }
    } catch (error) {
      console.log("add error: ", error);
    }
  };

  put = async (endPoint: string, values: any) => {
    try {
      const res = await client.put(`${this.route}/${endPoint}`, values, { headers: config.headers });
      if (res.status === 200) {
        return res;
      }
    } catch (error) {
      console.log("modify error: ", error);
    }
  };

  delete = async (endPoint: string, values: any) => {
    try {
      const res = await client.delete(`${this.route}/${endPoint}`, { data: values, headers: config.headers });
      if (res.status === 200) {
        return res;
      }
    } catch (error) {
      console.log("error erasing: ", error);
    }
  };
}

export default Crud
