import { useNavigation } from 'expo-router';
import React, { useState, useEffect, useRef } from 'react';
import { Platform, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Region, UserLocationChangeEvent } from 'react-native-maps';
import * as Location from 'expo-location';

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
    mapRef.current?.animateCamera({ center: policeRegion }, { duration: 3000 })

  }

  const onRegionChange = (region: Region) => {

  }

  const onUserLocationChange = (coords: UserLocationChangeEvent) => {
    console.log(location)
  }


  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {

        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location.coords.latitude, location.coords.longitude)
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
      <TouchableOpacity onPress={focusMap}>
        <View style={{ padding: 10 }}>
          <Text>Focus</Text>
        </View>
      </TouchableOpacity>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={initialRegion}
        showsUserLocation={true}
        showsMyLocationButton={true}
        ref={mapRef}
        showsPointsOfInterest={false}
        mapType={'satellite'}
        onRegionChange={onRegionChange}
        onUserLocationChange={onUserLocationChange}
      />
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
    height: '95%',
  }
});
