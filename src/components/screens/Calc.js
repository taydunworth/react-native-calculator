import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'

class Calc extends Component {
    constructor() {
        super();
        this.state = {
            inputText: ""
        };
        this.validKeys = [
            "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "/", "*", "="
        ]
    }

    handleInput(text){
        this.setState ({
            inputText: text
        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <TextInput
                    onChangeText={(this.handleInput.bind(this))}
                    value={this.state.inputText}
                    style={styles.input} />
                <View style={{ flex: 1, flexDirection: "column"}}>
                    { this.validKeys.map((key, i) => {
                        if (i % 2 != 0) {
                            return
                        }
                        return (
                            <View style={styles.row}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={this.handleInput.bind(this, this.validKeys[i])}
                                >
                                    <Text style={styles.btnText}>{ this.validKeys[i] }</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={this.handleInput.bind(this, this.validKeys[i+1])}
                                >
                                    <Text style={styles.btnText}>{ this.validKeys[i+1] }</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 150, 
        width: 100 + "%",
        backgroundColor: "#272727",
        color: "#fff",
        fontSize: 48,
        textAlign: "right"
    },
    button: {
        flex: 1,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ddd"
    },
    row: {
        flex: 1,
        flexDirection: "row"
    }, 
    btnText: {
        fontSize: 36
    }
  });

export default Calc;