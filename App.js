import {StyleSheet, TextInput, View, Button, FlatList} from 'react-native'
import {useState} from 'react'

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'


export default function App() {
  const [goalList, setGoalList] = useState([])

  const addGoalToList = () => setGoalList(currentGoals => [
    ...currentGoals,
    {text: enteredGoalText, key: uuid.v4()}
  ])

  return (
    <View style={styles.appContainer}>
      <GoalInput addGoalToList={addGoalToList} />
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
  goalsContainer: {
    flex: 4,
  },
})
