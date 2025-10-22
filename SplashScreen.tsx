import { StatusBar } from 'expo-status-bar';


import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
// 5 components are used in for this screen. 
// styleSheet: makes the app look good. 
// text: to give the user information on different elements in the app.
// view: allows the user to see the coded components.
// images: help the user identify and get an alternitive view of what is trying to be expressed by the app. 
// TouchableOpacity: The button will be used to navigate to the home screen.

import {NavigationContainer} from '@react-navigation/native';
//installed 'react-navigation/native' dependency to remove an error.







export default function SplashScreen({navigation}:any)
//Changed default function to Navigation.
{
  return (
    <View style={styles.container}>
      <Text>WELCOME TO CAFE FRESH</Text>
    
      <Image 
        source={{ uri: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687' }}
        style={styles.image}
      />

       <TouchableOpacity
       onPress={()=> navigation.navigate('')}
       ></TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 350,
    borderRadius: 10,
    marginVertical: 20,
  },
});
