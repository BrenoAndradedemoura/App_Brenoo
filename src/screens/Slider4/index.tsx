import React from 'react';
import { FlatList, ImageBackground, View } from 'react-native';
import { IPage } from '../../../App';
import {
    ComponentButtonSlider, ComponentListMarker, ComponentTitleSlider
} from '../../components';
import { styles } from './styles';
export function Slider4({ setPageI }: IPage){
    const slide1 = require("../../assets/slide1.png")
    const slide1Texts = [
        { id: '1', text: 'Evite regiões perigosas' },
        { id: '2', text: 'Utilize a câmera para identificar o condutor' },
        { id: '3', text: 'Realize sempre o caminho mais eficiente' }
    ]
    return (
        <View style={styles.container} >
           <View style={styles.panel}>
                <ComponentTitleSlider titleI='Segurança e economia' />
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
        </View>
    );
}
