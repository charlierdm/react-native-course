import {StyleSheet, Text, TextInput, View, Button} from 'react-native'
import {useState} from 'react'

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [goalList, setGoalList] = useState([])

  const updateUserInput = enteredText => setEnteredGoalText(enteredText)
  const addGoalToList = () => setGoalList(currentGoals => [
    ...currentGoals,
    enteredGoalText,
  ])

  return (
    <View style={styles.appContainer}>
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
      <View style={styles.goalsContainer}>
        {goalList.map((goal, index) =>
          <View key={index} style={styles.goalItem}>
            <Text style={styles.goalText}>
              {goal}
            </Text>  
          </View>
        )}
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
  goalItem: {
    marginVertical: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#424242',
  },
  goalText: {
    color: 'white'
  },
})
