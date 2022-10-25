import { Text, TouchableOpacity, View } from 'react-native';
import { useStats } from '../../hooks/useStats';
import { useStorage } from '../../hooks/useStorage';
import { styles } from './style';
import { COLORS } from '../../colors';
import { StatusBar } from '../../components/StatusBar';
import { config } from '../../config';
import { useNumberFormatter } from '../../hooks/useNumberFormatter';
import { useUpgrades } from '../../hooks/useUpgrades';


export const Satelite = ({navigation}) => {
    const stats = useStats();
    const localStorage = useStorage();
    const moondust = stats.values.moondust;
    const moondust_per_click = stats.values.moondust_per_click;
    const moondust_per_second = stats.values.moondust_per_second;

    const upgrades = useUpgrades(stats);

    const onBuy = (upgrade) => {
        const new_stats = {
            ...stats.values,
            moondust: moondust - upgrade.valor,
        };
        new_stats[upgrade.mod.type] = stats.values[upgrade.mod.type] + upgrade.mod.value;

        if (!new_stats.upgrades[upgrade.id]) {
            new_stats.upgrades = {
                ...new_stats.upgrades,
                [upgrade.id]: {
                    quantidade: 1,
                }
            }
        } 
        new_stats.upgrades[upgrade.id].quantidade++;

        stats.setValues(new_stats);
        localStorage.setData(new_stats);
    }

    const resetStatus = () => {
        const initial_stats = config.stats;
        console.log(initial_stats);
        localStorage.setData(initial_stats);
        stats.setValues(initial_stats);
        console.log(stats.values)
    }
    
    return (
        <View style={styles.background}>
            <View style={styles.stats_container}>
                <StatusBar stats={stats} />
            </View>
            <View style={styles.main_container}>
                {upgrades
                .sort((a,b) => a.valor - b.valor)
                .map((item => {
                    return (
                        <View key={item.nome} style={styles.upgrade_wrapper}>
                            <View style={styles.upgrade_container}>
                                <Text style={[styles.title_text, styles.text]}>{item.nome} {stats.values.upgrades[item.id]?.quantidade > 1 ? `+${stats.values.upgrades[item.id].quantidade-1}` : null}</Text>
                                <Text style={styles.text}>{item.descricao}</Text>
                            </View>
                            <View style={[styles.cost_container, {backgroundColor: moondust >= item.valor ? COLORS.correct : COLORS.insuficiente}]}>
                                <Text style={styles.cost_text}>{useNumberFormatter(item.valor, 2)}</Text>
                            </View>
                            <TouchableOpacity disabled={moondust < item.valor} style={[styles.upgrade_buy_container, {opacity: moondust < item.valor ? 0.3 : 1}]} onPress={() => onBuy(item)}>
                                <Text style={styles.buy_text}>{stats.values.upgrades[item.id] ? 'Aprimorar' : 'Comprar'}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }))}
            </View>
            <TouchableOpacity style={styles.reset_button} onPress={resetStatus}>
                <Text>Reset</Text>
            </TouchableOpacity>
        </View>
    )
}