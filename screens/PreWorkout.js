import React, { useState }  from "react";
import { View, ScrollView, StyleSheet, Text, TextInput, Keyboard, TouchableWithoutFeedback } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const PreWorkout = ({ route, navigation }) => {
  const [weight, onChangeWeight] = useState('');
  const { username, exerciseName, exerciseID } = route.params;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView>
        <Text style={styles.text1} >Please enter weight (lb): </Text>
        <TextInput style={styles.textField}
                  keyboardType="number-pad"
                  onChangeText={inputWeight => onChangeWeight(inputWeight)}/>
        <Text style={styles.text2} >Use mirror or phone: </Text>
        <View style={styles.bottomRow}>
          <FontAwesome.Button name="qrcode" style={styles.button} 
                                            backgroundColor="#62a4f5"
                                            onPress={() => startWorkout()}>
            Connect to Mirror</FontAwesome.Button>
          <FontAwesome.Button name="mobile" style={styles.button} 
                                            backgroundColor="#62a4f5"
                                            onPress={() => navigation.navigate("Home")}>
            Use Phone Camera</FontAwesome.Button>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );

  function startWorkout() {
    const TEMP_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoieWFqaW5nd2FuZzEwMjIiLCJleHBpcmVzIjoxNjE5ODQxNjAwLjB9.BtxFdI0uWoHyakfLSNm82QTQyBLX2wQhriRB6Ywb75k";
    const requestOptions = {
      method: 'PUT',
      headers: { 'Authorization': 'Bearer ' + TEMP_TOKEN,
      'Content-Type': 'application/json'}
    };
  fetch(`https://api.deepliftcapstone.xyz/workouts/user/${username}/start`, requestOptions)
      .then(response => console.log(response.json()));
    navigation.navigate("QRCodePage",
                                            { username: username,
                                              exerciseName: exerciseName,
                                              exerciseID: exerciseID,
                                              weight: weight });
  }
};

const styles = StyleSheet.create({
  text1: {
    fontSize: 16,
    margin: "10%",
    marginTop: "20%",
  },
  text2: {
    fontSize: 16,
    marginVertical: "20%",
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
    height: 50
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