import { View, Text, Image, StyleSheet, TouchableOpacity, Button, TextInput } from 'react-native';
import React, { useState } from "react";
import Modal from "react-native-modal";
import { Ionicons } from '@expo/vector-icons';

import UserRegistration from './UserRegistration'
import { useDispatch, useSelector } from 'react-redux';
import { signIn, signOut, updateProfile, selectAuth } from '../Redux/Actions/authSlice';


//For users state
//  const handleSignIn = (userProfile) => {
//    dispatch(signIn(userProfile));
//  };
//
//  const handleSignOut = () => {
//    dispatch(signOut());
//  };
//
//  const handleUpdateProfile = (updatedProfile) => {
//    dispatch(updateProfile(updatedProfile));
//  };


const ProfilePage = () => {
  const dispatch = useDispatch();
  const auth = useSelector(selectAuth);
  const [isModalVisible, setModalVisible] = useState(true);

 const handleSignIn = () => {
    // Create user profile object
    const userProfile = {
      name: `${firstName} ${lastName}`,
      email: email,
      password: password,
    };

    // Dispatch signIn action with user profile
    dispatch(signIn(userProfile));
  };
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFirstNameChange = (text) => {
    setFirstName(text);
  };

  const handleLastNameChange = (text) => {
    setLastName(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

return (
 <View>
    {/* Render registration modal if user is not authenticated */}
   {!auth.isAuthenticated && (
     <View style={{ flex: 1 }}>
       <Button title="Show modal" onPress={handleSignIn} />

       <Modal isVisible={!auth.isAuthenticated}>
         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
           {/* Registration form */}
           <TextInput
             placeholder="First Name"
             onChangeText={handleFirstNameChange}
             value={firstName}
             style={styles.input}
           />
           <TextInput
             placeholder="Last Name"
             onChangeText={handleLastNameChange}
             value={lastName}
             style={styles.input}
           />
           <TextInput
             placeholder="Email"
             onChangeText={handleEmailChange}
             value={email}
             style={styles.input}
           />
           <TextInput
             placeholder="Password"
             onChangeText={handlePasswordChange}
             value={password}
             secureTextEntry
             style={styles.input}
           />
           <Button title="Register" onPress={handleSignIn} />
         </View>
       </Modal>
     </View>
   )}

   {auth.isAuthenticated && (
      <View style={styles.container}>
                <Text>{auth.userProfile.name}</Text>
                <TouchableOpacity style={styles.editButton}>
                  <Ionicons name="pencil" size={24} color="white" />
                </TouchableOpacity>
                  <Text style={styles.text}>Age: ashdhasb</Text>
                  <Text style={styles.text}>City:asdas</Text>
      </View>
    )}
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  surname: {
    fontSize: 20,
    fontWeight: 'normal',
  },
  input: {
  },
  container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: 20,
    },
    editButton: {
      position: 'absolute',
      top: 20,
      right: 20,
      backgroundColor: 'blue',
      borderRadius: 20,
      padding: 10,
    },
    profileContainer: {
      alignItems: 'center',
      marginTop: 50,
    },
    avatarContainer: {
      marginBottom: 20,
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    text: {
      fontSize: 18,
      marginBottom: 10,
    },
});

export default ProfilePage;
