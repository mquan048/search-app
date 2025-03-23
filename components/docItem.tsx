import React, { useEffect, useState } from "react";
import DocItemProps from "@/types/docItemProps";
import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from "react-native";

const DocItem: React.FC<DocItemProps> = ({ name, description, url }) => {
  const handlePress = () => {
    Linking.openURL(url);
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text>Description: {description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginHorizontal: "auto",
    marginVertical: 10,
    borderColor: "#0177b5",
    borderWidth: 2,
    borderStyle: "dashed",
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
  },

  name: {
    fontWeight: 'bold',
  },
});

export default DocItem;
