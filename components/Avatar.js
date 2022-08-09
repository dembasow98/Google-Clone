function Avatar({url}) {
    // lazy load image:if the image is not visible, 
        //it will not be loaded, but the rest of the page will be loaded
    return <img 
        className="h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110"
        loading="lazy" 
        src={url} 
        alt="profile picture"
        
    />;
}


export default Avatar;