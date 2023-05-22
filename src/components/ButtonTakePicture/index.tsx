import { TouchableOpacity, TouchableOpacityProps} from 'react-native'
import { styles } from './styles'
import React from 'react'

export function ButtonTakePicture({onPress, ...rest }: TouchableOpacityProps) {
    return (
        <TouchableOpacity style={styles.ball} onPress={onPress} {...rest} />
    )
}