import './BouncingLoader.css'
import { useStyles } from '../styles'
import { jamb, waec, neco } from '../../assests'
const BouncingLoader = () => {
const classes = useStyles();
return(
            <div className="bouncing-balls">
                <div className={classes.loader}><img style={{ width: "100%", height: "100%", borderRadius: "50%", marginLeft: "100px"  }} src={jamb} alt="jamb"/></div>
                <div className={classes.loader}><img style={{ width: "100%", height: "100%", borderRadius: "50%", marginLeft: "100px" }} src={waec} alt="waec"/></div>
                <div className={classes.loader}><img style={{ width: "100%", height: "100%", borderRadius: "50%", marginLeft: "100px" }} src={neco} alt="neco"/></div>
            </div>
)
}
export default BouncingLoader