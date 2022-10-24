import { createContext, useState } from "react";
import { config } from "../../config";

const StatsContext = createContext({});
const initial_stats = config.stats;

export default StatsContext;


export const StatsProvider = ({children}) => {
    const [values, setValues] = useState(initial_stats)

    return (
        <StatsContext.Provider value={{values, setValues}}>
            {children}
        </StatsContext.Provider>
    )
}