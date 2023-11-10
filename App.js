import {StyleSheet, TextInput, View, Button, FlatList} from 'react-native'
import {useState} from 'react'
import uuid from 'react-native-uuid'

import GoalItem from './components/GoalItem'


export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [goalList, setGoalList] = useState([])

  const updateUserInput = enteredText => setEnteredGoalText(enteredText)
  const addGoalToList = () => setGoalList(currentGoals => [
    ...currentGoals,
    {text: enteredGoalText, key: uuid.v4()}
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
        <FlatList
          data={goalList}
          renderItem={goal => <GoalItem text={goal.item.text} />}
          alwaysBounceVertical={false}
        />
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
