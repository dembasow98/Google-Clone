import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';
import {CogIcon, ViewGridIcon} from '@heroicons/react/outline';

export default function Header(){


    //Router reference:
    const router = useRouter();
    //Search reference:
    const searchInputRef = useRef(null);


    //Search function:
    const search = (e) =>{
        e.preventDefault(); //We don't want the page to keep refreshing
        const term = searchInputRef.current.value; //Get the value of the search input
        if(!term){ //If the search input is empty, return
            return;
        }
        //Pushing the search page with the search term as a 
        router.push(`/search?term=${term}`);

        //Use google search API to search for the term
        //fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_CSE_ID}&q=${term}`)
    
    
    }

    

    
    return <header className='sticky bg-white top-0'>
           <div className='flex w-full p-6 items-center'>
                <Image
                    className = "cursor-pointer"
                    src="https://wikiimg.tojsiabtv.com/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                    height={40}
                    width = {120}
                    onClick = {() =>router.push('/')} //Redirect to the home page
                />

                {/**Search */}
                <form className='flex px-6 py-3 ml-10 mr-5 border border-gray-100 rounded-full shadow-lg max-w-3xl flex-grow items-center'>
                    <input
                        type="text"
                        placeholder="Search"
                        ref={searchInputRef}
                        className="flex-grow w-full  focus:outline-none"
                    />
                    <XIcon className='h-6 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125'
                        onClick={()=>(searchInputRef.current.value = '')}
                    />
                    
                    <MicrophoneIcon className='h-7 ml-2 border-l-2 pl-2 text-blue-500 hidden sm:inline-flex cursor-pointer transition duration-100 transform hover:scale-125'/>
                    <SearchIcon className='h-7 ml-3 text-blue-500 hidden sm:inline-flex cursor-pointer transition duration-100 transform hover:scale-125'/>
                    <button hidden type='submit' onClick={search}>Search</button>
                </form>
                {/**right*/}
                <div className='ml-auto flex space-x-4 items-center'>
                    <CogIcon className='h-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer'/>
                    <ViewGridIcon className='h-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer'/>
                    <Avatar url = "https://i.pinimg.com/236x/da/1c/e6/da1ce6495d580fe659f285e9ebafbd12.jpg"/>
                </div>
           </div>
           {/**HeaderOptions */}


           <HeaderOptions/>
        </header>;
    }