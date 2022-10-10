import { AppBar, Toolbar, Avatar, Button, Chip } from '@material-ui/core'
import { FaUser, FaDoorOpen } from 'react-icons/fa'
import { useStyles } from '../styles'
import { orange, purple } from '@material-ui/core/colors'
import { jamb, waec, neco } from '../../assests'
import { Link } from 'react-router-dom'
const AppHeader = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar color="primary">
                <Toolbar className={classes.header}>
                    <Link to="/">
                        <div className={classes.logoContainer}>
                            <Avatar style={{ backgroundColor: orange[500] }}>J</Avatar>
                            <Avatar style={{ backgroundColor: purple[500] }}>A</Avatar>
                            <Avatar style={{ backgroundColor: orange[500] }}>K</Avatar>
                            <Avatar style={{ backgroundColor: purple[500] }}>K</Avatar>
                        </div>
                    </Link>
                    <Chip style={{ backgroundColor: purple[500], color: "#fff" }} avatar={<Avatar>{<FaUser />}</Avatar>} label="Logged In User" color="primary" />
                    <div className={`${classes.logoContainer} ${classes.examBodies}`}>
                        <div className={classes.logo}><img style={{ width: "100%", height: "100%", borderRadius: "50%" }} src={jamb} alt="jamb" /></div>
                        <div className={classes.logo}><img style={{ width: "100%", height: "100%", borderRadius: "50%" }} src={waec} alt="waec" /></div>
                        <div className={classes.logo}><img style={{ width: "100%", height: "100%", borderRadius: "50%" }} src={neco} alt="neco" /></div>
                        <Button className={classes.btn} startIcon={<FaDoorOpen />} variant='contained' color="secondary" size="small" type="submit">Log out</Button>
                    </div>
                </Toolbar>

            </AppBar>
            <div className={classes.toolbar}></div>
        </div>
    )
}
export default AppHeader