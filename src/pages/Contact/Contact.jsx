import Navbar from "../../Components/Header/Navbar/Navbar.jsx";
import Details from "../../Components/Contact-Details/Details.jsx"
import Form from "../../Components/Contact-Form/Form";
import Footer from "../../Components/Footer/Footer.jsx";
function Contact(){

    return(
        <>
            <div id="header " className="aboutHeader" style={{
                height: "50vh",
                backgroundImage: "url('images/23.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
            }}>
                <Navbar></Navbar>
            </div>

            <main
                className="flex flex-col items-center justify-center pt-10 pb-20 text-center bg-[#fafafa] w-screen">
                <div className="titles">
                    <h2 className="text-xl font-bold text-[#21cc7a] pb-4">OUR CONTACT DETAILS</h2>
                    <h1 className="text-4xl font-bold pb-14">Contact Us</h1>
                </div>

                <div className="container flex flex-row gap-8 max-w-[1110px] justify-center">

                    <Form></Form>
                    <Details/>

                </div>

                <div className="map mt-20 w-[1200px]">
                    <iframe
                        className="w-full h-[500px]"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.7155526250895!2d29.1015892757643!3d37.96042717193927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c70d88757c0e99%3A0xb9be6fdf8ea78f18!2sUlugut%20Termal!5e0!3m2!1str!2str!4v1713966367309!5m2!1str!2str"
                        allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </main>
            <Footer/>
        </>
    )
}

export default Contact;