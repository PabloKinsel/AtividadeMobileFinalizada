import {Alert, FlatList, StyleSheet, Text, View} from "react-native";
import { useState } from "react";

import DropdownComponent from "../dropdown/Dropdown";

export function Home() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.titleEvent}>Festa Junina</Text>
      <Text style={styles.dateEvent}>Sexta, 23 de junho de 2023</Text>

      <DropdownComponent/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  titleEvent: {
    color: "#850ef5",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
    justifyContent:"center",
    textAlign:"center"
  },
  dateEvent: {
    color: "#850ef5",
    fontSize: 16,
    justifyContent:"center",
    textAlign:"center",
    fontWeight: "bold",
  },
  
});
