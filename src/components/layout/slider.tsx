import React, { useState, useEffect } from "react"

const Banner = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        '/banner.png',
        '/banner1.png',
        '/banner2.png'
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(currentImage => (currentImage + 1) % images.length);
        }, 3000);
        return () => clearInterval(intervalId);
    }, [images.length])

    return <div className="container mt-[29px]">
        <img className="w-[1200px] h-[450px] ml-[180px]" src={images[currentImage]} alt="Banner" />
        {/* <button onClick={() => setCurrentImage((currentImage + 1) % images.length)}>Next</button> */}
    </div>
}
export default Banner