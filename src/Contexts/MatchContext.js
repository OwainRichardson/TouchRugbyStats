import React, { createContext, useState } from 'react'

export const MatchContext = createContext()

const MatchContextProvider = (props) => {
//     const [homeScore, setHomeScore] = useState('six');
    
    return (
         <MatchContext.Provider 
            value={{
                homeScore: 'six'
             }}>
               {props.children}
         </MatchContext.Provider>
    )
}
export default MatchContextProvider