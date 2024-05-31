import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell,faUtensils,faBed,faBath,faPersonSwimming } from '@fortawesome/free-solid-svg-icons'


function Card() {
    return(
        <div className="cards">
            <div className="card">
                <div className="iconContainer pl-6 pl-6">
                <FontAwesomeIcon icon={faBell} size="2xl"/></div>
                <div className="cardText">Friendly Service</div>
            </div>
            <div className="card">
                <div className="iconContainer pl-6 pr-6">
                    <FontAwesomeIcon icon={faUtensils} size="2xl"/></div>
                <div className="cardText">Get Breakfast</div>
            </div>
            <div className="card">
                <div className="iconContainer pt-5 pb-5 pl-4 pr-4">
                    <FontAwesomeIcon  icon={faBed} size="2xl"/></div>
                <div className="cardText">Cozy Rooms</div>
            </div>
            <div className="card">
                <div className="iconContainer">
                    <FontAwesomeIcon icon={faBath} size="2xl"/></div>
                <div className="cardText">Suits & SPA</div>
            </div>
            <div className="card">
                <div className="iconContainer">
                    <FontAwesomeIcon  icon={faPersonSwimming} size="2xl"/></div>
                <div className="cardText">Swimming Pool</div>
            </div>

        </div>
    )
}

export default Card;