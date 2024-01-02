import { useEffect, useState } from "react";
import { fetchImageData } from "../services/apiMethods";


const Receive = () => {

    const [searchString, setSearchString] = useState("");
    const [downloadImgDetails, setDownloadImgDetails] = useState();

    const [imgString, setImgString] = useState();

    useEffect(() => {
        setImgString(`data:image/png;base64,${downloadImgDetails?.data}`)
    }, [downloadImgDetails])

    const handleSubmit = async (e) => {
        console.log("Submit tried")
        e.preventDefault();
        const response = await fetchImageData(searchString);
        if (response) {
            setDownloadImgDetails(response);
        }
    }

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = imgString;
        link.download = "image.png";
        link.click();
    }
    return (
        <div className="flex flex-col">
            <div className="flex flex-col">
                <h1 className="text-5xl">Recieve an Image</h1>
                <form onSubmit={handleSubmit} className="flex flex-row mt-2 justify-center focus:border-slate-700 items-center m-3">
                    <input type="text" onChange={(e) => setSearchString(e.target.value)} className="border-2 p-2 m-2 rounded-lg w-full focus:border-blue-500" required />
                    <button type="submit" className="custom-button">Search</button>
                </form>
            </div>
            {/*  for rendering the fetched image details */}
            {downloadImgDetails ?
                <div className="m-2 ">
                    <hr className="mb-5" />
                    <img src={imgString} alt="base64 encoded image" className="border-2 rounded-xl" />
                    <button onClick={handleDownload} className="custom-button mt-3">Download</button>
                </div> : <div></div>}

        </div>

    )
}

export default Receive