import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from 'react-native-elements';
import db from '../config';

export default class ReadDetails extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <View>
                  <Header
                    backgroundColor={'black'}
                    centerComponent={{
                      text:"Job Seeker Profile!",
                      style:{backgroundColor:"golden", fontSize:25, fontWeight:5}
                    }}
                  />
                    
                </View>
                

            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});