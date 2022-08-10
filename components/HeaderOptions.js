import HeaderOption from "./HeaderOption";
import {
   SearchIcon,
   PhotographIcon,
   MapIcon,
   NewspaperIcon,
   PlayIcon,
   DotsVerticalIcon
} from "@heroicons/react/outline";



export default function HeaderOptions(){


    return <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base 
    lg:justify-start lg:space-x-36 lg:ml-52 border-b-[1px]">
        {/**Left */}
        <div className="flex space-x-6"> 
            <HeaderOption Icon ={SearchIcon} title = "All" selected/>{/**The first one is selected by default*/}
            <HeaderOption Icon = {PhotographIcon} title = "Images"/>
            <HeaderOption Icon = {PlayIcon} title = "Videos"/>
            <HeaderOption Icon = {MapIcon} title = "Maps"/>
            <HeaderOption Icon = {NewspaperIcon} title = "News"/>
            <HeaderOption Icon = {DotsVerticalIcon} title = "More"/>
        </div>

        {/**Right */}

        <div className="flex px-4 rounded-sm cursor-pointer transition duration-100 transform hover:ring-1 active:ring-gray-300">
            <p>Tools</p>
        </div>
        <hr></hr>
    </div>;

}