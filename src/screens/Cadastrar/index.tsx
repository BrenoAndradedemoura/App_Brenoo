import React from "react"
import { View, Text,
     KeyboardAvoidingView
    } from "react-native"
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import { styles } from "./styles"
import { TextInput } from "react-native-gesture-handler"
import { colors } from "../../styles/colors"
import { FontAwesome5 } from '@expo/vector-icons'; 
import { ComponentButtonInterface }  from "../../components"
import { LoginTypes } from "../../navigations/login.navigation";

export function Cadastrar({navigation}: LoginTypes) {
    return (
        <View style={styles.container}>
        <KeyboardAvoidingView>
            <Text style={styles.title}> Cadastre-se </Text>
            <View style={styles.formRow}>
            <AntDesign name="user" style={styles.icon} />
                    <TextInput
                        placeholder="Nome"
                        placeholderTextColor={colors.thirdLight}
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <MaterialIcons name="email" style={styles.icon} />
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor={colors.thirdLight}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <FontAwesome5 name="key" style={styles.icon} />
                    <TextInput
                        placeholder="Senha"
                        placeholderTextColor={colors.thirdLight}
                        secureTextEntry={true}
                        autoCapitalize="none"
                        style={styles.input}
                    />
            </View>
        <ComponentButtonInterface title="Entrar" type="primary" onPressI={()=> {navigation.navigate('Drawer')}} /> 
        <ComponentButtonInterface title="Voltar" type="third" onPressI={()=> { navigation.navigate('Login')}} />  
        </KeyboardAvoidingView>       
        </View>
    )
}