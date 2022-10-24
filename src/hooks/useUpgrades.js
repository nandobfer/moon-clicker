import { config } from "../config";

export const useUpgrades = (stats) => {
    return [
        {
            id: 0,
            nome: "Picareta",
            valor: Math.round(config.prices[0].base * Math.pow(stats.values.upgrades[0]?.quantidade ? stats.values.upgrades[0].quantidade : 1, config.prices[0].rate)),
            descricao: 'MD por clique: +1',
            mod: {
                type: 'moondust_per_click',
                value: 1,
            }
        },
        {
            id: 1,
            nome: "Drone",
            valor: Math.round(config.prices[1].base * Math.pow(stats.values.upgrades[1]?.quantidade ? stats.values.upgrades[1].quantidade : 1, config.prices[1].rate)),
            descricao: 'MD por segundo: +1',
            mod: {
                type: 'moondust_per_second',
                value: 1,
            }
        },
        {
            id: 2,
            nome: "Estação de energia",
            valor: Math.round(config.prices[2].base * Math.pow(stats.values.upgrades[2]?.quantidade ? stats.values.upgrades[2].quantidade : 1, config.prices[2].rate)),
            descricao: 'MD por segundo: x2',
            mod: {
                type: 'moondust_per_second_bonus',
                value: 100,
            }
        },
        {
            id: 3,
            nome: "Braços cibernéticos",
            valor: Math.round(config.prices[3].base * Math.pow(stats.values.upgrades[3]?.quantidade ? stats.values.upgrades[3].quantidade : 1, config.prices[2].rate)),
            descricao: 'MD por clique: x2',
            mod: {
                type: 'moondust_per_click_bonus',
                value: 100,
            }
        },
    ]
}