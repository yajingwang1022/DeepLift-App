import React, { Component } from 'react';
import { TextInput, StyleSheet, View, Button, SafeAreaView } from 'react-native';
import { navigate } from '../navigation/RootNavigation';

global.session;

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            firstName: "",
            lastName: "",
            bodyweight: "",
            age: "",
            email: "",
            pw: "",
            pw_confirm: ""
        }
    }

    async register() {
        var nullFlag = true
        for(let prop in this.state) {
            if(this.state[prop] == ""){
                console.log(prop);
                nullFlag = false 
            }
        }
        if(nullFlag){
            if(this.state.pw == this.state.pw_confirm){
                var userJSON = this.state
                delete userJSON["pw_confirm"]
                session.apiInstance.createUser(userJSON)
                navigate("Login");
            } else {
                alert("Error",
                      "Passwords do not match",
                      [
                          {
                              text: "OK"
                          }
                      ]);
            }
        } else {
            alert("Error",
                      "All fields are required",
                      [
                          {
                              text: "OK"
                          }
                      ]);
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.area}>
                <View>
                    <TextInput 
                        style={{paddingTop:10}}
                        placeholder="First Name"
                        style={styles.textBox}
                        onChangeText={text => this.setState({firstName: text})}
                    />
                    <TextInput
                        placeholder="Last Name"
                        style={styles.textBox}
                        onChangeText={text => this.setState({lastName: text})}
                    />
                    <TextInput 
                        placeholder="Email Address"
                        style={styles.textBox}
                        autoCapitalize="none"
                        onChangeText={text => this.setState({email: text})}
                    />
                    <TextInput
                        autoCapitalize="none"
                        style={styles.textBox}
                        placeholder="Username"
                        onChangeText={text => this.setState({userName: text})}
                    />
                    <TextInput 
                        secureTextEntry={true}
                        style={styles.textBox}
                        placeholder="Password"
                        onChangeText={text => this.setState({pw: text})}
                    />
                    <TextInput
                        secureTextEntry={true}
                        style={styles.textBox}
                        placeholder="Confirm Password"
                        onChangeText={text => this.setState({pw_confirm: text})}
                    />
                    <TextInput 
                        keyboardType="numeric"
                        placeholder="Bodyweight"
                        style={styles.textBox}
                        onChangeText={text => this.setState({bodyweight: text})}/>
                    <TextInput 
                        keyboardType="numeric"
                        style={styles.textBox}
                        placeholder="Age"
                        onChangeText={text => this.setState({age: text})}/>
                    <Button onPress={() => this.register()}
                    title="Submit" />
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    area: {
        marginTop: 20,
        flex: 1,
        flexDirection: "column"
    },
    infoEnterBox: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        alignContent: 'center',
    },
    textBox: {
        textAlign: 'center',
    }

})

export default Signup;