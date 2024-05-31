import Cards from "./Card.jsx";
import './Features.css'

const Features = () => {

    return (
        <div className="pt-10 flex flex-col justify-center items-center pb-20">
            <h3 className="pb-4 text-xl text-[#21CC7A] font-bold">WELCOME TO ULUGUT HOTEL</h3>
            <h2 className="pb-20 text-4xl font-bold">You&apos;ll Never Want To Leave</h2>
            <div>
                <Cards></Cards>
            </div>



        </div>
    )
}

export default Features