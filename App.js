import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image, TextInput, Button } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image style={styles.logo} source={{uri: 'https://steamuserimages-a.akamaihd.net/ugc/903401354517029501/A7B4CB2DCA27F6BA32486C32E86F3C1968993873/'}} />
      <Text style={styles.headerText}>The Form</Text>
    </View>
  );
}

const PersonalInfo = () => {
  return (
    <View style={styles.personalInfo}>
      <TextInputSection label='Name' placeholder='John Appleseed'/>
      <TextInputSection label='Street Address' placeholder='123 Memory Ln'/>
      <TextInputSection label='City' placeholder='Salt Lake City'/>
      <TextInputSection label='State' placeholder='UT'/>
      <TextInputSection label='Zip Code' placeholder='12345'/>
      <GenderPicker />
    </View>
  );
}

const TextInputSection = (props) => {
  return (
    <View style={styles.inputSection}>
      <Text style={styles.label}>{props.label}:</Text>
      <TextInput style={styles.textInput} placeholder={props.placeholder}/>
    </View>
  );
}

const GenderPicker = () => {
  return (
    <View>
      <Text style={styles.label}>Gender:</Text>
      <Picker>
        <Picker.Item label='Male' value='Male'/>
        <Picker.Item label='Female' value='Female'/>
      </Picker>
    </View>
  );
}

const Skills = () => {
  return (
    <View style={styles.skills}>
      <SliderSection label='Experience level of HTML' min={0} max={10} step={1}/>
      <SliderSection label='Experience level of Javascript' min={0} max={10} step={1}/>
      <SliderSection label='Experience level of UI/UX' min={0} max={10} step={1}/>
    </View>
  );
}

const Submission = () => {
  return (
    <View style={styles.submission}>
      <Button style={styles.submissionButton} title='Submit' color='#399cc0'/>
    </View>
  );
}

const SliderSection = (props) => {
  return (
    <ScrollView style={styles.sliderSection}>
      <Text style={styles.label}>{props.label}:</Text>
      <Slider style={styles.slider} minimumValue={props.min} maximumValue={props.max} step={props.step}/>
    </ScrollView>
  );
}

export default function App() {
  return (
    <ScrollView>
      <Header />
      <PersonalInfo />
      <Skills />
      <Submission />
    </ScrollView>
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
    alignItems: 'center'
  },
  headerText: {
    fontSize: 24,
    color: '#fff'
  },
  logo: {
    height:65,
    width: 65,
    margin: 5 
  },
  personalInfo: {
    display:'flex',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#def7ff'
  },
  skills: {
    backgroundColor: '#eee',
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  textInput: {
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 15
  },
  label: {
    fontSize: 15
  },
  inputSection: {
    paddingVertical: 4
  },
  sliderSection: {
    paddingVertical: 4
  },
  submission: {
    paddingVertical: 10,
    alignSelf: 'center',
    width: 100
  }
});
