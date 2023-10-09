import React, {  useState } from 'react'
import { createContext } from 'react'

export const authContext = createContext(null)
function AuthContext({children}) {
    const [user, setUser] = useState({ login:null})
    const [refresh, setRefresh] = useState(false)
    const [search, setSearch]=useState("")
    const [category, setCategory]=useState(" ")

    return (
        <div>
               <authContext.Provider value={{user, refresh, setUser, setRefresh, search, setSearch, category, setCategory}}>
                {children}
            </authContext.Provider>
        </div>
    )
}

export default AuthContext