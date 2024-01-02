import axios from "axios";

// hosted server
axios.defaults.baseURL = "https://shareit-backend-6i82.onrender.com";

// development server
// axios.defaults.baseURL = "http://127.0.0.1:5000";

// http requests
export const httpGetRequest = async (path) => {
  try {
    const response = await axios.get(path);
    return response.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const httpPostRequest = async (path, data) => {
  try {
    const response = await axios.post(path, data);
    return response.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const httpDeleteRequest = async (path) => {
  try {
    const response = await axios.delete(path);
    return response.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};
