import { Text, View } from 'react-native';
import { styles } from './style';

export const StatusBar = ({stats}) => {
    
    return (
        <View style={styles.top_container}>
            <View style={styles.stats_container}>
                <Text style={styles.text}>Por clique</Text>
                <Text style={styles.text}>{stats.values.moondust_per_click} / c</Text>
            </View>
            <View style={styles.moondust_container}>
                <Text style={styles.moondust_text}>{stats.values.moondust}</Text>
            </View>
            <View style={styles.stats_container}>
                <Text style={styles.text}>Por segundo</Text>
                <Text style={styles.text}>{stats.values.moondust_per_second} / s</Text>
            </View>
        </View>
    )
}