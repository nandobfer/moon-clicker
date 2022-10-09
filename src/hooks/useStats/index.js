import { useContext } from "react"
import StatsContext from "../../contexts/StatsContext"

export const useStats = () => {
    const statsContext = useContext(StatsContext);

    if (!statsContext?.values) {
        console.error('cu');
    }

    return statsContext;
}