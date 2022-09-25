import { FaEye } from 'react-icons/fa'
const Form = () => {
    return (
        <form className="box-shadow">
            <h3>Sign up</h3>
            <div className="underline"></div>
            <div className='form-control'>
                <label className="input-label">Username :</label>
                <input type='text' className='form-input' placeholder='please enter a preferred username' />

                <label className="input-label">Email :</label>
                <input type='email' className='form-input' placeholder='please enter a valid email' />

                <label className="input-label">Password :</label>
                <div className="flex-row">
                    <input type='password' className='form-input' placeholder='please enter a strong password' />
                    <FaEye />
                </div>
                <label className="input-label">Confirm Password :</label>

                <div className="flex-row">
                    <input type='password' className='form-input' placeholder='repeat your password' />
                    <FaEye />
                </div>

            </div>
            <button type='submit' className='btn btn-fill submit-btn'>submit</button>
        </form>
    )
}
export default Form