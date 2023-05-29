import { Dimensions, ImageBackground, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    camera: {
      flex: 1,
      height: Dimensions.get('window').width,
      width: Dimensions.get('window').width,
      justifyContent: "flex-end"
      
    },
    camera2: {
      flex: 1,
      height: Dimensions.get('window').width,
      width: Dimensions.get('window').width,
      justifyContent: "center",
      alignItems: "center"
      
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.white,
    },
    img: {
      height: "100%",
      width: Dimensions.get('window').width
    },
    botao1: {
      width: "50%",
      alignItems: "flex-end"
    },
    botao2: {
      width: "35%",
      alignItems: "flex-end",
      marginRight: 5
    },
    botao3: {
      width: "15%",
      alignItems: "flex-end",
      flexDirection: "row",
      justifyContent: "flex-start",
      marginLeft: 10,
      marginRight: 10,
      marginTop: 60
    },
    linha: {
      flexDirection: "row",
      alignItems: "center"
    },
    linha2: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 25,
      backgroundColor: colors.primary
    },
    voltar: {
      flexDirection: "row",
      justifyContent: "flex-start",
      marginTop: 50
    },
    sorriso: {
      justifyContent: "center",
      BackgroundColor: colors.white 
    }
  });