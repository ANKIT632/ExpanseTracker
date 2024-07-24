'use client'
import { RiMenuFold4Fill } from "react-icons/ri";
import { RiMenuFold3Fill } from "react-icons/ri";
import { useState } from "react";


function NavBar() {
    const [menuVisibility, setMenuVisibility] = useState(false);
    return (
        <div>
            <div className='h-10 bg-blue-400 rounded-md m-1 shadow-gray-400 shadow-sm '>

                <div className="  h-full w-fit text-3xl text-white   flex items-center cursor-pointer hover:text-gray-700 active:text-black ml-1">
                    {menuVisibility ? <RiMenuFold3Fill className="flex " /> : <RiMenuFold4Fill />}

                    <img src="" alt="" />
                </div>
            </div>

        </div>
    )
}

export default NavBar;