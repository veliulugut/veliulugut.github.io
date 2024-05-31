const Footer = () => {

    const date = new Date();
    const year = date.getFullYear()

    return(
        <div className="bg-[#21cc7a] text-white pt-10 flex flex-col justify-center items-center">

            <div className="container max-w-[1240px] flex flex-row gap-7 pb-3 justify-between">

                    <div className="row1 flex-1 p-3 h-full">
                        <h1 className="logo pb-3 text-3xl font-bold border-b-white border-b-2">Ulugut Hotel</h1>
                        <p className=" pt-2">
                            We are ready to welcome you with comfortable accommodation experience
                            and unique service understanding! You can relax in our stylish rooms,
                            taste our delicious food and enjoy your vacation. Book now and have an
                            unforgettable stay!
                        </p>
                    </div>

                    <div className="row2 flex-1 pl-3 p-3 h-full flex flex-col gap-4 text-center justify-center">

                        <div className="address border-b-white border-b-2 pb-1 ml-5 mr-5">
                           <h1 className="text-xl font-bold pb-1"> ADDRESS:</h1> <p className="pb-1"> Karahayıt mahallesi, Atatürk caddesi, no:39,Pamukkale/Denizli</p>
                        </div>

                        <div className="tel border-b-white border-b-2 pb-1 ml-5 mr-5">
                            <h1 className="text-xl font-bold pb-1"> TEL:</h1> <p className="pb-1">+90(258) 271 4167</p>
                        </div>

                        <div className="email border-b-white border-b-2 ml-5 mr-5">
                            <h1 className="text-xl font-bold pb-1"> EMAIL:</h1> <p className="pb-1">info@uluguttermal.com</p>
                        </div>

                    </div>

                <div className="row3 flex-1 pt-3 flex flex-col text-center justify-start">
                    <h1></h1>
                    <a className="pt-2 pb-2 mb-8 ml-28 mr-28 font-bold border-b-white border-b-2" href="">About</a>
                    <a className="pt-2 pb-2 mb-8 ml-28 mr-28 font-bold border-b-white border-b-2" href="">Our Rooms</a><
                    a className="pt-2 pb-2 mb-8 ml-28 mr-28 font-bold border-b-white border-b-2" href="">Contact</a>
                </div>

            </div>

            <div className="footer w-full text-center pt-4 pb-4 bg-[#16c06e]">
                    Copyright ©{year} All rights reserved | <b> Ulugut Hotel</b>
            </div>

        </div>
    )
}

export default Footer;