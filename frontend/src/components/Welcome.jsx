import waec from '../assests/img/waec.png'
import neco from '../assests/img/neco.jpg'
import jamb from '../assests/img/jamb.png'

const Welcome = () => {
    return(
        <div className="profile-card-content flex-row">
            <div className="img-container"><img src ={waec} alt='waec'/></div>
            <div className="img-container"><img src ={neco} alt='neco'/></div>
            <div className="img-container"><img src ={jamb} alt='jamb'/></div>
        </div>
    )
}
export default Welcome