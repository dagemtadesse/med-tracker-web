import RequestHelper from ".";
import { BASE_URL } from "./user";

type NewDocument = {
  file: File;
  title: string;
  descripton: string;
  type: string;
};

const DocumentRequests = {
  fetchDocuments: () => {
    const endpoint = new URL("/api", BASE_URL);
    return fetch(endpoint, { headers: RequestHelper.headers });
  },

  editDocument: (doc: Document) => {
    const endpoint = new URL("/api", BASE_URL);
    return fetch(endpoint, { headers: RequestHelper.headers });
  },

  deleteDocument: (id: string) => {
    const endpoint = new URL("/api", BASE_URL);
    return fetch(endpoint, { headers: RequestHelper.headers });
  },

  addDocument: (data: NewDocument) => {
    const endpoint = new URL("/api", BASE_URL);
    const formData = new FormData();

    Object.keys(data).forEach((value) => {
      formData.append(value, data[value as keyof NewDocument]);
    });

    return fetch(endpoint, {
      method: "post",
      headers: RequestHelper.headers,
      body: formData,
    });
  },
};

export default DocumentRequests;
