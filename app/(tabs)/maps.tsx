import { useNavigation, useRouter } from 'expo-router';
import React, { useState, useEffect, useRef } from 'react';
import { Platform, Text, View, StyleSheet, TouchableOpacity, Alert, ImageURISource } from 'react-native';
import MapView, { Callout, Marker, MarkerPressEvent, PROVIDER_GOOGLE, Region, UserLocationChangeEvent } from 'react-native-maps';
import { Fontisto } from '@expo/vector-icons';

import * as Location from 'expo-location';
type Marker = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
  name: string;
  text: string;
  markerValue: number;
}

const markers: Marker[] = [
  {
    latitude: 54.51938932841861,
    longitude: 18.552634541645133,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
    name: "Dar Pomorza",
    text: "Dar Pomorza to ważny symbol polskiego dziedzictwa morskiego . Jest to także pomnik ofiary i odwagi polskich marynarzy.",
    markerValue: 1,
  },
  {
    latitude: 54.44748194283162,
    longitude: 18.574132356933745,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
    name: "Molo w Sopocie",
    text: "Największy dreptak w Polsce.",
    markerValue: 2,
  },
  {
    latitude: 54.35010810379591,
    longitude: 18.647605625332943,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
    name: "Brama wyżynna",
    text: "Taka sobie brama",
    markerValue: 3,
  },

]


const initialRegion = {
  latitude: 54.518333,
  longitude: 18.550833,
  latitudeDelta: 0.005,
  longitudeDelta: 0.005,
};

export default function MapsView() {
  const mapRef = useRef<any>(null)
  const nav = useNavigation()
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    nav.setOptions({
      headerRight: () => {
        <View>
          <Text style={{ padding: 50, color: 'black' }}>Lorem ipsum</Text>
        </View>
      }
    })
  }, [])

  const focusMap = () => {
    const policeRegion = {
      latitude: 53.56153425831027,
      longitude: 21.01730780587174,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    };
    // mapRef.current?.animateToRegion(policeRegion)

  }

  const onRegionChange = (region: Region) => {


  }

  const onMarkerSelected = (marker: any) => {
    const router = useRouter()
    mapRef.current?.animateToRegion(marker)
    router.push("/spot")

  }

  const onUserLocationChange = (coords: UserLocationChangeEvent) => {
    // console.log(location?.coords.latitude, location?.coords.longitude, "<- user location change")
  }


  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {

        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  return (
    <View style={styles.container}>

      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={initialRegion}
        showsUserLocation={true}
        showsMyLocationButton={true}
        showsPointsOfInterest={false}
        mapType={'satellite'}
        onRegionChange={onRegionChange}
        onUserLocationChange={onUserLocationChange}
        ref={mapRef}


      >{markers.map((marker, index) => (
        <Marker
          key={index}
          coordinate={marker}
          onPress={() => onMarkerSelected(marker)}
          icon={
            marker.markerValue === 1 ? require('../../assets/images/flag1.png')

              : marker.markerValue === 2 ? require('../../assets/images/flag2.png')

                : marker.markerValue === 3 ? require('../../assets/images/flag3.png')

                  : marker.markerValue === 4 ? require('../../assets/images/flag_extra.png')
                    : null
          }
        />



      ))}</MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  }
});
