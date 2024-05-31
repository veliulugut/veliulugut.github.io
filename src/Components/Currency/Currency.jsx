import { useState, useEffect } from "react";
import { Currencies } from "./Currencies.js";
import Slider from "react-slick";

const Currency = () => {
    const [exchangeRates, setExchangeRates] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const apiKey = import.meta.env.VITE_CURRENCY_API_KEY
            for (const currency of Currencies) {
                let url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency.country}`;
                try {
                    const response = await fetch(url);
                    const result = await response.json();
                    const exchangeRate = result.conversion_rates["TRY"];
                    setExchangeRates((prevRates) => ({
                        ...prevRates,
                        [currency.country]: {
                            rate: exchangeRate,
                            symbol: currency.symbol,
                            viewBox: currency.viewBox,
                            d:currency.d
                        },
                    }));
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            }
        };
        fetchData();
    }, []);

    function SampleNextArrow() {
        return (
            <div
                style={{ display: "none"}}
            />
        );
    }

    function SamplePrevArrow() {
        return (
            <div
                style={{display: "none"}}
            />
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 10000,
        cssEase: "linear",
        appendDots: dots => (
            <div
                style={{
                    display:"none"
                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className="slider-container w-[138px] mx-4 my-3 absolute top-[13px] left-5">
            <Slider {...settings}>
            {Object.entries(exchangeRates).map(([country, data]) => (
                <div key={country}>
                    {country} : {data.rate} TRY
                </div>
            ))}</Slider>
        </div>
    );
};

export default Currency;
