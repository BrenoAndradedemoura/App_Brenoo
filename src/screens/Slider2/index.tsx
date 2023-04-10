import React from 'react';
import { FlatList, ImageBackground, View } from 'react-native';
import { IPage } from '../../../App';
import {
    ComponentButtonSlider, ComponentListMarker, ComponentTitleSlider
} from '../../components';
import { styles } from './styles';
export function Slider2({ setPageI }: IPage) {
  const slide1 = require("../../assets/slide1.png")
  const slide1Texts = [
    { id: '1', text: 'Fale com o motorista' },
    { id: '2', text: 'Envie a rota' },
    { id: '3', text: 'Planeje o caminho' },
  ]
  return (
    <ImageBackground source={slide1} style={styles.container} >
      <View style={styles.panel}>
        <ComponentTitleSlider titleI='Comunique o motorista' />
        <FlatList
          data={slide1Texts}
          renderItem={({ item }) =>
           <ComponentListMarker key={item.id} textMarker={item.text} />
        }
        keyExtractor={(item) => item.id}
    />
    </View>
    <View style={styles.buttonSlider}>
        <ComponentButtonSlider onPressI={() => setPageI(1)} />
        <ComponentButtonSlider onPressI={() => setPageI(2)} />
        <ComponentButtonSlider onPressI={() => setPageI(3)} />
        <ComponentButtonSlider onPressI={() => setPageI(4)} />
        <ComponentButtonSlider onPressI={() => setPageI(5)} />
    </View>
    </ImageBackground>

  );
}