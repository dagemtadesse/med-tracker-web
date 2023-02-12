import RequestHelper from ".";

export const BASE_URL = "http://localhost:5050";

const UserRequests = {
  login: (data: { email: string; password: string }) => {
    const endpoint = new URL("/api/login", BASE_URL);
    return fetch(endpoint, {
      body: JSON.stringify(data),
    });
  },

  update: (data: any) => {
    const endpoint = new URL("/api/login", BASE_URL);
    return fetch(endpoint, {
      body: JSON.stringify(data),
      headers: RequestHelper.headers,
    });
  },
};

export default UserRequests;
