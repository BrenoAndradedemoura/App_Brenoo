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
import { LoginTypes } from "../../navigations/login.navigation"

export function Login({ navigation }: LoginTypes) {
    return (
        <View style={styles.container}>
        <KeyboardAvoidingView>
            <Text style={styles.title}>Login </Text>
            <View style={styles.formRow}>
                <MaterialIcons name="email" style={styles.icon}/>
                <TextInput
                  placeholder="E-mail"
                  placeholderTextColor={colors.thirdLight}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  style={styles.input}

            
                />
            </View>
            <View style={styles.formRow}>
            <FontAwesome5 name="key" size={24} color={colors.primary} style={styles.icon}/>
                <TextInput
                  placeholder="Senha"
                  placeholderTextColor={colors.thirdLight}
                  secureTextEntry={true}
                  autoCapitalize="none"
                  style={styles.input}

                />
            </View>
        <ComponentButtonInterface title="Entrar" type="primary" onPressI={()=> { console.log('Login')}} /> 
        <ComponentButtonInterface title="Cadastre-se" type="third" onPressI={()=> { navigation.navigate('Cadastrar')}} />  
        </KeyboardAvoidingView>       
        </View>
    )
}