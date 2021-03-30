import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = () => {
  return (
    <View>
      <Image style={styles.logo} source={{uri: "https://media.glassdoor.com/sqll/472567/aperture-science-squarelogo-1428491666766.png"}} />
      <Text style={styles.headerText}>The Form</Text>
    </View>
  );
}



export default function App() {
  return (
    <View>
      <Header />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24
  },
  logo: {
    height:200,
    width: 200
    
  }
});
