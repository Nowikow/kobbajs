import React, { Component, useState } from "react";
import { StyleSheet, Text, View, TextInput } from 'react-native';

function max(upperKobb, lowerKobb) {
    if (upperKobb<lowerKobb) {
        return [upperKobb, lowerKobb]
    } else {
        return [lowerKobb,upperKobb]
    }
}

function resultRender([bigArc, smallArc]) {
    if (0.75*bigArc-smallArc>0.5) {
        return (
            <Text>Big arc is main</Text>
        )
    } else {
        return (
            <Text>Both arcs are main</Text>
        )
    }
}


export default function App() {

    const [upperKobb, setUpperKobb] = useState('0');
    const [lowerKobb, setLowerKobb] = useState('0');

    return (
      <View style={styles.container}>

          <Text style={styles.icon}>KOBBAJS</Text>

          <TextInput
              style={styles.kobb}
              keyboardType='numeric'
              maxLength = {3}
              placeholder="Upper Cobb angle"
              onChangeText={upperKobb => setUpperKobb(upperKobb)}
          />

          <TextInput
              style={styles.kobb}
              keyboardType='numeric'
              maxLength = {3}
              placeholder="Lower Cobb angle"
              onChangeText={lowerKobb => setLowerKobb(lowerKobb)}
          />

          <Text></Text>

          <Text style={styles.res}>{resultRender(max(upperKobb, lowerKobb))}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
  },

    icon: {
      fontSize: 60
    },

    kobb: {
      fontSize: 30,
        marginTop: 80,
        textAlign: 'center'
    },

    res: {
        fontSize: 25,
        marginTop: 100,
        textAlign: 'center',
        textTransform: 'uppercase'
    },


});