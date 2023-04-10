import React from "react"
import { View, Text,
     KeyboardAvoidingView
    } from "react-native"
import { MaterialIcons } from '@expo/vector-icons'
import { styles } from "./styles"
import { TextInput } from "react-native-gesture-handler"
import { colors } from "../../styles/colors"
import { FontAwesome5 } from '@expo/vector-icons'; 
import { ComponentButtonInterface }  from "../../components"

export function Cadastrar() {
    return (
        <View style={styles.container}>
        <KeyboardAvoidingView>
            <Text style={styles.title}>Login </Text>
            <View style={styles.formRow}>
                <MaterialIcons name="email" style={styles.icon}/>
                <TextInput
                  placeholder="E-mail"
                  placeholderTextColor={colors.black}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  style={styles.input}

            
                />
            </View>
            <View style={styles.formRow}>
            <FontAwesome5 name="key" size={24} color={colors.primary} />
                <TextInput
                  placeholder="Senha"
                  placeholderTextColor={colors.black}
                  secureTextEntry={true}
                  autoCapitalize="none"
                  style={styles.input}

                />
            </View>
            <View style={styles.formRow}>
            <FontAwesome5 name="key" size={24} color={colors.primary} />
                <TextInput
                  placeholder="Senha"
                  placeholderTextColor={colors.black}
                  secureTextEntry={true}
                  autoCapitalize="none"
                  style={styles.input}
                />
            </View>
        <ComponentButtonInterface title="Login" type="primary" onPressI={()=> { console.log('login')}} /> 
        <ComponentButtonInterface title="Cadastre-se" type="primary" onPressI={()=> { console.log('Cadastro')}} />  
        </KeyboardAvoidingView>       
        </View>
    )
}