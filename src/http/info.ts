import RequestHelper from ".";
import { BASE_URL } from "./user";

export type InfoType = "vaccine" | "alergy" | "medicine" | "allegy";

const InformationRequest = {
  fetchInfo: (type: InfoType) => {
    const endpoint = new URL(`/api/${type}`, BASE_URL);
    return fetch(endpoint, {
      headers: RequestHelper.headers,
    });
  },

  addInfo: (type: InfoType, data: any) => {
    const endpoint = new URL(`/api/${type}`, BASE_URL);

    return fetch(endpoint, {
      method: "post",
      body: JSON.stringify(data),
      headers: RequestHelper.headers,
    });
  },

  deleteInfo: (type: InfoType) => {
    const endpoint = new URL(`/api/${type}`, BASE_URL);

    return fetch(endpoint, {
      method: "delete",
      headers: RequestHelper.headers,
    });
  },

  shareInfo: (type: InfoType) => {
    const endpoint = new URL(`/api/${type}`, BASE_URL);
    return fetch(endpoint, { headers: RequestHelper.headers });
  },

  translateInfo: (type: InfoType) => {
    const endpoint = new URL(`/api/${type}`, BASE_URL);
    return fetch(endpoint, { headers: RequestHelper.headers });
  },

  searchInfo: (type: InfoType, query: string) => {
    const endpoint = new URL(`/api/search`, BASE_URL);
    endpoint.searchParams.set("type", type);
    endpoint.searchParams.set("query", query);

    return fetch(endpoint, { headers: RequestHelper.headers });
  },
};

export default InformationRequest;
