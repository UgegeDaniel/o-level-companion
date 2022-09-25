import {useEffect} from 'react'

const Toast = ({toast, setToast}) => {
    const {show, style, msg} = toast
    useEffect(()=> {
        const cleanUp = setTimeout(()=>{
            setToast({...toast, show: false})
        }, 3000)
        return () => clearTimeout(cleanUp)
    })
    return (
        <div>
            {show && <p className={`alert alert-${style}`}>{msg}</p>}
        </div>
    )
}
export default Toast