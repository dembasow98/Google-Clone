import Head from 'next/head'
import Image from 'next/image'
import Avatar from '../components/Avatar'
import { MicrophoneIcon, SearchIcon, ViewGridIcon } from '@heroicons/react/solid'
import Footer from '../components/Footer'
import { useRef } from 'react'
import { useRouter } from 'next/router'

export default function Home() {

  //Search reference:
  const searchInputRef = useRef(null);

  //Router reference:
  const router = useRouter();


  /*Search function:*/
  const search = (e) =>{

    e.preventDefault(); //We don't want the page to keep refreshing

    const term = searchInputRef.current.value; //Get the value of the search input

    
    if(!term){ //If the search input is empty, return
      return;
    }
    //Redirect to the search page with the search term as a parameter
    router.push(`/search?term=${term}`);



  }
  return (
    <div className="flex flex-col items-center justify-center h-screen" >
      <Head>
        <title>Google Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/**Header */}
      <header className='flex w-full p-5 justify-between'>
        {/** left */}
        <div className="flex space-x-4 items-center">
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>
        {/** right */}
        <div className="flex space-x-4 items-center">
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>
          {/** icon */}
          <ViewGridIcon className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer'/>
          {/**Avatar */}
          <Avatar url = "https://i.pinimg.com/236x/da/1c/e6/da1ce6495d580fe659f285e9ebafbd12.jpg" />
        </div>
      </header>
      {/**Body */}
      <form className='flex flex-col items-center mt-35 flex-grow w-4/5'>
        <Image 
        src="https://wikiimg.tojsiabtv.com/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
        height={100}
        width = {300}
        />
        <div className='flex w-full mt-5 hover:shadow-lg  focus-within:shadow-lg max-w-md
        rounded-full border border-gray-200 px-2 py-1 items-center sm:max-w-xl lg:max-w-2xl'>
          <SearchIcon className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer'/>
          <input 
            ref={searchInputRef}
            type="text" placeholder="Search" className='w-full p-2 rounded-full focus:outline-none'
          />
          <MicrophoneIcon className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer'/>
        </div>
        <div className='flex w-1/2 flex-col space-y-2 justify-center mt-6 sm:space-y-0 sm:flex-row sm:space-x-4'>
          <button onClick={search} className='btn'>Google Search</button>
          <button onClick={search} className='btn'>I'm Feeling Lucky</button>
        </div>
        <div>
          <p className='text-center text-gray-500 text-sm mt-4'>Google offered in: <span className='text-blue-800 hover:underline cursor-pointer'>Türkçe</span></p>
        </div>
       
      </form>
      {/**Footer */}
  
      <Footer/>
    </div>
  )
}
