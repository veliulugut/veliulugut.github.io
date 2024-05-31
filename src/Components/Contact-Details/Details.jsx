import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faSquareFacebook} from "@fortawesome/free-brands-svg-icons";

const Details = () => {
    return (
    <div
        className="details bg-white border-none shadow-[0_0_5px_3px_rgba(144,144,144,.1)] flex-[1] px-5 pt-2 pb-5 w-[350px] max-h-[410px]">
        <div className="address border-b-[1px] border-[#ddd] p-2">
            <div className="icon">

            </div>
            <div className="text">
                <h3 className="font-bold">Our Adress</h3>
                <p className="p-2">
                    Karahayıt mahallesi, Atatürk caddesi, no:39,Pamukkale/Denizli
                </p>
            </div>
        </div>
        <div className="tel border-b-[1px] border-[#ddd] p-2">
            <div className="icon">

            </div>
            <div className="text">
                <h3 className="font-bold">Our Phone Number</h3>
                <p className="p-2 text-[#21cc7a]">
                    <a href="tel:902582714167">+90(258) 271 41 67</a>
                </p>
                <h3 className="font-bold">Whatsapp</h3>
                <p className="p-2 text-[#21cc7a]">
                    <a href="https://wa.me/905367067816" target="_blank">+90(536) 706 78 16</a>
                </p>
            </div>
        </div>
        <div className="email border-b-[1px] border-[#ddd] p-2">
            <div className="icon">

            </div>
            <div className="text">
                <h3 className="font-bold">Our Email</h3>
                <p className="p-2 text-[#21cc7a]">
                    <a href="mailto:info@uluguttermal.com">
                        info@uluguttermal.com</a>
                </p>
            </div>

        </div>

        <div className="socials flex flex-row gap-10 pt-3 justify-center">
            <div className="instagram cursor-pointer">
                <a href="https://www.instagram.com/ulugut_termal/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} style={{color: "#21cc7a",}} size="2xl"/></a>
            </div>
            <div className="facebook cursor-pointer">
                <a href="https://www.facebook.com/uluguttermal/" target="_blank">
                    <FontAwesomeIcon icon={faSquareFacebook} style={{color: "#21cc7a",}} size="2xl"/></a>
            </div>
        </div>
    </div>
    )
}

export default Details;