import { useRef, useState } from "react"

const Send = () => {

    const [selectedFile, setSelectedFile] = useState();
    const [renderedImage, setRendredImage] = useState();

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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("File Submitted", selectedFile);
    }

    return (
        <div>
            <h2 className="text-xl">Pick the Image file</h2>
            <p className="text-black/50 mb-4">( Allowed Extensions : jpg,jpeg,png )</p>
            <img src={renderedImage} alt="preview image" />
            <form onSubmit={handleSubmit} >
                <div >
                    <input type="file" id="file-upload" ref={fileInputRef} onChange={handleFileChange} accept="image/*" />
                    <button type="button" className="custom-button" onClick={handleButtonClick}>Choose File</button>
                    <span>
                        {selectedFile ? `Selected : ${selectedFile.name}` : 'No File Selected'}
                    </span>
                </div>
                <button type="submit" className="custom-button w-full">Submit</button>
            </form >
        </div >
    )
}

export default Send;