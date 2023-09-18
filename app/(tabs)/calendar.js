import { StyleSheet, Text, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import { useState } from "react";

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <View style={styles.container}>
      <CalendarPicker
      onDateChange={setSelectedDate}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
});