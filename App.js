import {StyleSheet, Text, View, Button} from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
      <Button title='enter' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    margin: 16,
    borderWidth: 2,
    borderColor: '#000',
    padding: 16
  },
})
