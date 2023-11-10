import {StyleSheet, TextInput, Button, View} from 'react-native'
import {useState} from 'react'
import uuid from 'react-native-uuid'

const GoalInput = ({setGoalList}) => {
  const [enteredGoalText, setEnteredGoalText] = useState('')

  const updateUserInput = enteredText => setEnteredGoalText(enteredText)

  const addGoalToList = () => setGoalList(currentGoals => [
    ...currentGoals,
    {text: enteredGoalText, key: uuid.v4()}
  ])

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='your goal'
        style={styles.textInput}
        onChangeText={updateUserInput}
      />
      <Button
        title='add goal'
        onPress={addGoalToList}
      />
  </View>

  )
}

const styles = StyleSheet.create({
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
})

export default GoalInput