import { useCallback, useEffect, useMemo, useState } from 'react';
import { Text, Touchable, TouchableOpacity, city, View } from 'react-native';
import { StatusBar } from '../../components/StatusBar';
import { config } from '../../config';
import useInterval from '../../hooks/useInterval';
import { useMoondust } from '../../hooks/useMoondust';
import { useStats } from '../../hooks/useStats';
import { useStorage } from '../../hooks/useStorage';
import { styles } from './style';

const initial_stats = config.stats;

export const Home = ({ navigation }) => {
    
    let reset = true;
    let open = false;
    const [loading, setLoading] = useState(true);
    const stats = useStats();

    const moondust = useMoondust();
    const localStorage = useStorage();

    const moonClick = () => {
        let new_moondust = stats.values.moondust + moondust.onClick(stats);

        const new_stats = {...stats.values, moondust: new_moondust}
        stats.setValues(new_stats);
        localStorage.setData(new_stats);

    }

    const moonPassive = () => {
        let new_moondust = stats.values.moondust + moondust.perSecond(stats)

        const new_stats = {...stats.values, moondust: new_moondust}
        stats.setValues(new_stats);
        localStorage.setData(new_stats);
    }

    useEffect(() => {
        localStorage.getData()
        .then(data => {
            if (data) {
                stats.setValues({...stats.values, ...data});
                console.log(data);
            }

        })
    }, [open])

    useInterval(moonPassive, 1000);

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