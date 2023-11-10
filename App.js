import {StyleSheet, Text, TextInput, View, Button} from 'react-native'

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='your goal' style={styles.textInput} />
        <Button title='add goal' />
      </View>
      <View style={styles.goalsContainer}>
        <Text>list of goals</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#cccccc',
    marginRight: 8,
    padding: 5,
  },
  goalsContainer: {
    flex: 4,
  },
})
