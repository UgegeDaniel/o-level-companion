import { Container } from '@material-ui/core'
import InputField from './InputField'

const InputFields = ({inputFieldsProps}) => {
    const {isLogin, userName, setCredentials, credentials, userInputProps, emailIputProps, inputType, passwordInputProps, email, password, confirmPassword}= inputFieldsProps
    return (
        <div>
            <Container>
                <InputField show={!isLogin} name="userName" value={userName} setCredentials={setCredentials} credentials={credentials} label="User Name" InputProps={userInputProps} type="text" />
                <InputField autoFocus={true} name="email" show={!isLogin || isLogin} value={email} setCredentials={setCredentials} credentials={credentials} label="Email" InputProps={emailIputProps} type="email" />
                <InputField show={!isLogin || isLogin} name="password"  value={password} setCredentials={setCredentials} credentials={credentials} label="Password" InputProps={passwordInputProps} type={inputType} />
                <InputField show={!isLogin} value={confirmPassword} name="confirmPassword" setCredentials={setCredentials} credentials={credentials} label="Confirm Password" InputProps={passwordInputProps} type={inputType} />
            </Container>
        </div>
    )
}

export default InputFields