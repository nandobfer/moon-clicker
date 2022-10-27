import { useCallback, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import useAppState from 'react-native-appstate-hook';
import { StatusBar } from '../../components/StatusBar';
import { useExperience } from '../../hooks/useExperience';
import { useIdle } from '../../hooks/useIdle';
import useInterval from '../../hooks/useInterval';
import { useMoondust } from '../../hooks/useMoondust';
import { useStats } from '../../hooks/useStats';
import { useStorage } from '../../hooks/useStorage';
import { styles } from './style';

export const Home = ({ navigation }) => {
    let open = false;
    const stats = useStats();

    const moondust = useMoondust();
    const localStorage = useStorage();

    const idle = useIdle();
    const { appState } = useAppState({});
    useEffect(() => {
        if (appState == 'background') {
            localStorage.setData({...stats.values, exited: idle.onExit()})
        }
        if (appState == 'active') {
            localStorage.getData()
            .then(data => {
                if (data) {
                    idle.onEnter(data.exited, moonPassive)
                }

            })
            
        }
    }, [appState])

    useEffect(() => {
        localStorage.getData()
        .then(data => {
            if (data) {
                stats.setValues({...stats.values, ...data});
                console.log(data);
            }

        })
    }, [open])

    const moonClick = useCallback(() => {
        const new_moondust = stats.values.moondust + (moondust.onClick(stats));

        const new_stats = {...stats.values, moondust: new_moondust, exp: stats.values.exp + moondust.onClick(stats)}
        stats.setValues(new_stats);
        localStorage.setData(new_stats);
    }, [stats])

    const moonPassive = useCallback((multiplier = 1) => {
        const new_moondust = stats.values.moondust + (moondust.perSecond(stats) * multiplier)

        const new_stats = {...stats.values, moondust: new_moondust}
        stats.setValues(new_stats);
        localStorage.setData(new_stats);
    }, [stats])
    useInterval(moonPassive, 1000);

    useEffect(() => {
        const level = useExperience(stats)
        if (level != stats.values.level) {
            const new_stats = {...stats.values, level: level}
            stats.setValues(new_stats);
            localStorage.setData(new_stats);
        }
    }, [stats.values.exp])

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