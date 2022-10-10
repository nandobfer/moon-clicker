import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../../colors';

const vw = Dimensions.get('window').width / 100;

export const styles = StyleSheet.create({
    top_container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 10,
        // borderColor: 'red', borderWidth: 1,
    },
    stats_container: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    moondust_container: {
        // flex: 0.3,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        width: 15*vw,
        height: 15*vw,
        borderRadius: 15*vw/2,
    },
    text: {
        color: COLORS.primary,
    },
    moondust_text: {
        color: COLORS.background,
        fontWeight: 'bold',
        fontSize: 24,
    },
});