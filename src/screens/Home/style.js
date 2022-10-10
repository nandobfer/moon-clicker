import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../../colors';

const vw = Dimensions.get('window').width / 100;

const moon = {
    size: 80*vw,
}

export const styles = StyleSheet.create({
    background: {
        backgroundColor: COLORS.background,
        flex: 1,
        paddingTop: 5*vw,
    },
    text: {
        color: COLORS.primary,
    },
    moon_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    moon: {
        backgroundColor: COLORS.moon,
        width: moon.size,
        height: moon.size,
        borderRadius: moon.size/2,
    },
    bottom_container: {
        backgroundColor: COLORS.primary,
        width: 100*vw,
        height: 15*vw,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    }
});