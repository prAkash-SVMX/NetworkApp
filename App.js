/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState, useEffect } from 'react';

 // import all the components we are going to use
 import { SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';
 
 import NetInfo from '@react-native-community/netinfo';

const App = () => {
  const [netInfo, setNetInfo] = useState('');
  useEffect(() => {
    
    const unsubscribe = NetInfo.addEventListener((state) => {
      setNetInfo(
        `Connection type: ${state.type}
        Is connected?: ${state.isConnected}
        IP Address: ${state.details.ipAddress}`
      );
    });

    return () => {
    
      unsubscribe();
    };
  }, []);

  const getNetInfo = () => {
   
    NetInfo.fetch().then((state) => {
      alert(
        `Connection type: ${state.type}
        Is connected?: ${state.isConnected}
        IP Address: ${state.details.ipAddress}
        SSID : ${state.details.ssid}
        Strenth :${state.details.strength}
        Subnet :${state.details.subnet}

        `

      );
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.header}>
          React Native NetInfo
          {'\n'}
          To Get NetInfo information
        </Text>
        <Text style={styles.textStyle}>
          {/*Here is NetInfo to get device type*/}
          {netInfo}
        </Text>
        <Button title="Get more detailed Info" onPress={getNetInfo} color="#841584" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    marginTop: 30,
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    paddingVertical: 20,
  },
});

export default App;
