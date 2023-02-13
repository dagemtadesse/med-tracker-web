const RequestHelper = {
  get headers() {
    const token = localStorage.getItem("token");
    return {
      Authorization: `Bearer ${token}`,
    };
  },
};

export default RequestHelper;
