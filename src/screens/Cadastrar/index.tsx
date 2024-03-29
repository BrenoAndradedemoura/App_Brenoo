import React, { useEffect, useState } from "react"
import { View, Text,
     KeyboardAvoidingView,
     Alert
    } from "react-native"
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import { styles } from "./styles"
import { TextInput } from "react-native-gesture-handler"
import { colors } from "../../styles/colors"
import { FontAwesome5 } from '@expo/vector-icons'; 
import { ComponentButtonInterface, ComponentLoading }  from "../../components"
import { LoginTypes } from "../../navigations/login.navigation";
import { IRegister } from "../../services/data/User"
import { AxiosError } from "axios"
import { apiUser } from "../../services/data"
export interface IErrorApi {
    errors: {
        rule: string
        field: string
        message: string
    }[]
}

export function Cadastrar({navigation}: LoginTypes) {
    const [data, setData ] = useState<IRegister>()
    const [isLoading, setISLoading] = useState(true)
    function handleChange(item: IRegister ) {
        setData({...data, ...item})
    }
    async function handleRegister() {
        try {
            setISLoading(true)
            if(data?.name && data.email && data.password) {
                const response =  await apiUser.register(data)
                Alert.alert(`${response.data.name} cadastrado!!!`)
                setISLoading(false)
                navigation.navigate('Login')
            } else {
                Alert.alert("Preencha todos os campos!!!")
            }
        } catch (error) {
            const err = error as AxiosError
            const errorData = err.response?.data as IErrorApi
            let message = ""
            if (errorData) {
                for (const iterator of errorData.errors) {
                    message = `${message} ${iterator.message} \n`

                }
            }
        }
    }
    useEffect(()=> {
        setTimeout(() => {
            setISLoading(false)
        }, 500)
    }, [])
    return (
    <>
        {isLoading ? (
         <ComponentLoading />
     ) : (
        <View style={styles.container}>
        <KeyboardAvoidingView>
            <Text style={styles.title}> Cadastre-se </Text>
            <View style={styles.formRow}>
            <AntDesign name="user" style={styles.icon} />
                    <TextInput
                        placeholder="Nome"
                        onChangeText={(i) => handleChange({name: i})}
                        placeholderTextColor={colors.thirdLight}
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <MaterialIcons name="email" style={styles.icon} />
                    <TextInput
                        placeholder="Email"
                        onChangeText={(i) => handleChange({email: i})}
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
                        onChangeText={(i) => handleChange({password: i})}
                        placeholderTextColor={colors.thirdLight}
                        secureTextEntry={true}
                        autoCapitalize="none"
                        style={styles.input}
                    />
            </View>
        <ComponentButtonInterface title="Salvar" type="primary" onPressI={handleRegister} />  
        <ComponentButtonInterface title="Voltar" type="third" onPressI={()=> { navigation.navigate('Login')}} />  
        </KeyboardAvoidingView>       
        </View>
    )}
    </>
    );
}