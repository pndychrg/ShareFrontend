/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { LocalStorageService } from "../services/localStorageService";
import { deleteImageData } from "../services/apiMethods";
import Loading from "../utils/Loading";

const ImageDetailsCard = ({ imgDetails }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [imgString, setImgString] = useState();

    useEffect(() => {
        setImgString(`data:image/png;base64,${imgDetails?.data}`)
    }, [imgDetails])


    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = imgString;
        link.download = "image.png";
        link.click();
    }

    // update - it's just to fetch the shared details to the user so that he can see how many people have fetched the image till now
    // const handleReload = () => {

    // }

    const deleteHandler = async () => {
        // TODO add the img delete from server function too
        setIsLoading(true);
        const response = await deleteImageData(imgDetails.uuid);
        console.log(response);
        if (response) {
            LocalStorageService.deleteImageDetails(imgDetails.uuid);
        }
        setIsLoading(false);

    }

    return (
        <div className="border-2 rounded-xl m-3 p-4">
            <button className="right-0 w-max py-1 px-3 rounded-lg bg-slate-400 text-white shadow-xl mb-3 float-end">Reload</button>
            <img src={imgString} alt="base64 encoded image" className="rounded-xl" />
            <div className=" p-3 m-3">
                <h5>Sharing Details : </h5>
                <p className="text-slate-700">
                    ID String : {imgDetails?.uuid}<br />
                    Shared : {imgDetails?.shared}
                </p>
            </div>
            <div className="flex flex-row flex-wrap">
                <button onClick={handleDownload} className="shadow-lg rounded-l-xl p-3 bg-slate-400 text-dark flex-grow">Download</button>
                {isLoading ? <Loading /> :
                    <button className="shadow-lg rounded-r-xl p-3 ms-1 bg-red-400 text-dark" onClick={deleteHandler}>Delete</button>
                }
            </div>
        </div>
    )
}

export default ImageDetailsCard