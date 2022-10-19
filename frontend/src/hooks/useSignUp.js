import { useState } from "react";
import {useAuthContext} from './useAuthContext'
export const useSignup = () => {
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const {dispatch} = useAuthContext()
    const signup = async ({email, password, userName}) => {
        const response = await fetch ('https://jakk-backend.herokuapp.com/student/signup', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({email, password, userName})
        })
        const data = await response.json()
        if(!response.ok){
            setIsLoading(false)
            setError(data.error)
        }
        if(response.ok){
            setIsLoading(false)
            localStorage.setItem('student', JSON.stringify(data))
            dispatch({type: 'LOGIN', payload: data})
        }
    }
    return {signup, isLoading, error}
}
