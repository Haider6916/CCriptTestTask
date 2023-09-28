import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 14,
    },
    header: {
        color: 'white',
        marginBottom: 10
    },
    lbs: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    lbsTextInput: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 25,
        paddingLeft: 20,
        flex: 1,
        color: 'white'
    },
    lbsText: {
        color: 'white',
        fontSize: 16,
        marginLeft: 10
    },
    twoTextInput: {
        flexDirection: 'row',
        width: '100%'
    },
    feet: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 0.48,
        marginRight: 10,
    },
    feetTextInput: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 25,
        paddingLeft: 20,
        flex: 1,
        color: 'white'
    },
    feetTxt: {
        color: 'white',
        marginLeft: 10,
        fontSize: 16,
    },
    inches: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 0.5
    },
    inchesTxtInput: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 25,
        paddingLeft: 20,
        flex: 1,
        color: 'white'
    },
    kgs: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    }
});