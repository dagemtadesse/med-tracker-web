import RequestHelper from ".";

export const BASE_URL = "http://localhost:5050";
export const KEY = "AIzaSyDmx2dhZrUXHVWLZh2bQOXZpdwMlE2fZ4g";

const UserRequests = {
  login: (data: { email: string; password: string }) => {
    const endpoint = new URL("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword");
    endpoint.searchParams.set("key", KEY)

    return fetch(endpoint, {
      method: "post",
      body: JSON.stringify(data),
    });
  },

  signup: (data: { email: string; password: string }) => {
    const endpoint = new URL("https://identitytoolkit.googleapis.com/v1/accounts:signUp");
    endpoint.searchParams.set("key", KEY)

    return fetch(endpoint, {
      method: "post",
      body: JSON.stringify(data),
    });
  },

  // update: (data: any) => {
  //   const endpoint = new URL("/api/login", BASE_URL);
  //   return fetch(endpoint, {
  //     method: "post",
  //     body: JSON.stringify(data),
  //     headers: RequestHelper.headers,
  //   });
  // },
};

export default UserRequests;
