import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Course Goal'
          onChangeText={goalInputHandler}
        />
        <View style={styles.btnStyle}>
          <View style={styles.btnWidth}>
            <Button title='Add Goal' onPress={addGoalHandler} />
          </View>
          <View style={styles.btnWidth}>
            <Button
              title='Cancel'
              color='red'
              onPress={props.onCancel}
            ></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    padding: 10,
    marginBottom: 10
  },
  btnStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%'
  },
  btnWidth: {
    width: '40%'
  }
});

export default GoalInput;
