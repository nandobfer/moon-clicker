export const useExperience = (stats) => {
    const exp = stats.values.exp
    const formula = exp / (10 * Math.pow(stats.values.level, 2))
    const level = Math.floor(formula) + 1

    console.log({
        level: stats.values.level,
        exp: exp,
        formula: formula+1
    })

    return level
}