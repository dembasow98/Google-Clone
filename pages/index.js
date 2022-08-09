import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Avatar from '../components/Avatar'
import { MicrophoneIcon, SearchIcon, ViewGridIcon } from '@heroicons/react/solid'

export default function Home() {
  return (
    <div className={styles.container} >
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
     
      {/**Footer */}
    
    </div>
  )
}
