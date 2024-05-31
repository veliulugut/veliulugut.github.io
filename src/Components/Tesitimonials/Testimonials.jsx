import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {comments} from "./Comments.js";

export default function Testimonials() {

    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
    };

    function createComments(slide){
        return (
            <figure className="mt-10" key={slide.id}>
                <blockquote
                    className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                    <p>
                        {slide.comment}
                    </p>
                </blockquote>
                <figcaption className="mt-6 mb-4">
                    <img
                        className="mx-auto h-10 w-10 rounded-full"
                        src={slide.pp}
                        alt=""
                    />

                </figcaption>
            </figure>
        )
    }

    return (
        <section className="relative isolate overflow-hidden bg-white px-6 py-20 sm:py-32 lg:px-8">
            <div
                className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"/>
            <div
                className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"/>
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <div className="slider-container bg-transparent">
                    <div className="textContainer max-w-[360px] text-center">
                        <h2 className="text-[#21cc7a] font-bold text-xl mb-4 w-full text-center">THINGS THAT PEOPLE SAY ABOUT US</h2>
                        <h1 className="font-bold text-4xl mb-10 text-center">Testimonials</h1>
                    </div>
                    <Slider {...settings}>
                        {comments.map(createComments)}
                    </Slider>
                </div>
            </div>
        </section>
    )
}
