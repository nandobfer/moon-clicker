import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../../colors';

const vw = Dimensions.get('window').width / 100;

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: COLORS.moon,
        alignItems: 'center',
        paddingTop: 5*vw,
    },
    stats_container: {
        backgroundColor: COLORS.background,
        width: 90*vw,
    },
    main_container: {
        flex: 1,
    },
    upgrade_wrapper: {
        flexDirection: 'row',
        borderColor: COLORS.background, borderWidth: 3,
        borderTopWidth: 0,
        width: 90*vw,
        height: 15*vw,
        justifyContent: 'space-between',
    },
    upgrade_container: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'center',
    },
    cost_container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 15*vw,
    },
    cost_text: {
        color: COLORS.primary,
        fontWeight: 'bold',
    },
    title_text: {
        fontWeight: 'bold',
    },
    text: {
        color: COLORS.background,
    },
    upgrade_buy_container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.secondary,
        width: 29*vw,

    },
    buy_text: {
        color: COLORS.primary,
        fontWeight: 'bold',
    },

    reset_button: {
        bottom: 0,
    }
});