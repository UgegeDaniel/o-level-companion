import { useState } from "react";
import {useAuthContext} from './useAuthContext'
export const useSignup = () => {
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const {dispatch} = useAuthContext()
    const signup = async (credentials) => {
        const response = await fetch ('http://localhost:5000/user/signup', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({...credentials})
        })
        const data = await response.json()
        if(!response.ok){
            setIsLoading(false)
            setError(data.error)
        }
        if(response.ok){
            setIsLoading(false)
            localStorage.setItem('user', JSON.stringify(data))
            dispatch({type: 'LOGIN', payload: data})
        }
    }
    return {signup, isLoading, error}
}
