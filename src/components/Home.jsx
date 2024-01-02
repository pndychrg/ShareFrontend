import { useState } from "react"
import Send from "./Send";
import Receive from "./Receive";
import History from "./History";


const Home = () => {

    const [isSendActive, setIsSendActive] = useState(true);

    return (
        <div className="flex flex-col items-center justify-center mt-5 p-5 font-Montserrat">
            <h1 className="md:text-9xl text-center text-7xl">Wanna Share a Image ?</h1>
            <div className="flex flex-row justify-around items-center mt-10 w-full flex-wrap">
                <button className="border-2 rounded-lg px-6 py-3 text-5xl shadow-lg" onClick={() => (setIsSendActive(true))}>Send</button>
                <button className="border-2 rounded-lg px-6 py-3 text-5xl shadow-lg" onClick={() => (setIsSendActive(false))}>Recieve</button>
            </div>
            <div className=" flex justify-center items-center mt-10 border-2 rounded-lg p-5 ">
                {isSendActive ? <Send /> : <Receive />}
            </div>
            <hr className="mt-2" />
            {/* history */}
            <History />
        </div>
    )
}

export default Home