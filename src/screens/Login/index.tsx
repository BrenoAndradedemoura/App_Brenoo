import React, { useState } from "react"
import { View, Text,
     KeyboardAvoidingView,
     Alert
    } from "react-native"
import { MaterialIcons } from '@expo/vector-icons'
import { styles } from "./styles"
import { TextInput } from "react-native-gesture-handler"
import { colors } from "../../styles/colors"
import { FontAwesome5 } from '@expo/vector-icons'; 
import { ComponentButtonInterface }  from "../../components"
import { LoginTypes } from "../../navigations/login.navigation"
import { Axios, AxiosError } from "axios"
import { useAuth } from "../../hooks/auth"
import { IAuthenticate } from "../../services/data/User"
export interface IErrorApi {
    errors: {
        rule: string
        field: string
        message: string
    } []  
}

export function Login({navigation}:LoginTypes) {
    const { signIn } = useAuth();
    const [data,setData] = useState<IAuthenticate>();
    const [isLoading, setIsLoading] = useState(true);
    async function handleSignIn(){
        try{
            setIsLoading(true);
            if(data?.email && data.password){
                await signIn(data);
            } else {
                Alert.alert("Preencha todos os campos");
                setIsLoading(false);
            }
        }catch(error){
            const err = error as AxiosError;
            const message = err.response?.data as string
            Alert.alert(message)
            setIsLoading(false)
        }
    }

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
        <ComponentButtonInterface title="Entrar" type="primary" onPressI={handleSignIn} /> 
        <ComponentButtonInterface title="Cadastre-se" type="third" onPressI={()=> { navigation.navigate('Cadastrar')}} />  
        </KeyboardAvoidingView>       
        </View>
    )
}