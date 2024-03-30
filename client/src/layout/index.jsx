import { useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Overlay from "../components/Overlay";

export default function Layout({ children }) {

    const [position, setPosition] = useState('');
    if(typeof window !== "undefined"){
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 0){
                setPosition('top-[10vh]')
            }
        })
    }

    const [sideBarState, setSideBarState] = useState(false);
    const sideBarToggle = () => {
        setSideBarState(!sideBarState)
    }

    return (
        <div className="relative">
            <div className="sticky top-0">
                <NavBar sideBarToggle={sideBarToggle} sideBarState={sideBarState}/>
            </div>
            <div className="flex">
                <div className={`h-[90vh] bg-gray-500 rounded ${sideBarState ?'block':'hidden'} fixed left-0 ${position} lg:block`}>
                    <SideBar setSideBarState={setSideBarState}/>
                    <Overlay style="z-10 lg:hidden"/>
                </div>
                <div className="w-full min-h-[90vh]">
                    {children}
                </div>
            </div>
        </div>
    );
}
