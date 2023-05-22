import React from 'react';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import { Camera, CameraCapturedPicture, CameraType } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, Text, TouchableOpacity, View, Image, Alert } from 'react-native';
import { styles } from "./styles"
import { MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { ComponentButtonInterface, ComponentTitleSlider } from "./../../components"
import { colors } from '../../styles/colors';
import { LoginTypes } from '../../navigations/login.navigation';
import { TitleSlider } from '../../components/TitleSlider';


interface IPhoto {
  height: string
  uri: string
  width: string
}

export function ScreenPhoto({navigation}: LoginTypes) {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [permissionMedia, requestPermissionMedia] = MediaLibrary.usePermissions();
  const [photo, setPhoto] = useState<CameraCapturedPicture | ImagePicker.ImagePickerAsset>()
  const ref = useRef<Camera>(null)
  const [takePhoto, setTakePhoto] = useState(false)

  if (!permissionMedia) {
    // As permissões da câmera estão sendo carregadas
    return <View />
  }

  if (!permissionMedia.granted) {
    // A permissão da câmera ainda não foi dada
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center', color:colors.secondary, alignItems: "center", marginTop: 50 }}>Permita o acesso à sua câmera!!</Text>
        <Button onPress={requestPermissionMedia} title="Pemissão do Uso da Midia" />
      </View>
    );
  }

  async function SavePhoto() {
    const asset = await MediaLibrary.createAssetAsync(photo!.uri)
    MediaLibrary.createAlbumAsync("Imagens", asset, false)
    Alert.alert("Imagem salva com sucesso!")
  }

  async function pickImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4,3],
      quality: 1
    })
    if(!result.canceled) {
      setPhoto(result.assets[0])
    }
  }


  return (
    <>
    {photo && photo.uri ? (
      <View style={styles.container}>
        <View style={styles.linha2}>
          <TouchableOpacity onPress={() => navigation.navigate('Tab')}>
            <Ionicons name="caret-back-circle" size={40} color={colors.white} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Camera')} style={styles.novo}>
            <MaterialIcons name="add-to-photos" size={40} color={colors.white} />
          </TouchableOpacity>
        </View>
        <Image source={{ uri: photo.uri }} style={styles.img} />
      </View>
    ):(
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Tab')} style={styles.voltar}>
          <Ionicons name="caret-back-circle" size={40} color={colors.secondary} />
        </TouchableOpacity>
      <View style={styles.container2}>
        <TitleSlider titleI='Câmera' />
        <ComponentButtonInterface onPressI={() => navigation.navigate('Camera')} title="Nova foto" type='primary' />
        <ComponentButtonInterface onPressI={pickImage} title="Pegar da galeria" type='primary' />
      </View>
    </View>
    )}
    </>
  );
}
   