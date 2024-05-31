import Navbar from "./Navbar/Navbar.jsx";
import "./Header.css"
import {useState, useEffect} from "react";

function Header() {

    const images = ['url("images/herobg1.jpg")','url("images/herobg2.jpg")']
    const h2texts = ['Enjoy Your Holiday','MORE THAN A HOTEL...']
    const h1texts = ['Refuel Your Energy and Discover the Beauties of Denizli','Hotel for the whole family, all year around']

    const [currentIndex, setCurrentIndex] = useState(0);
    const [backgroundImage, setBackgroundImage] = useState(images[currentIndex]);
    const [h1Text, seth1Text] = useState(h1texts[currentIndex]);
    const [h2Text, seth2Text] = useState(h2texts[currentIndex]);

    const changeContent = () => {
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(nextIndex);
        setBackgroundImage(images[nextIndex]);
        seth1Text(h1texts[nextIndex]);
        seth2Text(h2texts[nextIndex]);
    };

    useEffect(() => {
        const interval = setInterval(changeContent, 10000);
        return () => clearInterval(interval);
    }, [currentIndex]);
return(
    <div id="header" className="" style={{
        backgroundImage:backgroundImage,
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center",
        transition: 'background-image 1s ease-in-out',
    }}>
        <Navbar/>

        <div id="content" className="relative z-10 text-white flex flex-row-reverse">
            <div className="row w-1/2 pr-4">
                 <h2 className="text-2xl font-bold" style={{transition: 'opacity 1s ease-in-out'}}>{h2Text}</h2>
                 <h1 className="text-6xl font-bold" style={{transition: 'opacity 1s ease-in-out'}}>{h1Text}</h1>
            </div>
        </div>
    </div>
)
}

export default Header