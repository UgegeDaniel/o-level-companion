import { useLogOut } from '../hooks/useLogOut'
import { useAuthContext } from '../hooks/useAuthContext'

const fetchQuestions = async () => {
    const options = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'AccessToken': ' ALOC-0085a90857e9a3958692'
        },
        method: "GET",
    };
//https://questions.aloc.ng/api/q?subject=chemistry
//https://questions.aloc.ng/api/q?subject=chemistry&year=2005
    const response = await fetch(`https://questions.aloc.com.ng/api/v2/q/40?subject=chemistry`, options)
    const {data} = await response.json()
    console.log(data)
}
const Questions = () => {
    const logout = useLogOut()
    const { student } = useAuthContext()

    const handleClick = () => {
        logout()
    }
    return (
        <div className='container'>
            <button className="btn btn-stroke" onClick={handleClick}>{student.userName}</button>
            <button className="btn btn-stroke" onClick={handleClick}> Log out</button>
            <button className="btn btn-stroke" onClick={fetchQuestions}> Test Api</button>
            Getting Your Questions
        </div>
    )
}
export default Questions