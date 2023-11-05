import {StyleSheet, Text, TextInput, View, Button} from 'react-native'

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='your goal' style={styles.textInput} />
        <Button title='add goal' />
      </View>
      <View>
        <Text>list of goals</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    alignItems: 'stretch',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    flex: 1,
    marginRight: 8,
    padding: 5,
  },
})
