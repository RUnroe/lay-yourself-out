import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image style={styles.logo} source={{uri: "https://steamuserimages-a.akamaihd.net/ugc/903401354517029501/A7B4CB2DCA27F6BA32486C32E86F3C1968993873/"}} />
      <Text style={styles.headerText}>The Form</Text>
    </View>
  );
}

const PersonalInfo = () => {
  return (
    <View style={styles.personalInfo}>
      
    </View>
  );
}

const Skills = () => {
  return (
    <View style={styles.skills}>
      
    </View>
  );
}

const Submission = () => {
  return (
    <View style={styles.submission}>
      
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
  header: {
    backgroundColor: '#282828',
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center"
  },
  headerText: {
    fontSize: 24,
    color: '#fff'
  },
  logo: {
    height:65,
    width: 65,
    margin: 5
    
  }
});
