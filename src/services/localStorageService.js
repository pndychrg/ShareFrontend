export const LocalStorageService = {
  // KEY WOULD BE THE UUID and a list will be maintained to fetch all the shared images one by one
  SAVED_UUID: "saved",
  // TODO add try catch for each function
  getSavedUUIDArray() {
    var savedUUIDs = localStorage.getItem(this.SAVED_UUID);
    if (savedUUIDs) {
      savedUUIDs = JSON.parse(savedUUIDs);
    } else {
      // if the array doesn't exist then create one
      localStorage.setItem(this.SAVED_UUID, JSON.stringify([]));
      return [];
    }
    return savedUUIDs;
  },

  addToSavedUUIDArray(imgDetails) {
    const savedUUIDs = this.getSavedUUIDArray();
    savedUUIDs.push(imgDetails.uuid);
    localStorage.setItem(this.SAVED_UUID, JSON.stringify(savedUUIDs));
  },

  deleteFromSavedUUIDArray(uuid) {
    var savedUUIDs = this.getSavedUUIDArray();
    savedUUIDs = savedUUIDs.filter((savedUUID) => savedUUID != uuid);
    localStorage.setItem(this.SAVED_UUID, JSON.stringify(savedUUIDs));
  },

  // saving the img details in the localstorage
  saveImgDetails(imgDetails) {
    // appending the uuid for the current image
    this.addToSavedUUIDArray(imgDetails);
    localStorage.setItem(imgDetails.uuid, JSON.stringify(imgDetails));
  },

  //   fetching the image details according to the uuid
  fetchImageDetails(uuid) {
    return JSON.parse(localStorage.getItem(uuid));
  },

  fetchAllImages() {
    const savedUUIDs = this.getSavedUUIDArray();
    const retArray = [];
    if (savedUUIDs) {
      savedUUIDs.map((uuid) => retArray.push(this.fetchImageDetails(uuid)));
    }
    // console.log(retArray);
    return retArray;
  },

  deleteImageDetails(uuid) {
    // UPDATING THE savedUUIDArray
    this.deleteFromSavedUUIDArray(uuid);
    // removing the key value pair too
    localStorage.removeItem(uuid);
  },
};
