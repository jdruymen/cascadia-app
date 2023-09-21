import { StyleSheet, Text, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import { useState } from "react";

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <CalendarPicker
          onDateChange={setSelectedDate}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.event}>
          <Text style={styles.eventText}>Volition Brewery - 12pm to 7pm</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {

    },
    topContainer: {
      paddingTop: 50,
      paddingBottom: 50,
    },
    bottomContainer: {
      alignItems: "center",
      justifyContent: "center",
    },
    event: {
      width: '90%',
      borderColor: "black",
      borderWidth: 1,
      borderRadius: 10,
    },
    eventText: {
      paddingLeft: 10,
    }
});