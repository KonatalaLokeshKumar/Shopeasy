import react, { createContext,useState } from "react";


export const AuthContext= createContext();

export const AuthProvider =({children})=>
{
    const [user,setUser]=useState(JSON.parse(localStorage.getItem("user")) || null);
    const login =(data)  =>{
        localStorage.setItem("user",JSON.stringify(data));
        setUser(data)
    };
    const logout=()=>{
        localStorage.removeItem("user");
        setUser(null);
    };
    return(
       <AuthProvider.Provider value={{user,login,logout}}>
        {children}
       </AuthProvider.Provider>
    )
    
}