import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="fixed top-0 z-30 mx-auto w-full max-w-screen-sm border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-md md:top-4 md:rounded-3xl lg:max-w-screen-lg inset-x-0">
            <div className="px-4">
                <div className="flex items-center justify-between">
                    <div>
                        <Link href="#" className="">Share It</Link>
                    </div>
                    <div >
                        {/* Add download and upload buttons here which scrolls the page to them */}
                        <Link href="#" className="me-2" >Download</Link>
                        <Link href="#" >Upload</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar