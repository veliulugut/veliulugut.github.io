import {useEffect, useState} from "react";

const Weather = () => {

    const [weather, setWeather] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const apiKey = import.meta.env.VITE_WEATHER_API_KEY
            const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Denizli`;
            try {
                const response = await fetch(url);
                const result = await response.json();
                const text = result.current.condition.text;
                const iconPath = result.current.condition.icon.split("").splice(35,).join("");
                const degree =Math.round(result.current["temp_c"]);
                setWeather((prevWeather) => ({
                    ...prevWeather,
                    ["Denizli"]:{
                        icon: `weather/${iconPath}`,
                        tempeture:`${degree}`,
                        text:`${text}`
                    }
                }));
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);

    return(
        <div className="absolute right-8">
            {Object.entries(weather).map(([city="Denizli",data]) => (
                <div key={city} className="inline-block">
                    <img src={data.icon} alt="" className=" ml-8 w-[40px] self-end"/>
                    <span className="pr-2">{data.text}</span>
                    <span>{data.tempeture}°C</span>

                </div>
            ))}
        </div>
    )

}

export default Weather