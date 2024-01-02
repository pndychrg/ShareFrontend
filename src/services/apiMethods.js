import { httpGetRequest, httpPostRequest, httpDeleteRequest } from "./axios";

export const fetchImageData = async (uuid) => {
  const data = await httpGetRequest(`/download/${uuid}`);
  return data;
};

export const uploadImageData = async (data) => {
  const response = await httpPostRequest("/upload", data);
  return response;
};

export const deleteImageData = async (uuid) => {
  const response = await httpDeleteRequest(`/delete/${uuid}`);
  return response;
};
