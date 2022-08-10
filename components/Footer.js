import {GlobeIcon} from '@heroicons/react/solid'


function Footer(){
    return <footer className='grid w-full divide-y-[1px] text-sm p-3 text-gray-700 bg-gray-100'>
        <div className='px-8 py-3'>
            <p>Turkey</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-y-4 px-8 py-3'>
            <div className='flex justify-center space-x-8 whitespace-nowrap md:justify-self-start'>
                <p className='footer-tag'>About</p>
                <p className='footer-tag'>Advertising</p>
                <p className='footer-tag'>Business</p>
                <p className='footer-tag'>How Search works</p>
            </div>
            <div className='flex justify-center space-x-8 whitespace-nowrap md:ml-auto'>
                <p className='footer-tag'>Privacy</p>
                <p className='footer-tag'>Terms</p>
                <p className='footer-tag'>Settings</p>
            </div>
        </div>
    </footer>
    
};

export default Footer;