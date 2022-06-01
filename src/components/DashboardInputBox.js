import { useState } from "react";
import { CheckBox, Text, StyleSheet, View } from "react-native";

const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const DashboardInputBox = () => {
  const [checkedState, setCheckedState] = useState(
    new Array(weekdays.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  return (
    <div className="App">
      <h3>Workout Days:</h3>
      <ul className="toppings-list">
        {weekdays.map((day, index) => {
          return (
            <li key={index}>
              <div>
                <div>
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={day}
                    value={day}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{day}</label>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});

export default DashboardInputBox;
