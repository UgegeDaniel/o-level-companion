import { FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useSignup } from '../hooks/useSignUp'
import {useLogin} from '../hooks/useLogin'
import Toast from './Toast'

const Form = ({ login }) => {
    const [credentials, setCredentials] = useState({ userName: '', email: '', password: '', confirmPassword: '' })
    const { userName, email, password, confirmPassword } = credentials
    const [toast, setToast] = useState({ show: false, style: "", msg: '' })
    const [showPassword, setShowPassword] = useState(false)

    const { signup, error } = useSignup()
    const { login : log , error : err } = useLogin()


    const handleSubmit = async (e) => {
        e.preventDefault();
        if(login){
            await log({email, password})
        }
        if (error || err) {
            setToast({ show: true, style: "danger", msg: error || err})
            return
        }
        !login && await signup({email, password, userName})
        console.log(error)
        !login && setToast({ show: true, style: "success", msg: 'Congratualations Sign up success !!!' })
        login && setToast({ show: true, style: "success", msg: 'Congratualations Login success !!!' })
    }

    return (
        <form className="box-shadow" onSubmit={(e) => handleSubmit(e)}>
            <h3>{login ? 'Login' : 'Sign Up'}</h3>
            <div className="underline"></div>
            <div className='form-control'>
                {!login && (
                    <div>
                        <label className="input-label">Username :</label>
                        <input type='text'
                            className='form-input'
                            placeholder='please enter a preferred username'
                            value={userName}
                            onChange={(e) => setCredentials({ ...credentials, userName: e.target.value })} />
                    </div>
                )
                }

                <label className="input-label">Email :</label>
                <input type='email'
                    className='form-input'
                    placeholder='please enter a valid email'
                    value={email}
                    onChange={(e) => setCredentials({ ...credentials, email: e.target.value })} />

                <label className="input-label">Password :</label>
                <div className="flex-row">
                    <input type={!showPassword ? 'password' : 'text'}
                        className='form-input'
                        placeholder='please enter a strong password'
                        value={password}
                        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
                    <FaEye onClick={() => setShowPassword(true)} />
                </div>
                {!login &&
                    (
                        <div>
                            <label className="input-label">Confirm Password :</label>
                            <div className="flex-row">
                                <input type={!showPassword ? 'password' : 'text'}
                                    className='form-input'
                                    placeholder='repeat your password'
                                    value={confirmPassword}
                                    onChange={(e) => setCredentials({ ...credentials, confirmPassword: e.target.value })} />
                                <FaEye onClick={() => setShowPassword(true)} />
                            </div>
                        </div>
                    )
                }
            </div>
            <button type='submit' className='btn btn-fill submit-btn'>{login ? 'Login' : 'Sign Up'}</button>
            {login && <p>Don't have an account ? <button type='submit' className='btn btn-fill submit-btn'><Link to="/signup">Sign up</Link></button></p>}
            {!login && <p>Already have an account ? <button type='submit' className='btn btn-fill submit-btn'><Link to="/login">Login</Link></button></p>}
            <Toast toast={toast} setToast={setToast} />
        </form>
    )
}
export default Form