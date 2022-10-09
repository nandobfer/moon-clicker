import { createContext, useState } from "react";

const StatsContext = createContext({});

export default StatsContext;


export const StatsProvider = ({children}) => {
    const [values, setValues] = useState({
        moondust: 0,
        moondust_per_click: 1,
        moondust_per_second: 0.1,
    })

    return (
        <StatsContext.Provider value={{values, setValues}}>
            {children}
        </StatsContext.Provider>
    )
}