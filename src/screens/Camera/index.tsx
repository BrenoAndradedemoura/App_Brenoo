import { Camera, CameraCapturedPicture, CameraType, FaceDetectionResult } from 'expo-camera';
import { useRef, useState } from 'react';
import { Alert, Button, StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { ComponentButtonInterface } from '../../components';
import { MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons'; 
import { styles } from './styles'
import * as MediaLibrary from 'expo-media-library'
import * as ImagePicker from 'expo-image-picker';
import * as FaceDetector from 'expo-face-detector';
import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';
import { LoginTypes } from '../../navigations/login.navigation';
import React from 'react';
import { colors } from '../../styles/colors';

interface IPhoto {
    height: string
    uri: string
    widht: string
}

export function CameraScreen({navigation}: LoginTypes) {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [permissionMedia, requestPermissionMedia] = MediaLibrary.usePermissions();
  const [photo, setPhoto] = useState<CameraCapturedPicture | ImagePicker.ImagePickerAsset>()
  const ref = useRef<Camera>(null)
  const [takePhoto, setTakePhoto] = useState(false)
  const [ permissionQrCode, requestPermissionQrCode] = BarCodeScanner.usePermissions();
  const [scanned, setScanned] = useState(false);
  const [face, setFace] = useState<FaceDetector.FaceFeature>()

  if (!permission) {
    // As permissões da câmera estão sendo carregadas
    return <View />
  }

  if (!permission.granted) {
    // A permissão da câmera ainda não foi dada
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Permita o acesso à sua câmera!!</Text>
        <Button onPress={requestPermission} title="Pemissão do Uso da Câmera" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  async function takePicture() {
    if (ref.current) {
      const picture = await ref.current.takePictureAsync()
      console.log(picture)
      setPhoto(picture)
    }
  }

  async function SavePhoto() {
    const asset = await MediaLibrary.createAssetAsync(photo!.uri)
    MediaLibrary.createAlbumAsync("ImagensTáxi", asset, true)
    Alert.alert("Imagem salva com sucesso!")
  }

  const handleFacesDetected = ({ faces }: FaceDetectionResult): void => {
    if (faces.length > 0) {
      const faceDetect = faces[0] as FaceDetector.FaceFeature
      setFace(faceDetect)
      //console.log(faceDetect)
    } else {
      setFace(undefined)
    }
  }

  const handleBarCodeScanned = ({type, data}: BarCodeScannerResult) => {
    setScanned(true);
    alert(data);
  };

  return (
    <>
    {photo && photo.uri ? (
          <View style={styles.container}>
            <View style={styles.linha2}>
                <TouchableOpacity onPress={() => {navigation.navigate('Photo')}} style={styles.botao3}>
                  <Ionicons name="caret-back-circle" size={40} color={colors.white} />
                </TouchableOpacity>
                <TouchableOpacity onPress={SavePhoto} style={styles.botao3} /*Para salvar */>
                  <MaterialIcons name="save" size={40} color={colors.white} />
                </TouchableOpacity>
              </View>
                <Image source={{ uri: photo.uri }} style={styles.img} />
                <TouchableOpacity onPress={() => navigation.navigate('Photo')} />
          </View>
        
      ) : (
        <Camera style={styles.camera} type={type} ref={ref}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          onFacesDetected={handleFacesDetected}
          faceDetectorSettings={{
            mode: FaceDetector.FaceDetectorMode.accurate,
            detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
            runClassifications: FaceDetector.FaceDetectorClassifications.all,
            minDetectionInterval: 1000,
            tracking: true,
          }}                 
        >
          <View style={styles.sorriso}>
            {face && face.smilingProbability && face.smilingProbability > 0.5 ? (
              <Text>Sorrindo</Text>
            ) : (
              <Text>Não esta Sorrindo</Text>
            )}

          </View>
          <View style={styles.linha}>
            <TouchableOpacity onPress={() => navigation.navigate('Photo')} style={styles.botao3} /*Para voltar para o tab */>
                <Ionicons name="caret-back-circle" size={40} color={colors.white} />
            </TouchableOpacity>
            <TouchableOpacity onPress={takePicture} style={styles.botao1} /* Para tirar  a foto */>
              <MaterialIcons name="camera" size={100} color={colors.white} />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleCameraType} style={styles.botao2} /* Para mudar a câmera */>
              <MaterialCommunityIcons name="camera-flip" size={70} color={colors.white} />
            </TouchableOpacity>
          </View>
        </Camera>
      )}
      </>
  );
}