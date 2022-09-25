import { AuthContext } from "../context/authContext";
import { useContext } from "react";
export const useAuthContext = () => {
    const context = useContext(AuthContext)
    if(!context){
      throw new Error("AuthContext must be used in AuthContextProvider")
    }
    return context
}