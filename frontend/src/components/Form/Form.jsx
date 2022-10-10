import { useState } from 'react'
import { useSignup } from '../../hooks/useSignUp'
import { useLogin } from '../../hooks/useLogin'
import { useNavigate } from 'react-router-dom'
import { Typography, Button, Paper, IconButton, InputAdornment } from '@material-ui/core'
import { useStyles } from '../styles'
import { Visibility } from '@material-ui/icons'
import { FaEnvelope, FaKey, FaLock, FaUser } from 'react-icons/fa'
import GoogleButton from './GoogleButton'
import InputFields from './InputFields'
import {handleFormSubmit} from '../../utils'

const Form = ({ login, setNotification }) => {
    const [credentials, setCredentials] = useState({ userName: '', email: '', password: '', confirmPassword: '' })
    const [showPassword, setShowPassword] = useState(false)
    const { userName, email, password, confirmPassword } = credentials
    const classes = useStyles();

    const [isLogin, setIsLogin] = useState(login)

    const { signup, error } = useSignup()
    const { login: log, error: err } = useLogin()

    const values = {userName, err, error, email,isLogin, password,}
    const functions = { log, setNotification,  signup, }
    const handleSubmit = (e) => handleFormSubmit( e, values, functions)

    //INPUT PROPS
    const emailIputProps = { startAdornment: (<InputAdornment position="start"><FaEnvelope /></InputAdornment>), }
    const userInputProps = { startAdornment: (<InputAdornment position="start"><FaUser /></InputAdornment>), }
    const passwordInputProps = {
        endAdornment: (<InputAdornment onClick={() => setShowPassword(!showPassword)}  position="end"><IconButton>{<Visibility />}</IconButton></InputAdornment>),
        startAdornment: (<InputAdornment position="start"><FaLock /></InputAdornment>),
    }
    const inputType = showPassword ? 'text' : 'password'
    const inputFieldsProps = { isLogin, userName, setCredentials, credentials, userInputProps, emailIputProps, inputType, passwordInputProps, email, password, confirmPassword }
    return (
        <form autoComplete="off" noValidate gutterbottom="true" display="flex" align="center" onSubmit={handleSubmit}>
            {/* <motion.div initial={{ x: '-10vw' }} animate={{ x: 0 }} > */}
            <Paper className={classes.form}>
                {/*Title */}
                <Typography variant="h6" component="h2" gutterBottom color="textPrimary"> {isLogin ? 'Log In' : 'Sign Up'} </Typography>
                <div className={classes.underline}></div>

                {/*Input Fields */}
                <InputFields inputFieldsProps={inputFieldsProps} />

                {/*Google Button*/}
                <GoogleButton />
                <div className={classes.my} >
                    <Button className={classes.btn} startIcon={<FaKey />} variant='contained' color="secondary" size="small" type="submit" >{!isLogin ? 'Sign up' : 'Login'}</Button>
                </div>

                {/*Form Footer */}
                {isLogin && <div>
                    <Typography>Don't have an account ? </Typography>
                    <Button color="primary" size="small" onClick={() => setIsLogin(!isLogin)}>Sign up</Button>
                </div>}
                {!isLogin && <div>
                    <Typography>Already have an account ? </Typography>
                    <Button color="primary" size="small" onClick={() => setIsLogin(!isLogin)}>Login </Button>
                </div>}
            </Paper>
            {/* </motion.div> */}
        </form>
    )
}
export default Form