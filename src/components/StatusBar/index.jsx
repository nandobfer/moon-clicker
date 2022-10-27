import { Text, View } from 'react-native';
import { useMoondust } from '../../hooks/useMoondust';
import { useNumberFormatter } from '../../hooks/useNumberFormatter';
import { styles } from './style';

export const StatusBar = ({stats}) => {
    const moondust = useMoondust()

    return (
        <View style={styles.main_container}>
            <View style={styles.top_container}>
                <View style={styles.stats_container}>
                    <Text style={styles.text}>Por clique</Text>
                    <Text style={styles.text}>{useNumberFormatter(moondust.onClick(stats), 2)} / c</Text>
                </View>
                <View style={styles.moondust_container}>
                    <Text style={styles.moondust_text}>{useNumberFormatter(stats.values.moondust, 2)}</Text>
                </View>
                <View style={styles.stats_container}>
                    <Text style={styles.text}>Por segundo</Text>
                    <Text style={styles.text}>{useNumberFormatter(moondust.perSecond(stats), 2)} / s</Text>
                </View>
            </View>
            <Text>{stats.values.level}</Text>
        </View>
    )
}