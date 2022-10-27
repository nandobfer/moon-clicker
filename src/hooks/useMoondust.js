export const useMoondust = () => {
    const addBonus = (value, bonus) => value * bonus / 100
    const multiplyRate = (value, rate) => value * (rate||1)
    
    const onClick = (stats) => {
        let moondust_per_click = stats.values.moondust_per_click

        moondust_per_click = addBonus(moondust_per_click, stats.values.moondust_per_click_bonus)
        moondust_per_click = multiplyRate(moondust_per_click, stats.values.moondust_per_click_multiplier)
        moondust_per_click = moondust_per_click * stats.values.moondust_rate 

        return moondust_per_click
    }

    const perSecond = (stats) => {
        let moondust_per_second = stats.values.moondust_per_second

        moondust_per_second = addBonus(moondust_per_second, stats.values.moondust_per_second_bonus)
        moondust_per_second = multiplyRate(moondust_per_second, stats.values.moondust_per_second_multiplier)
        moondust_per_second = moondust_per_second * stats.values.moondust_rate 

        return moondust_per_second
    }

    return {onClick, perSecond}
}