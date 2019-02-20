import React, { Component } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

class Calc extends Component {
    handleInput(text){
        console.log(text)
        this.setState({
            text: text
        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <TextInput
                    onChangeText={(this.handleInput.bind(this))}
                    value={"360"}
                    style={styles.input} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 150, 
        width: 100 + '%',
        backgroundColor: '#272727',
        color: '#fff',
        fontSize: 48,
        textAlign: 'right'
    },
  });

export default Calc;