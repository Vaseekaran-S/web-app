import { useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

export default function Layout({children}){

    const [sideBar, setSideBar] = useState(false)

    function toggle(){
        setSideBar(!sideBar)
    }

    return(
        <div>
            <div className='sticky top-0'>
                <NavBar toggle={toggle} state={sideBar}/>
            </div>
            <div className="flex">
                <div className="h-full bg-gray-500 fixed md:static top-[60px] left-0">
                    {sideBar?<SideBar toggle={toggle} />:""}
                </div>
                <div className="">
                    {children}
                </div>
            </div>
        </div>
    )
}