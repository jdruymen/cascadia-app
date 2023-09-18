import { StyleSheet, Text, View, Image } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";

const pinpoint = require("../../assets/cascadia-pinpoint.png");

export default function Map() {    
  return (
    <MapView
    provider={PROVIDER_GOOGLE}
    style={styles.map}
    region={{
      latitude: 47.6269602,
      longitude: -122.1651918,
      latitudeDelta: 0.01,
      longitudeDelta: 0,
    }}>
      <Marker
        coordinate={{
          latitude: 47.626609425891935,
          longitude: -122.16617795203048
        }}>
          <Image source={pinpoint} />
          <Callout>
            <Text>Cascadia Restaurant and Brewery, Bellevue</Text>
          </Callout>
      </Marker>

      
      <Marker
        coordinate={{
          latitude: 47.406230620931346, 
          longitude: -122.03832222214902
        }}>
          <Image source={pinpoint} />
          <Callout>
            <Text>Cascadia Pizza Co., Maple Valley</Text>
          </Callout>
      </Marker>
      
      <Marker
        coordinate={{
          latitude: 47.204767488961615, 
          longitude: -121.99150807055692
        }}>
          <Image source={pinpoint} />
          <Callout>
            <Text>Cascadia Pizza Co., Enumclaw</Text>
          </Callout>
      </Marker>

      <Marker
        coordinate={{
          latitude: 47.49544599277371,
          longitude: -121.78639249629053
        }}>
          <Image source={pinpoint} />
          <Callout>
            <Text>Cascadia Pizza Co., North Bend</Text>
          </Callout>
      </Marker>
      
    </MapView>
  );
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
});