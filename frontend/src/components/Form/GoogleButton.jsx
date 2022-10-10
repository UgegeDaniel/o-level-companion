import { GoogleLogin } from 'react-google-login';
import { useStyles } from '../styles'
import { Button } from '@material-ui/core'
import { FaGoogle } from 'react-icons/fa'

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID

const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
        // console.log({result, token});
    } catch (error) {
        console.log(error);
    }
};
const googleError = (error) => console.log('Google Sign In was unsuccessful. Try again later', error);

const GoogleButton = () => {
    const classes = useStyles();
    return (
        <div>
            <GoogleLogin 
                clientId={GOOGLE_CLIENT_ID}
                render={(renderProps) => (
                    <Button className={classes.btn} 
                    color="primary" size="small" 
                    onClick={renderProps.onClick} 
                    disabled={renderProps.disabled} 
                    startIcon={<FaGoogle />} variant="contained">
                        Google Sign In
                    </Button>
                )}
                onSuccess={googleSuccess}
                onFailure={googleError}
                cookiePolicy="single_host_origin"
            />
        </div>
    )
}

export default GoogleButton