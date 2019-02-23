import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import { CalcButton } from '../presentation'

class Calc extends Component {
    constructor() {
        super();
        this.initial = {
            inputText: "",
            pendingOperation: null,
            firstOperand: ""
        };
        this.state = this.initial
        this.validKeys = [
            "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "/", "*", "=", "C"
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
        } else if (text === "=") {
            this.calculate(text)
            return
        } else if (text === "C") {
            this.setState(this.initial)
        } else {
            this.setState ({
                inputText: this.state.inputText + text
            })
        }
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
                                <CalcButton
                                    handleBtnInput = { this.handleBtnInput.bind(this) }
                                    value= { this.validKeys[i] }
                                />
                                <CalcButton 
                                    handleBtnInput = { this.handleBtnInput.bind(this) }
                                    value = {this.validKeys[i+1] }
                                />
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
    row: {
        flex: 1,
        flexDirection: "row"
    }
  });

export default Calc;