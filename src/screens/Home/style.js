import { StyleSheet } from 'react-native';
import { COLORS } from '../../colors';

const moon = {
    size: 250,
}

export const styles = StyleSheet.create({
    background: {
        backgroundColor: COLORS.background,
        flex: 1,
    },
    top_container: {
        flexDirection: 'row',
        padding: 10,
        // borderColor: 'red', borderWidth: 1,
    },
    text: {
        color: COLORS.primary,
    },
    moondust_container: {
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 50/2,
    },
    moondust_text: {
        color: COLORS.background,
        fontWeight: 'bold',
        fontSize: 24,
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
    }
});