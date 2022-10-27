export const useUpgrades = (stats) => {
    const buildPrice = (base, rate, id) => {
        const price = Math.round(base * Math.pow(stats.values.upgrades[id]?.quantidade ? stats.values.upgrades[id].quantidade : 1, rate));
        return price
    }

    const upgrades = []
    let id = 0

    const newUpgrade = (nome="Nome", valor=10, taxa=1, descricao="Descrição", mod='moondust_per_click', mod_value=1) => {
        upgrades.push({
            id: id,
            nome: nome,
            valor: buildPrice(valor, taxa, id),
            descricao: descricao,
            mod: {
                type: mod,
                value: mod_value
            },
        })
        id++
    }

    // to do: atualizar valor da modificação após os bonus 

    newUpgrade(nome="Picareta", valor=10, taxa=1.2, descricao="MD por clique: +1", mod="moondust_per_click",mod_value=1)
    newUpgrade(nome="Rover", valor=50, taxa=1.05, descricao="MD por segundo: +1", mod="moondust_per_second",mod_value=1)
    newUpgrade(nome="Estação de energia", valor=10000, taxa=2, descricao="MD por segundo: x2", mod="moondust_per_second_multiplier",mod_value=2)
    newUpgrade(nome="Motivação", valor=5000, taxa=2, descricao="MD por clique: x2", mod="moondust_per_click_multiplier",mod_value=2)
    newUpgrade(nome="Furadeira", valor=1000, taxa=1.5, descricao="MD por clique: +10", mod="moondust_per_click",mod_value=10)
    newUpgrade(nome="Drone", valor=2000, taxa=1.1, descricao="MD por segundo: +10", mod="moondust_per_second",mod_value=10)
    newUpgrade(nome="Cachorrobô", valor=100000, taxa=1.3, descricao="MD por segundo: +100", mod="moondust_per_second",mod_value=100)
    newUpgrade(nome="Retro Escavadeira", valor=30000, taxa=1.7, descricao="MD por clique: +100", mod="moondust_per_click",mod_value=100)
    
    return upgrades
}