import { useState } from "react"
import { LocalStorageService } from "../services/localStorageService";
import ImageDetailsCard from "./ImageDetailsCard";

const History = () => {

    // eslint-disable-next-line no-unused-vars
    const [savedImages, setSavedImages] = useState(LocalStorageService.fetchAllImages());

    // variable for static dependency check
    // const fetchAllImagesResult = LocalStorageService?.fetchAllImages();

    // useEffect(() => {
    //     if (fetchAllImagesResult) {
    //         setSavedImages(LocalStorageService.fetchAllImages())
    //     }
    // }
    //     , [fetchAllImagesResult])

    const savedImagesElements = savedImages?.map((imgDetails, index) => (<ImageDetailsCard key={index} imgDetails={imgDetails} />))



    return (
        <div className="">
            <h5 className="text-4xl">Your Previously Shared Images</h5>
            {/* rendering all the images */}
            {savedImagesElements}
        </div>
    )
}

export default History