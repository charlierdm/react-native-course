import {StyleSheet, View, Text} from 'react-native'

const GoalItem = ({text}) =>
  <View style={styles.goalItem}>
    <Text style={styles.goalText}>
      {text}
    </Text>  
  </View>

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#424242',
  },
  goalText: {
    color: '#fff'
  },
})

export default GoalItem