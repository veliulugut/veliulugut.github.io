import * as React from "react";
import {slides} from "./gallery.js";
import "./Gallery.css"

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import {Counter, Fullscreen, Thumbnails, Zoom} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = function () {
    const [open, setOpen] = React.useState(false);


    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
    };

    function createImage(slide){
        return(
            <img onClick={() => setOpen(true)} className="p-3 rounded-[25px] cursor-pointer" src={slide.src} key={slide.id} alt=""/>
        )
    }



    return (
        <div className="mt-10 mb-10 ">
            <div className="textContainer">
            <h2 className="text-[#21cc7a] font-bold text-xl mb-4">THIS IS WHAT WE OFFER</h2>
            <h1 className="font-bold text-4xl mb-10">Gallery</h1></div>

            <div className="slider-container bg-[#f4f4f4] pt-10 pb-10 pr-2 pl-2">
                <Slider {...settings}>
                    {slides.map(createImage)}
                </Slider>
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slides}
                plugins={[Counter, Fullscreen, Zoom,Thumbnails]}
                counter={{container: {style: {top: 0}}}}


            />
        </div>
    )
}

export default Gallery;