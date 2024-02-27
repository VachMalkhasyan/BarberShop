import React, { useState } from "react";
import { Button, StyleSheet, TextInput, Alert } from "react-native";
import axios from "axios"; // Import Axios for making HTTP requests

const UserRegistration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [name, setName] = useState("");

  const handleSignUp = async () => {
  console.log(2)
    try {
      const response = await axios.post("http://localhost:1337/api/barber-users", {
        Email: email,
        Password: password,
        Firstname: firstname,
        Name: name
      });
      console.log(Email,Firstname,Name)

      // Assuming your API returns a success message upon successful registration
      Alert.alert("Success", response.data.message);
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <>
      <TextInput
        style={styles.input}
        value={email}
        placeholder={"Email"}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize={"none"}
      />
      <TextInput
        style={styles.input}
        value={password}
        placeholder={"Password"}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        value={firstname}
        placeholder={"Firstname"}
        onChangeText={(text) => setFirstname(text)}
      />
      <TextInput
        style={styles.input}
        value={name}
        placeholder={"Name"}
        onChangeText={(text) => setName(text)}
      />
      <Button title={"Sign Up"} onPress={handleSignUp} />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
});

export default UserRegistration;
