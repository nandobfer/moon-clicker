import { Text, TouchableOpacity, View } from 'react-native';
import { useStats } from '../../hooks/useStats';
import { useStorage } from '../../hooks/useStorage';
import { styles } from './style';
import { COLORS } from '../../colors';
import { StatusBar } from '../../components/StatusBar';

const upgrades = [
    {
        nome: "Picareta",
        valor: 10,
        descricao: 'MD por clique: +1',
        mod: {
            type: 'moondust_per_click',
            value: 1,
        }
    }
]

export const Satelite = ({navigation}) => {
    const stats = useStats();
    const localStorage = useStorage();
    const moondust = stats.values.moondust;
    const moondust_per_click = stats.values.moondust_per_click;
    const moondust_per_second = stats.values.moondust_per_second;

    const onBuy = (upgrade) => {
        const new_stats = {
            ...stats.values,
            moondust: moondust - upgrade.valor,
        };
        new_stats[upgrade.mod.type] = stats.values[upgrade.mod.type] + upgrade.mod.value;

        stats.setValues(new_stats);
        localStorage.setData(new_stats);
    }
    
    return (
        <View style={styles.background}>
            <View style={styles.stats_container}>
                <StatusBar stats={stats} />
            </View>
            <View>
                {upgrades.map((item => {
                    return (
                        <View key={item.nome} style={styles.upgrade_wrapper}>
                            <View style={styles.upgrade_container}>
                                <Text style={[styles.title_text, styles.text]}>{item.nome}</Text>
                                <Text style={styles.text}>{item.descricao}</Text>
                            </View>
                            <View style={[styles.cost_container, {backgroundColor: moondust >= item.valor ? COLORS.correct : COLORS.insuficiente}]}>
                                <Text style={styles.cost_text}>{item.valor}</Text>
                            </View>
                            <TouchableOpacity disabled={moondust < item.valor} style={[styles.upgrade_buy_container, {opacity: moondust < item.valor ? 0.3 : 1}]} onPress={() => onBuy(item)}>
                                <Text style={styles.buy_text}>Comprar</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }))}
            </View>
        </View>
    )
}