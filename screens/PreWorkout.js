import React, { useState }  from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

// TO DO: can rename this file to something that makes more sense, like StartWorkout
const PreWorkout = ({ navigation }) => {
  const [weight, onChangeWeight] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text1} >Please enter weight (kg/lb): </Text>
      <TextInput style={styles.textField}
                 keyboardType="number-pad"
                 onChangeText={inputWeight => onChangeWeight(inputWeight)}/>
      <Text style={styles.text2} >Use mirror or phone: </Text>
      <View style={styles.bottomRow}>
        <FontAwesome.Button name="qrcode" style={styles.button} 
                                          backgroundColor="#62a4f5"
                                          onPress={() => navigation.navigate("Home")}>
          Connect to Mirror</FontAwesome.Button>
        <FontAwesome.Button name="mobile" style={styles.button} 
                                          backgroundColor="#62a4f5"
                                          onPress={() => navigation.navigate("Home")}>
          Use Phone Camera</FontAwesome.Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text1: {
    fontSize: 16,
    margin: "10%",
    marginTop: "20%",
  },
  text2: {
    fontSize: 16,
    marginTop: "20%",
    marginHorizontal: "10%",
  },
  textField: {
    marginHorizontal: "10%",
    height: "5%",
    borderBottomColor: 'gray', 
    borderBottomWidth: 1
  },
  button: {
    width: 135,
    height: "30%",
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
});

export default PreWorkout;