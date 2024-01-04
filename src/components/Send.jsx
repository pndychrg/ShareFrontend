import { useRef, useState } from "react"
import { uploadImageData } from '../services/apiMethods'
import Loading from "../utils/Loading";

const Send = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState();
    const [renderedImage, setRendredImage] = useState();
    const [uploadedImgDetails, setUploadedImgDetails] = useState();


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // setSelectedFile(URL.createObjectURL(file))
            setSelectedFile(file);
            setRendredImage(URL.createObjectURL(file))
        }
        console.log(selectedFile);
    }

    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("File Submitted", selectedFile);
        if (!selectedFile) {
            console.log("No File selected");
            return;
        }
        const formData = new FormData();
        formData.append("img", selectedFile);
        setIsLoading(true)
        const response = await uploadImageData(formData);
        if (response) {
            console.log("Image Uploaded")
            setUploadedImgDetails(response);
            console.log(uploadedImgDetails);
        }
        setIsLoading(false);
    }
    return (
        <div>
            {/* // Div for uploading the image */}
            <div>
                <h2 className="text-xl">Pick the Image file</h2>
                <p className="text-black/50 mb-4">( Allowed Extensions : jpg,jpeg,png )</p>
                {renderedImage != null ?
                    <img src={renderedImage} alt="preview image" /> : <span></span>}
                <form onSubmit={handleSubmit} >
                    <div >
                        <input type="file" id="file-upload" ref={fileInputRef} onChange={handleFileChange} accept="image/*" />
                        <button type="button" className="custom-button" onClick={handleButtonClick}>Choose File</button>
                        <span>
                            {selectedFile ? `Selected : ${selectedFile.name}` : 'No File Selected'}
                        </span>
                    </div>
                    {isLoading ? <Loading /> :
                        <button type="submit" className="custom-button w-full">Submit</button>
                    }
                </form >
            </div>
            {uploadedImgDetails ? <div className="border-2 rounded-lg p-3 m-3">
                <h5>Sharing Details : </h5>
                <p className="text-slate-700">
                    ID String : {uploadedImgDetails?.uuid}<br />
                    Shared : {uploadedImgDetails?.shared}
                </p>
            </div> : <span></span>}
        </div >
        // div for showing the response from the server
    )
}

export default Send;