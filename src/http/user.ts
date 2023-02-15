import RequestHelper from ".";
import { Info } from "../contexts/InformationContext";

export const BASE_URL = "http://localhost:5050";
export const KEY = "AIzaSyDmx2dhZrUXHVWLZh2bQOXZpdwMlE2fZ4g";

const UserRequests = {
  login: async (data: { email: string; password: string }) => {
    const endpoint = new URL("https://localhost:7296/api/auth/login");

    const response = await fetch(endpoint, {
      method: "post",
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(data),
    });

    const json = await response.json();

    json.localID = json.token;

    return json
  },

  signup: async (data: { email: string; password: string }) => {
    const endpoint = new URL("https://localhost:7296/api/auth/signup");

    const response = await fetch(endpoint, {
      method: "post",
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(data),
    });

    return response
  },

  search: async (type: string, query: string) : Promise<Info[]> => {
    const endpoint = new URL(`https://localhost:7296/api/search/${type}`);
    endpoint.searchParams.set("query", query);

    const response = await fetch(endpoint, {
      headers: {
        'Authorization': localStorage.getItem("token")!
      }
    })

    const json = await response.json()

    const apiMap = {"allergy": "allergies",  "medicine" : "medicines", "diagnosis" : "diagnoses", "vaccine" : "vaccines"}

    return json.map((item : any)=> {
      return {
        type: String(apiMap[type]) || "" ,
        title: item.name,
        id: item.code
      }
    })
  }
};

export default UserRequests;
