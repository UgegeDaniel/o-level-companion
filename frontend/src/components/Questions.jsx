import { useLogOut } from '../hooks/useLogOut'
const Questions = () => {
    const logout = useLogOut()
    const handleClick = () => {
        logout()
    }
    return (
        <div className='container'>Getting Your Questions <button className="btn btn-stroke" onClick={handleClick}> Log out</button></div>
    )
}
export default Questions