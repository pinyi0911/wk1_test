import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Image source ={{uri:'https://i.pinimg.com/564x/82/ce/25/82ce2537cbcbc69dc8c1fa5716dcf446.jpg'}}
             style={{width:250,height:250}} 
      />
      <Text style={styles.text1}>能成功真是太好了嗚嗚</Text>
      <Text style={styles.text2}>110919041 何品儀 </Text>

      <StatusBar style="auto" />
    </View>


    
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dadbf7',
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },
  text1: {
    fontSize:20,
    fontWeight:'bold',
    color:'#534ecf',
    marginTop:20,
    
  },
  text2: {
    color:'#534ecf',
    marginTop:15,
  },
});
