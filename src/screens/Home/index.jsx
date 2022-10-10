import { useCallback, useEffect, useMemo, useState } from 'react';
import { Text, Touchable, TouchableOpacity, city, View } from 'react-native';
import { StatusBar } from '../../components/StatusBar';
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
            <StatusBar stats={stats} />
            {/* moon container */}
            <View style={styles.moon_container}>
                <TouchableOpacity onPress={moonClick}>
                    <View style={styles.moon}></View>
                </TouchableOpacity>
            </View>
            {/* bottom container */}
            <View style={styles.bottom_container}>
                <TouchableOpacity style={styles.bottom_container} onPress={() => navigation.navigate('Satelite')}>
                    <Text style={styles.moondust_text}>Satélite</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}