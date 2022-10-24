import { Text, View } from 'react-native';
import { styles } from './style';

export const StatusBar = ({stats}) => {

    const nFormatter = (num, digits) => {
        const lookup = [
          { value: 1, symbol: "" },
          { value: 1e3, symbol: "k" },
          { value: 1e6, symbol: "M" },
          { value: 1e9, symbol: "G" },
          { value: 1e12, symbol: "T" },
          { value: 1e15, symbol: "P" },
          { value: 1e18, symbol: "E" }
        ];
        const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        var item = lookup.slice().reverse().find(function(item) {
          return num >= item.value;
        });
        return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
      }
    
    return (
        <View style={styles.top_container}>
            <View style={styles.stats_container}>
                <Text style={styles.text}>Por clique</Text>
                <Text style={styles.text}>{nFormatter(stats.values.moondust_per_click * stats.values.moondust_per_click_bonus / 100, 2)} / c</Text>
            </View>
            <View style={styles.moondust_container}>
                <Text style={styles.moondust_text}>{nFormatter(stats.values.moondust, 2)}</Text>
            </View>
            <View style={styles.stats_container}>
                <Text style={styles.text}>Por segundo</Text>
                <Text style={styles.text}>{nFormatter(stats.values.moondust_per_second * stats.values.moondust_per_second_bonus / 100, 2)} / s</Text>
            </View>
        </View>
    )
}