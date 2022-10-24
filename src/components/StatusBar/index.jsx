import { Text, View } from 'react-native';
import { useNumberFormatter } from '../../hooks/useNumberFormatter';
import { styles } from './style';

export const StatusBar = ({stats}) => {

    return (
        <View style={styles.top_container}>
            <View style={styles.stats_container}>
                <Text style={styles.text}>Por clique</Text>
                <Text style={styles.text}>{useNumberFormatter(stats.values.moondust_per_click * stats.values.moondust_per_click_bonus / 100, 2)} / c</Text>
            </View>
            <View style={styles.moondust_container}>
                <Text style={styles.moondust_text}>{useNumberFormatter(stats.values.moondust, 2)}</Text>
            </View>
            <View style={styles.stats_container}>
                <Text style={styles.text}>Por segundo</Text>
                <Text style={styles.text}>{useNumberFormatter(stats.values.moondust_per_second * stats.values.moondust_per_second_bonus / 100, 2)} / s</Text>
            </View>
        </View>
    )
}