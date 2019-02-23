import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

class CalcButton extends Component {
    render() {
        return (
            <TouchableOpacity
                style={styles.button}
                onPress={this.props.handleBtnInput.bind(this, this.props.value)}
            >
                <Text style={styles.btnText}>{ this.props.value }</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ddd"
    },
    btnText: {
        fontSize: 36
    }
  });

export default CalcButton;