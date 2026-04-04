import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MatchDetailScreen() {
  const { id, date, result } = useLocalSearchParams<{
    id: string;
    date: string;
    result: string;
  }>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>試合詳細</Text>
        <Text style={styles.item}>ID: {id}</Text>
        <Text style={styles.item}>日付: {date}</Text>
        <Text style={styles.item}>結果: {result}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    padding: 20,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 16,
  },
  item: {
    fontSize: 16,
    marginBottom: 8,
  },
});
