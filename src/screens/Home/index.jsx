import { useCallback, useEffect, useMemo, useState } from 'react';
import { Text, Touchable, TouchableOpacity, city, View } from 'react-native';
import { useStats } from '../../hooks/useStats';
import { useStorage } from '../../hooks/useStorage';
import { styles } from './style';

export const Home = ({ navigation }) => {
    
    let reset = false;
    let open = false;
    const [loading, setLoading] = useState(true);
    const stats = useStats();

    const moondust = stats.values.moondust;
    const moondust_per_click = stats.values.moondust_per_click;
    const moondust_per_second = stats.values.moondust_per_second;
    const localStorage = useStorage();

    const moonClick = (event=null, passive=false) => {
        const new_stats = {...stats.values, moondust: moondust + moondust_per_click};
        stats.setValues(new_stats);
        localStorage.setData(new_stats);


        
        if (passive) {
            console.log(passive)
        }
    }
    
    useEffect(() => {
        console.log(stats);
    }, [stats])

    useEffect(() => {
        localStorage.getData()
        .then(data => {
            if (data) {
                stats.setValues({...stats.values, ...data});
                console.log(data);
            }

            // setInterval(() => moonClick(passive=true), 1000);
        })

        if (reset) {
            localStorage.setData({...stats.values, moondust: 0});
            stats.setValues({...stats.values, moondust: 0});
        }
    }, [open])

    return (
        <View style={styles.background}>
            {/* top bar container */}
            <View style={styles.top_container}>
                <View style={styles.moondust_container}>
                    <Text style={styles.moondust_text}>{moondust}</Text>
                </View>
                <Text style={styles.text}>{moondust_per_click}/c</Text>
                <Text style={styles.text}>{moondust_per_second}/s</Text>
            </View>
            {/* moon container */}
            <View style={styles.moon_container}>
                <TouchableOpacity onPress={moonClick}>
                    <View style={styles.moon}></View>
                </TouchableOpacity>
            </View>
        </View>
    )
}