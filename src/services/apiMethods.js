import { httpGetRequest, httpPostRequest, httpDeleteRequest } from "./axios";
import { LocalStorageService } from "./localStorageService";

// localStorageService = LocalStorageService()

export const fetchImageData = async (uuid) => {
  const data = await httpGetRequest(`/download/${uuid}`);
  // Only for Testing purpose
  // LocalStorageService.saveImgDetails(data);
  return data;
};

export const uploadImageData = async (data) => {
  const response = await httpPostRequest("/upload", data);
  // saving the data in local storage
  LocalStorageService.saveImgDetails(data);
  return response;
};

export const deleteImageData = async (uuid) => {
  const response = await httpDeleteRequest(`/remove/${uuid}`);
  return response;
};
