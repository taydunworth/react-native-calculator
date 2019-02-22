import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'

class Calc extends Component {
    constructor() {
        super();
        this.state = {
            inputText: "",
            pendingOperation: null,
            firstOperand: ""
        };
        this.validKeys = [
            "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "/", "*", "="
        ]
    }

    handleInput(text){
        // TO DO: don't allow for non-valid keys
        this.setState ({
            inputText: text
        })
    }

    handleBtnInput(text){
        if (["+", "-", "*", "/"].indexOf(text)>-1) {
            this.setState({
                pendingOperation: text,
                firstOperand: this.state.inputText,
                inputText: ""
            })
            return;
        } else if (text ==="=") {
            this.calculate(text)
            return
        }
        this.setState ({
            inputText: this.state.inputText + text
        })
    }

    calculate() {
        let result = null
        switch(this.state.pendingOperation){
            case "+":
                result = (Number(this.state.firstOperand) + Number(this.state.inputText));
                result = result.toString();
                this.setState({
                    inputText: result,
                    pendingOperation: null,
                    firstOperand: ""
                })
                return;
            case "-":
                result = (Number(this.state.firstOperand) - Number(this.state.inputText));
                result = result.toString();
                this.setState({
                    inputText: result,
                    pendingOperation: null,
                    firstOperand: ""
                })
                return;
            case "*":
                result = (Number(this.state.firstOperand) * Number(this.state.inputText));
                result = result.toString();
                this.setState({
                    inputText: result,
                    pendingOperation: null,
                    firstOperand: ""
                })
                return;
            case "/":
                result = (Number(this.state.firstOperand) / Number(this.state.inputText));
                result = result.toString();
                this.setState({
                    inputText: result,
                    pendingOperation: null,
                    firstOperand: ""
                })
                return;
            default:
                return;
        }
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
                                    onPress={this.handleBtnInput.bind(this, this.validKeys[i])}
                                >
                                    <Text style={styles.btnText}>{ this.validKeys[i] }</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={this.handleBtnInput.bind(this, this.validKeys[i+1])}
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