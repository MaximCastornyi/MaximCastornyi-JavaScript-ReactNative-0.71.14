import React from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TextInput,
} from "react-native";

const Profile = () => {
  return (
    <SafeAreaView>
      <TextInput style={styles.input1} placeholder="Your email" />
      <TextInput
        style={styles.input2}
        placeholder="Your password"
        secureTextEntry={true}
      />

      <Button
        title="Press me"
        onPress={() => Alert.alert("Sorry, service is not available for you!")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input1: {
    marginTop: 150,
    height: 50,
    margin: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  input2: {
    marginBottom: 50,
    height: 50,
    margin: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});

export default Profile;
