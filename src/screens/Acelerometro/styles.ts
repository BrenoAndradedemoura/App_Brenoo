import React from 'react'
import { StyleSheet } from "react-native";
import {colors} from "../../styles/colors";
export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    text: {
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'stretch',
        color: colors.thirdLight,
        padding: 10,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: colors.thirdLight,
        padding: 10,
    },
    middleButton: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: colors.secondary
    },
    fundo:{
        width: '100%'
    }
});