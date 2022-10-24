export const useUpgrades = (stats) => {
    const buildPrice = (base, rate, id) => {
        const price = Math.round(base * Math.pow(stats.values.upgrades[id]?.quantidade ? stats.values.upgrades[id].quantidade : 1, rate));
        return price
    }

    return [
        {
            id: 0,
            nome: "Picareta",
            valor: buildPrice(10, 1.2, 0),
            descricao: 'MD por clique: +1',
            mod: {
                type: 'moondust_per_click',
                value: 1,
            }
        },
        {
            id: 1,
            nome: "Drone",
            valor: buildPrice(50, 0.6, 1),
            descricao: 'MD por segundo: +1',
            mod: {
                type: 'moondust_per_second',
                value: 1,
            }
        },
        {
            id: 2,
            nome: "Estação de energia",
            valor: buildPrice(10000, 0.6, 2),
            descricao: 'MD por segundo: x2',
            mod: {
                type: 'moondust_per_second_bonus',
                value: 100,
            }
        },
        {
            id: 3,
            nome: "Braços cibernéticos",
            valor: buildPrice(5000, 2, 3),
            descricao: 'MD por clique: x2',
            mod: {
                type: 'moondust_per_click_bonus',
                value: 100,
            }
        },
    ]
}