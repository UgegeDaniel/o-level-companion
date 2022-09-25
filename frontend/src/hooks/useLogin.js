import { useState } from "react";
import {useAuthContext} from './useAuthContext'
export const useLogin = () => {
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const {dispatch} = useAuthContext()
    const login = async ({email, password}) => {
        const response = await fetch ('http://localhost:5000/student/login', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({email, password})
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
    return {login, isLoading, error}
}
