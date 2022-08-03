import { config } from "../utils/config";
import client from "./Client";

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
      console.log("POST request error: ", error);
    }
  };

  put = async (endPoint: string, values: any) => {
    try {
      const res = await client.put(`${this.route}/${endPoint}`, values, { headers: config.headers });
      if (res.status === 200) {
        return res;
      }
    } catch (error) {
      console.log("PUT request error: ", error);
    }
  };

  delete = async (endPoint: string, values: any) => {
    try {
      const res = await client.delete(`${this.route}/${endPoint}`, { data: values, headers: config.headers });
      if (res.status === 200) {
        return res;
      }
    } catch (error) {
      console.log("DELETE request error: ", error);
    }
  };
}

export default Crud;
